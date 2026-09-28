---
name: TIL Fact Check
description: |
  Required merge gate for TIL posts (gh-aw governance pattern: a ruleset
  requires the check this workflow produces). Verifies every factual claim in
  a new content/blog post against its primary source and posts the
  `fact-check` check run. Non-TIL PRs get an immediate success.

on:
  pull_request:
    types: [opened, synchronize, reopened]
  bots: ["dependabot[bot]"]

permissions: read-all

inlined-imports: true

network:
  allowed:
    - defaults
    - github
    - python
    - openrouter.ai
    - openai.com
    - anthropic.com
    - blog.google
    - ai.google.dev
    - mistral.ai
    - deepseek.com
    - huggingface.co
    - z.ai
    - qwencloud.com
    - arxiv.org

models:
  default-ai-credits-pricing:
    input: 0.000001
    output: 0.000001

engine:
  id: copilot
  max-continuations: 8
  args: ["--allow-all-urls"]
  env:
    COPILOT_PROVIDER_BASE_URL: https://openrouter.ai/api/v1
    COPILOT_MODEL: "nvidia/nemotron-3-super-120b-a12b:free"
    COPILOT_PROVIDER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}

sandbox:
  agent:
    id: awf
    model-fallback: false
    token-steering: false

safe-outputs:
  threat-detection:
    continue-on-error: false
    engine:
      id: copilot
      env:
        COPILOT_PROVIDER_BASE_URL: https://openrouter.ai/api/v1
        COPILOT_MODEL: "nvidia/nemotron-3-super-120b-a12b:free"
        COPILOT_PROVIDER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
  create-check-run:
    name: fact-check
    target: triggering

steps:
  - name: Prepare fact-check inputs
    run: |
      mkdir -p /tmp/gh-aw/agent/factcheck
      gh pr view "$PR" --json labels,files > /tmp/gh-aw/agent/factcheck/pr.json
      jq -r '.files[].path | select(startswith("content/blog/"))' \
        /tmp/gh-aw/agent/factcheck/pr.json > /tmp/gh-aw/agent/factcheck/posts.txt
      if jq -e '[.labels[].name] | index("til")' /tmp/gh-aw/agent/factcheck/pr.json > /dev/null \
        && [ -s /tmp/gh-aw/agent/factcheck/posts.txt ]; then
        echo "TIL" > /tmp/gh-aw/agent/factcheck/gate.txt
      else
        echo "NOT_TIL" > /tmp/gh-aw/agent/factcheck/gate.txt
      fi
      cat /tmp/gh-aw/agent/factcheck/gate.txt /tmp/gh-aw/agent/factcheck/posts.txt
    env:
      GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      PR: ${{ github.event.pull_request.number }}

tools:
  web-fetch:
  bash: ["cat", "ls", "head", "tail", "wc", "curl"]
  github:
    toolsets: [default]
timeout-minutes: 45
max-turns: 250

---

# TIL Fact Check

RUN CONTRACT — read first: every run MUST end with exactly one `create_check_run` call. Ending without it is a failed run and blocks the merge.

## Gate

Read `/tmp/gh-aw/agent/factcheck/gate.txt` first. If it says `NOT_TIL`, immediately call `create_check_run` with `conclusion: success`, `title: "Not a TIL post"`, `summary: "No til-labeled blog post in this PR; nothing to fact-check."` and stop.

## Job (gate says `TIL`)

`/tmp/gh-aw/agent/factcheck/posts.txt` lists the post files in this PR. For each, `cat` it and verify it. You are the only check between this post and publication: it auto-merges the moment you pass it. Be strict.

1. List every checkable claim: numbers (parameters, context length, benchmark scores, prices, dates, sizes), specs (license, architecture, modality, organization), citations (paper titles and IDs), and every "X is not published / not specified" statement.
2. Verify each against a primary source you fetch in this run:
   - Model specs: `https://huggingface.co/<org>/<model>/raw/main/config.json` (for example `max_position_embeddings` is the context window) and the model card. A model card's pipeline tag is not a spec.
   - Benchmark tables: fetch the card and compare cell by cell; confirm each number comes from the column of the model the post names.
   - Prices: the vendor's pricing page or `https://openrouter.ai/api/v1/models`. A price derived by arithmetic is wrong.
   - Papers: `https://arxiv.org/abs/<id>`; the title must name this model and version.
   - "Not specified" claims: wrong if the source does publish it.
   - Links: every cited URL must resolve.
3. A claim is **wrong** if the source contradicts it and **unsupported** if you cannot find it in a fetched source. Descriptions of what a benchmark measures, or advice, need a source too.

## Verdict

- `conclusion: success` only if every checkable claim is verified correct.
- `conclusion: failure` if any claim is wrong or unsupported, or if you could not fetch a source a claim depends on. When in doubt, fail: a false negative costs one day's post, and a false positive publishes an error.
- `title`: `N claims verified` or `N claims failed of M`.
- `summary`: one line per failed claim: file:line, what the post says, what the source says, the source URL. On success, list the claims checked with their source URLs.

Never edit files. Never approve based on the PR description's own evidence list: re-fetch every source yourself.

## Final reminder

Whatever happened above, your last action MUST be exactly one `create_check_run` call. If you run short of budget or a source is unreachable, call it with `conclusion: failure` and say why.
