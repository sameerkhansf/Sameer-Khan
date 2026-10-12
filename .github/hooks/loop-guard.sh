#!/usr/bin/env bash
# Copilot CLI preToolUse loop guard (docs: copilot/reference/hooks-reference).
# Free models stall into re-issuing one identical tool call until max-turns is
# gone: run 38196917994 ran the same grep 189 times in a row. Deny the 3rd
# identical call since the last file edit; the reason is shown to the model.
# A crash or non-zero exit denies every tool call (fail-closed), so every path
# exits 0, and empty stdout means the normal permission flow: never emit "allow".
command -v jq >/dev/null 2>&1 || exit 0
in=$(cat)
sid=$(jq -r '.sessionId // "session"' <<<"$in" 2>/dev/null | tr -cd 'A-Za-z0-9_-')
state="${TMPDIR:-/tmp}/copilot-loop-guard-${sid:-session}"
case "$(jq -r '.toolName // ""' <<<"$in" 2>/dev/null)" in
  # A file changed, so re-running a command (e.g. the lint gate) is legitimate.
  create|edit|str_replace_editor|apply_patch) : >"$state" 2>/dev/null; exit 0 ;;
esac
# Key on the shell command alone: the model rewords `description` between repeats.
key=$(jq -cS '(.toolArgs | if type == "string" then (fromjson? // .) else . end) as $a
  | [.toolName, ($a.command? // $a)]' <<<"$in" 2>/dev/null | cksum | cut -d' ' -f1)
echo "$key" >>"$state" 2>/dev/null || exit 0
n=$(grep -cx "$key" "$state")
if [ "$n" -ge 3 ]; then
  jq -cn --argjson prior "$((n - 1))" '{permissionDecision: "deny", permissionDecisionReason:
    "Loop guard: this exact tool call already ran \($prior) times since the last file edit and returned the same output each time, so running it again cannot produce anything new. Use the output you already have, try a different file or search term, or drop the claim and move on."}'
fi
exit 0
