#!/usr/bin/env bash
# Self-check: bash .github/hooks/loop-guard.test.sh .github/hooks/loop-guard.sh
set -u
G=$1; export TMPDIR; TMPDIR=$(mktemp -d); fail=0
call() { printf '%s' "$1" | bash "$G"; echo "|exit=$?"; }
expect() { case "$2" in *"$3"*) echo "ok   $1";; *) echo "FAIL $1: got [$2]"; fail=1;; esac; }
grep1='{"sessionId":"s1","toolName":"bash","toolArgs":{"command":"grep -A5 X f.txt","description":"a"}}'
grep1b='{"sessionId":"s1","toolName":"bash","toolArgs":{"command":"grep -A5 X f.txt","description":"reworded"}}'
other='{"sessionId":"s1","toolName":"bash","toolArgs":{"command":"cat f.txt","description":"a"}}'
edit='{"sessionId":"s1","toolName":"edit","toolArgs":{"path":"content/blog/x.mdx"}}'
strargs='{"sessionId":"s2","toolName":"bash","toolArgs":"{\"command\":\"ls\"}"}'

expect "1st identical call allowed (empty output)" "$(call "$grep1")" "|exit=0"
expect "2nd identical call allowed"                "$(call "$grep1b")" "|exit=0"
r=$(call "$grep1"); expect "3rd identical call denied" "$r" '"permissionDecision":"deny"'
expect "denial still exits 0"                      "$r" "|exit=0"
expect "different command allowed"                 "$(call "$other")" "|exit=0"
[ "$(call "$other")" = "|exit=0" ] && echo "ok   allow path emits nothing" || { echo "FAIL allow path emitted output"; fail=1; }
call "$edit" >/dev/null
expect "edit resets: same command allowed again"   "$(call "$grep1")" "|exit=0"
[ "$(call "$grep1")" = "|exit=0" ] && echo "ok   2nd after edit allowed" || { echo "FAIL 2nd after edit"; fail=1; }
call "$strargs" >/dev/null; call "$strargs" >/dev/null
expect "string-encoded toolArgs handled"           "$(call "$strargs")" '"permissionDecision":"deny"'
expect "garbage stdin never fails"                 "$(call 'not json')" "|exit=0"
expect "empty stdin never fails"                   "$(call '')" "|exit=0"
r=$(call "$grep1"); printf '%s' "${r%|exit=*}" | jq -e '.permissionDecision=="deny" and (.permissionDecisionReason|length>20)' >/dev/null \
  && echo "ok   deny output is one valid JSON object" || { echo "FAIL deny JSON invalid"; fail=1; }
rm -rf "$TMPDIR"; exit $fail
