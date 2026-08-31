# samkhan.net

Personal site of Sameer Khan (Forward Deployed / AI Engineer). Next.js App
Router, Tailwind 3, MDX blog, deployed on Vercel.

## Invariants

- `lib/resume.ts` is the single source of truth for career facts. The
  homepage, `/resume`, JSON-LD, and `public/llms.txt` derive from it. Never
  edit career facts anywhere else; `public/SameerKhan-Resume.pdf` is compiled
  from LaTeX by hand and CI checks it stays in parity.
- No hand-rolling: prefer vendor tooling, official APIs, and already-installed
  dependencies. Read the vendor's docs before using an API.
- English-only routes. Legacy `/{lang}/` URLs 308-redirect via
  `next.config.js`; regression-tested.
- `Accept: text/markdown` content negotiation (proxy.js) serves markdown twins
  of `/` and blog posts. Keep `Vary: Accept` headers (vercel.ts) in sync.
- Design: editorial monochrome, Charis SIL (Charter descendant) via
  `next/font`, thin rules, mono metadata. No accent color, no cards, no
  decorative motion.

## Commands

- `npm run dev` / `npm run build` (prebuild regenerates `public/llms.txt` and
  markdown twins)
- `npm run lint && npm run typecheck && npm run validate:content`
- `npm run test:agents:ci` — builds nothing; starts the production server and
  runs `scripts/agent-readiness.test.mjs` (needs `npm run build` first)

## Agent skills

Third-party skills are installed via the `skills` CLI; `skills-lock.json` is
committed, the `.claude/` install directory is gitignored. Restore with
`npx skills`.
