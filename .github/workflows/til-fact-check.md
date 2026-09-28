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
  # Research reads any public page via Copilot's web-fetch, which gh-aw documents
  # is not bound by this list (github/gh-aw#63474); a per-vendor domain list only
  # blocked shell curl and leaked into threat detection's allowlist. Per the gh-aw
  # network guide, research needing wide access documents the rationale (here)
  # and is monitored with `gh aw audit <run-id>`. openrouter.ai = BYOK provider.
  allowed:
    - defaults
    - github
    - python
    - openrouter.ai

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
    # Measured on the same known-bad post (PRs #105, #111): super-120b caught
    # 1 of 8 documented errors, ultra-550b 4 of 8. qwen3.8-27b and inkling runs
    # died on quota/auth (#109, #110), so they are unmeasured.
    COPILOT_MODEL: "nvidia/nemotron-3-ultra-550b-a55b:free"
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
        echo "https://huggingface.co/$m/raw/main/LICENSE"
      done >> urls.txt
      n=0
      sort -u urls.txt | head -60 | while read -r u; do
        n=$((n+1))
        if curl -sfL --max-time 20 "$u" -o "sources/$n.txt"; then echo "sources/$n.txt $u" >> sources/index.txt
        else echo "UNREACHABLE $u" >> sources/index.txt; fi
      done
      # Price claims: OpenRouter's models API is the per-token price sheet for
      # every model it lists (run 36399583797 could not verify prices without it).
      if curl -sfL --max-time 30 https://openrouter.ai/api/v1/models \
        | jq '[.data[] | {id, name, pricing: {prompt: .pricing.prompt, completion: .pricing.completion}, context_length}]' \
        > sources/openrouter-models.json; then
        echo "sources/openrouter-models.json https://openrouter.ai/api/v1/models" >> sources/index.txt
      else echo "UNREACHABLE https://openrouter.ai/api/v1/models" >> sources/index.txt; fi
      cat sources/index.txt
    env:
      GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      PR: ${{ github.event.pull_request.number }}

tools:
  web-fetch:
  bash: ["cat", "ls", "head", "tail", "wc", "grep", "jq"]
  github:
    toolsets: [default]
# max-turns is also the AWF per-run LLM invocation cap (github/gh-aw#52836);
# gh-aw's default is 500. A strict 20+ claim check hit 250/250 (run 36401129945).
timeout-minutes: 60

---

# TIL Fact Check

RUN CONTRACT — read first: every run MUST end with exactly one `create_check_run` call. Ending without it is a failed run and blocks the merge.

## Gate

Read `/tmp/gh-aw/agent/factcheck/gate.txt` first. If it says `NOT_TIL`, immediately call `create_check_run` with `conclusion: success`, `title: "Not a TIL post"`, `summary: "No til-labeled blog post in this PR; nothing to fact-check."` and stop.

## Job (gate says `TIL`)

`/tmp/gh-aw/agent/factcheck/posts.txt` lists the post files in this PR. For each, `cat` it and verify it.

Every source the post links is already downloaded: `/tmp/gh-aw/agent/factcheck/sources/index.txt` maps each local file to its URL (Hugging Face model links also have their raw `README.md` and `config.json`), and marks `UNREACHABLE` links. Read these files with `cat` / `grep` / `jq`; never re-fetch a URL that is in the index. Your budget is tool calls, not claims: check many claims per call — one `grep -n -E 'claim1|claim2|claim3' <file>` per source file, never one call per claim. Use `web-fetch` only for a primary source the post does not link (for example a pricing page or an arXiv abstract), once per URL. You are the only check between this post and publication: it auto-merges the moment you pass it. Be strict.

1. List every checkable claim: numbers (parameters, context length, benchmark scores, prices, dates, sizes), specs (license, architecture, modality, organization), citations (paper titles and IDs), and every "X is not published / not specified" statement.
2. Verify each against a primary source you fetch in this run:
   - Model specs: `https://huggingface.co/<org>/<model>/raw/main/config.json` (for example `max_position_embeddings` is the context window) and the model card. A model card's pipeline tag is not a spec.
   - Benchmark tables: fetch the card and compare cell by cell; confirm each number comes from the column of the model the post names.
   - Prices: `sources/openrouter-models.json` (OpenRouter's price sheet; `pricing.prompt`/`completion` are USD per token, so multiply by 1,000,000 for per-1M prices) or the vendor's own pricing page via `web-fetch`. A price derived by other arithmetic is wrong.
   - Papers: `https://arxiv.org/abs/<id>`; the title must name this model and version.
   - "Not specified" claims: wrong if the source does publish it.
   - Links: every `UNREACHABLE` entry in the index is a failed claim.
   - A post that links no primary source at all fails: its claims are unsupported by definition.
   - Licenses: read the model's `LICENSE` file (prefetched for Hugging Face models) and check every statement about commercial use, attribution, or "permissive" against its text. A card's license *name* is not its terms (#116 called a non-commercial license commercial-friendly).
   - Hedging does not excuse a number: "~", "about", "estimated", "reportedly", or a footnote saying figures are estimates still needs a fetched source stating that figure. Unsourced estimates are unsupported (#116 shipped an invented "~3.5B" for DALL-E 3).
   - Every row of a comparison table must trace to a fetched source for that product. A row with no source is an unsupported claim.
   - "No official listing" / "not published" is verified only if you fetched the vendor's own page and it lacks the figure. "No source contradicts it" is never verification.
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
