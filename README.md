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

## Posts

Browse at [samkhan.net/blog](https://samkhan.net/blog) or subscribe to the
[Atom/RSS feed](https://samkhan.net/rss.xml). Sources live in
[`content/blog/`](content/blog/).
