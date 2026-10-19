#!/usr/bin/env bash
# Copilot CLI preToolUse loop guard (docs: copilot/reference/hooks-reference).
# Free models burn max-turns without finishing: run 38196917994 ran one grep 189
# times in a row; run 38199570665 spent 168 calls on distinct "existing post?"
# greps. Two rules, reasons shown to the model:
#  1. deny the 3rd identical call since the last file edit;
#  2. past LOOP_GUARD_BUDGET calls (set per workflow in engine.env; unset = off),
#     deny shell commands other than `safeoutputs`, `npm run`, `git add/commit/status`, so the
#     run finishes (write, lint, PR, or report_incomplete) instead of dying at the cap.
# A crash or non-zero exit denies every tool call (fail-closed), so every path
# exits 0, and empty stdout means the normal permission flow: never emit "allow".
command -v jq >/dev/null 2>&1 || exit 0
in=$(cat)
sid=$(jq -r '.sessionId // "session"' <<<"$in" 2>/dev/null | tr -cd 'A-Za-z0-9_-')
state="${TMPDIR:-/tmp}/copilot-loop-guard-${sid:-session}"
tool=$(jq -r '.toolName // ""' <<<"$in" 2>/dev/null)
calls=$(( $({ wc -l <"$state.calls"; } 2>/dev/null || echo 0) + 1 ))
echo >>"$state.calls" 2>/dev/null
case "$tool" in
  # A file changed, so re-running a command (e.g. the lint gate) is legitimate.
  create|edit|str_replace_editor|apply_patch) : >"$state" 2>/dev/null; exit 0 ;;
esac
# Key on the shell command alone: the model rewords `description` between repeats.
key=$(jq -cS '(.toolArgs | if type == "string" then (fromjson? // .) else . end) as $a
  | [.toolName, ($a.command? // $a)]' <<<"$in" 2>/dev/null | cksum | cut -d' ' -f1)
echo "$key" >>"$state" 2>/dev/null || exit 0
n=$(grep -cx "$key" "$state")
cmd=$(jq -r '(.toolArgs | if type == "string" then (fromjson? // {}) else . end) | .command? // ""' <<<"$in" 2>/dev/null)
budget=${LOOP_GUARD_BUDGET:-0}
if [ "$budget" -gt 0 ] 2>/dev/null && [ "$calls" -gt "$budget" ] && [ "$tool" = bash ] \
  && ! [[ "$cmd" =~ ^[[:space:]]*(safeoutputs|npm[[:space:]]+run|git[[:space:]]+(add|commit|status))([[:space:]]|$) ]]; then
  jq -cn --argjson used "$((calls - 1))" '{permissionDecision: "deny", permissionDecisionReason:
    "Budget guard: \($used) tool calls used and the run is hard-stopped soon, so research is over. Finish now: write the post with the `create` tool (fix it with `edit`), run `npm run fix-content`, `git add` + `git commit` the post, then `safeoutputs create_pull_request`; if you cannot finish, `safeoutputs report_incomplete` with the reason. Only `safeoutputs`, `npm run`, `git add/commit/status`, and the file tools still run."}'
elif [ "$n" -ge 3 ]; then
  jq -cn --argjson prior "$((n - 1))" '{permissionDecision: "deny", permissionDecisionReason:
    "Loop guard: this exact tool call already ran \($prior) times since the last file edit and returned the same output each time, so running it again cannot produce anything new. Use the output you already have, try a different file or search term, or drop the claim and move on."}'
fi
exit 0
