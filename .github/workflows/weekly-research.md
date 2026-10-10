---
description: |
  This workflow performs research to  provides industry insights and competitive analysis.
  Reviews recent code, issues, PRs, industry news, and trends to create comprehensive
  research reports. Covers related products, research papers, market opportunities,
  business analysis, and new ideas. Creates GitHub discussions with findings to inform
  strategic decision-making.

on:
  schedule: weekly on monday
  workflow_dispatch:

permissions: read-all

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
    - hf.co # HF resolve/ downloads redirect to *.hf.co

models:
  default-ai-credits-pricing:
    input: 0.000001
    output: 0.000001

safe-outputs:
  threat-detection:
    engine:
      id: copilot
      env:
        COPILOT_PROVIDER_BASE_URL: https://openrouter.ai/api/v1
        COPILOT_MODEL: "nvidia/nemotron-3-super-120b-a12b:free"
        COPILOT_PROVIDER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
  create-discussion:
    title-prefix: "[weekly-research] "
    category: "ideas"

tools:
  bash: ["cat", "ls", "find", "grep", "head", "tail", "wc", "curl", "jq", "tr", "cut", "sort", "uniq"]
  github:
    toolsets: [all]
    min-integrity: none # This workflow is allowed to examine and comment on any issues or PRs

timeout-minutes: 30

engine:
  id: copilot
  # Offline BYOK mode has no web_fetch (github/gh-aw#65043); AWF's documented
  # route is shell curl with URL permission. Squid still enforces network.allowed.
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

source: githubnext/agentics/workflows/weekly-research.md@ae8d551f07c7ed7619f8c58c7bb4c3ac89395d38
---

# Weekly Research

RUN CONTRACT — read first: every run MUST end with exactly one safe-output tool call — `create_discussion` (the goal), or `noop` explaining what you investigated and why there was nothing worth reporting, or `report_incomplete` with the blocking reason. Ending the session without one of these three calls is a failed run. Do not stop after researching; carry the findings all the way through to the `create_discussion` call.

## Job Description

Do a deep research investigation in ${{ github.repository }} repository, and the related industry in general.

- Read selections of the latest code, issues and PRs for this repo.
- Read latest trends and news from the software industry on the Web.

Tools: read web pages with `curl -sL <url> | head -c 20000`; only this workflow's network allowlist is reachable (github.com, huggingface.co, openai.com, anthropic.com, ai.google.dev, blog.google, mistral.ai, deepseek.com, openrouter.ai and their subdomains), so pick sources there and never hunt for mirrors. Use the GitHub MCP tools for repo data (not curl to api.github.com) and `jq` for JSON; text tools are `grep`, `tr`, `cut`, `head`, `tail`, `sort`, `uniq`, `wc` — there is no Python, `sed`, or `awk`.
- A shell command answered with "Permission denied" is blocked by policy and will be denied every time: never run it, or a variant of it, again. Use an allowed command (`jq` for JSON, `grep`/`head` for text) or move on.

Exclusion for all sections: this repository's own publishing pipeline, gh-aw workflows, and agent automation are not research subjects — cover the outside world.

Create a new GitHub discussion with title starting with "[weekly-research]" containing a markdown report with

- Interesting news about the area related to this software project.
- Related products and competitive analysis
- Related research papers
- New ideas
- Market opportunities
- Business analysis
- Enjoyable anecdotes
- A final section titled "## Post queue": 5-7 concrete, narrow, TIL-able topic candidates (each one task with verifiable commands/results, one line each, no broad surveys) — external/industry topics only — never this repository's own workflows or automation; this section is for your own reference and the human's — nothing consumes it automatically

Only a new discussion should be created, no existing discussions should be adjusted.

At the end of the report list write a collapsed section with the following:
- All search queries (web, issues, pulls, content) you used
- All bash commands you executed
- All MCP tools you used

## Before you finish

You are an autonomous agent: keep going until the report is complete before ending your turn. Whatever happened above, your last action MUST be exactly one safe-output tool call: `create_discussion` (report written), `noop` (nothing worth reporting), or `report_incomplete` (blocked). Ending with a plain text message instead of a tool call is a failed run — if you notice yourself summarizing findings or announcing a plan as prose, that is the signal to make the tool call now.
