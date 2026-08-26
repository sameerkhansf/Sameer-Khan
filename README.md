# samkhan.net

Source for [samkhan.net](https://samkhan.net) — personal site, resume, and a
developer blog with an automated publishing pipeline.

Built with Next.js 16, TypeScript, Tailwind CSS, and MDX. Deployed on Vercel.

## Quick start

```bash
npm ci
npm run dev    # local dev server
npm run build  # production build (also regenerates markdown/llms.txt surfaces)
```

## How publishing works

Posts are written by agents running in GitHub Actions
([gh-aw](https://github.com/github/gh-aw)) and published by a human merge —
that merge is the only manual step.

- A daily scheduled workflow researches a topic and opens a pull request with
  a draft post. Commenting `/til <topic>` on an issue does the same on demand.
- Every PR runs through content gates: frontmatter schema validation,
  markdownlint, link checking (lychee), and a full build as the MDX compile
  gate.
- Merging publishes the post. The README index below, `llms.txt`, the
  sitemap, RSS, and per-post markdown files all regenerate automatically.

Agents draft; gates check; a person decides. Posts cite their sources and
make no first-hand testing claims unless a human wrote them.

## Agent-readable surfaces

Every post is also served as plain markdown at `/blog/<slug>.md`, indexed in
[`/llms.txt`](https://samkhan.net/llms.txt), and available by content
negotiation (`Accept: text/markdown`). The full post list is in the RSS feed
and sitemap.

## License

MIT. Content in `content/blog/` © Sameer Khan.

**Sameer Khan** — [samkhan.net](https://samkhan.net) ·
[GitHub](https://github.com/sameerkhansf) ·
[LinkedIn](https://linkedin.com/in/sameerkhansf) ·
[X](https://x.com/sameerkhan_sf)

## Blog index

<!-- count starts -->19<!-- count ends --> posts. [Atom/RSS feed](https://samkhan.net/rss.xml).

<!-- index starts -->
### Developer Tools

* [Running gh-aw agents on NVIDIA free NIM endpoints](https://samkhan.net/blog/running-gh-aw-agents-on-nvidia-free-nim-endpoints/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/running-gh-aw-agents-on-nvidia-free-nim-endpoints.mdx)) - 2026-08-26
* [Playwright MCP Setup Guide for Claude Code](https://samkhan.net/blog/playwright-mcp-claude-code-browser-automation/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/playwright-mcp-claude-code-browser-automation.mdx)) - 2025-12-14
* [Cursor vs Copilot vs Claude Code: 2025 Comparison](https://samkhan.net/blog/ai-coding-tools-comparison-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/ai-coding-tools-comparison-2025.mdx)) - 2025-12-12
* [How I Cut My Debugging Time in Half as a React Developer](https://samkhan.net/blog/how-i-cut-debugging-time-in-half/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/how-i-cut-debugging-time-in-half.mdx)) - 2025-12-12

### Web Development

* [TypeScript Type vs Interface: When to Use Each (2025)](https://samkhan.net/blog/typescript-type-vs-interface-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/typescript-type-vs-interface-2025.mdx)) - 2025-12-12
* [useEffect Guide: Fix Common React Problems 2025](https://samkhan.net/blog/useeffect-complete-guide-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/useeffect-complete-guide-2025.mdx)) - 2025-12-12

### AI

* [OLMo 3 32B Think Review: Best Open-Source LLM](https://samkhan.net/blog/allenai-olmo-3-32b-think-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/allenai-olmo-3-32b-think-review-2025.mdx)) - 2025-12-12
* [Amazon Nova 2 Lite Review: AWS AI Model Guide](https://samkhan.net/blog/amazon-nova-2-lite-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/amazon-nova-2-lite-review-2025.mdx)) - 2025-12-12
* [Claude Opus 4.5: Complete Developer Review](https://samkhan.net/blog/claude-opus-4-5-complete-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/claude-opus-4-5-complete-review-2025.mdx)) - 2025-12-12
* [DeepSeek V3.2 Speciale Review: Free GPT-5 Rival](https://samkhan.net/blog/deepseek-v3-2-speciale-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/deepseek-v3-2-speciale-review-2025.mdx)) - 2025-12-12
* [GPT-5.1 Codex Max vs Claude Opus 4.5 for Coding](https://samkhan.net/blog/gpt-5-1-codex-max-coding-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/gpt-5-1-codex-max-coding-review-2025.mdx)) - 2025-12-12
* [GPT-5.2 Developer Review: First Look (Dec 2025)](https://samkhan.net/blog/gpt-5-2-developer-review/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/gpt-5-2-developer-review.mdx)) - 2025-12-12
* [GPT-5.2 Technical Review: OpenAI's Best Model](https://samkhan.net/blog/gpt-5-2-technical-review/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/gpt-5-2-technical-review.mdx)) - 2025-12-12
* [GPT-5.2 vs Gemini 3: Real Coding Test Results](https://samkhan.net/blog/gpt-5-2-vs-gemini-3-tested/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/gpt-5-2-vs-gemini-3-tested.mdx)) - 2025-12-12
* [Grok 4.1 Review: xAI's Latest Model Tested](https://samkhan.net/blog/grok-4-1-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/grok-4-1-review-2025.mdx)) - 2025-12-12
* [Mistral Devstral 2 Review: Agentic Coding Model](https://samkhan.net/blog/mistral-devstral-2-agentic-coding-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/mistral-devstral-2-agentic-coding-review-2025.mdx)) - 2025-12-12
* [Mistral Large 3 Review: GPT-5.2 Competitor?](https://samkhan.net/blog/mistral-large-3-review-2025/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/mistral-large-3-review-2025.mdx)) - 2025-12-12
* [Prompt Engineering Guide: Better AI Outputs](https://samkhan.net/blog/the-art-of-prompt-engineering/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/the-art-of-prompt-engineering.mdx)) - 2025-12-12

### Projects

* [How I Built This Portfolio with Next.js 16 and Tailwind CSS](https://samkhan.net/blog/building-this-portfolio/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/building-this-portfolio.mdx)) - 2025-01-10
<!-- index ends -->
