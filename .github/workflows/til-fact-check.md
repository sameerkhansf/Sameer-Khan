---
name: TIL Fact Check
description: |
  Required merge gate for TIL posts (gh-aw governance pattern: a ruleset
  requires the check this workflow produces). Verifies every factual claim in
  a new content/blog post against its primary source and posts the
  `fact-check` check run. Non-TIL PRs get an immediate success.

on:
  pull_request:
    # labeled: a PR that gains `til` after a NOT_TIL pass must be re-verified.
    types: [opened, synchronize, reopened, labeled]
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
  # No `target`: the check attaches to the triggering event's head SHA, i.e. the
  # commit the agent actually read, never a newer unverified head.
  create-check-run:
    name: fact-check

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
      # proxy.js negotiates markdown only for /blog/[\w-]+ slugs; a dotted
      # slug (#101: qwen-image-2.1-...) would silently lose its markdown twin.
      grep -vE '^content/blog/[a-z0-9-]+\.mdx$' /tmp/gh-aw/agent/factcheck/posts.txt \
        > /tmp/gh-aw/agent/factcheck/bad-slugs.txt || true
      cat /tmp/gh-aw/agent/factcheck/gate.txt /tmp/gh-aw/agent/factcheck/posts.txt
      # DeterministicOps: fetch every cited source once, so the agent reads files
      # instead of re-fetching (run 36388743650 burned 250/250 invocations on
      # repeated `curl README | grep`). Hugging Face model links also get the raw
      # README and config.json, the primary spec sources.
      cd /tmp/gh-aw/agent/factcheck && mkdir -p sources && : > sources/index.txt
      while read -r f; do [ -f "$GITHUB_WORKSPACE/$f" ] && grep -oE '\]\(https?://[^) ]+' "$GITHUB_WORKSPACE/$f" | cut -c3-; done < posts.txt | sort -u > urls.txt
      sed -nE 's#^https://huggingface\.co/([^/]+/[^/?#]+)/?$#\1#p' urls.txt | while read -r m; do
        echo "https://huggingface.co/$m/raw/main/README.md"; echo "https://huggingface.co/$m/raw/main/config.json"
      done >> urls.txt
      n=0
      sort -u urls.txt | head -60 | while read -r u; do
        n=$((n+1))
        if curl -sfL --max-time 20 "$u" -o "sources/$n.txt"; then echo "sources/$n.txt $u" >> sources/index.txt
        else echo "UNREACHABLE $u" >> sources/index.txt; fi
      done
      cat sources/index.txt
    env:
      GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      PR: ${{ github.event.pull_request.number }}

tools:
  web-fetch:
  bash: ["cat", "ls", "head", "tail", "wc", "grep", "jq"]
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

`/tmp/gh-aw/agent/factcheck/posts.txt` lists the post files in this PR. For each, `cat` it and verify it.

Every source the post links is already downloaded: `/tmp/gh-aw/agent/factcheck/sources/index.txt` maps each local file to its URL (Hugging Face model links also have their raw `README.md` and `config.json`), and marks `UNREACHABLE` links. Read these files with `cat` / `grep` / `jq`; never re-fetch a URL that is in the index. Use `web-fetch` only for a primary source the post does not link (for example a pricing page or an arXiv abstract), once per URL. You are the only check between this post and publication: it auto-merges the moment you pass it. Be strict.

1. List every checkable claim: numbers (parameters, context length, benchmark scores, prices, dates, sizes), specs (license, architecture, modality, organization), citations (paper titles and IDs), and every "X is not published / not specified" statement.
2. Verify each against a primary source you fetch in this run:
   - Model specs: `https://huggingface.co/<org>/<model>/raw/main/config.json` (for example `max_position_embeddings` is the context window) and the model card. A model card's pipeline tag is not a spec.
   - Benchmark tables: fetch the card and compare cell by cell; confirm each number comes from the column of the model the post names.
   - Prices: the vendor's pricing page or `https://openrouter.ai/api/v1/models`. A price derived by arithmetic is wrong.
   - Papers: `https://arxiv.org/abs/<id>`; the title must name this model and version.
   - "Not specified" claims: wrong if the source does publish it.
   - Links: every `UNREACHABLE` entry in the index is a failed claim.
   - A post that links no primary source at all fails: its claims are unsupported by definition.
   - Every path listed in `/tmp/gh-aw/agent/factcheck/bad-slugs.txt` is a failed claim ("slug must be lowercase letters, digits, and hyphens").
3. A claim is **wrong** if the source contradicts it and **unsupported** if you cannot find it in a fetched source. Descriptions of what a benchmark measures, or advice, need a source too.

## Verdict

- `conclusion: success` only if every checkable claim is verified correct.
- `conclusion: failure` if any claim is wrong or unsupported, or if you could not fetch a source a claim depends on. When in doubt, fail: a false negative costs one day's post, and a false positive publishes an error.
- `title`: `N claims verified` or `N claims failed of M`.
- `summary`: one line per failed claim: file:line, what the post says, what the source says, the source URL. On success, list the claims checked with their source URLs.

Never edit files. Never approve based on the PR description's own evidence list: re-fetch every source yourself.

## Final reminder

Whatever happened above, your last action MUST be exactly one `create_check_run` call. If you run short of budget or a source is unreachable, call it with `conclusion: failure` and say why.
