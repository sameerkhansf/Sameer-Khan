import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  regions: ["sfo1"],
  // gh-aw pushes agent evidence to memory/* branches (no app dir) — skip
  // building those. Exit 0 = ignore build, exit 1 = build.
  ignoreCommand:
    'case "$VERCEL_GIT_COMMIT_REF" in memory/*) exit 0;; *) exit 1;; esac',
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://*.google-analytics.com https://*.analytics.google.com; worker-src 'self' blob:; frame-ancestors 'none';",
        },
      ],
    },
    {
      source: "/:path*.(webp|jpg|jpeg|png|gif|svg)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Paths that content-negotiate markdown via Accept (see proxy.js) must
    // tell caches the response varies by Accept. trailingSlash: true means
    // canonical paths end in "/", so cover both forms.
    { source: "/", headers: [{ key: "Vary", value: "Accept" }] },
    { source: "/index.md", headers: [{ key: "Vary", value: "Accept" }] },
    {
      source: "/:lang(en-US|es|fr|de|ja|zh)/",
      headers: [{ key: "Vary", value: "Accept" }],
    },
    {
      source: "/:lang(en-US|es|fr|de|ja|zh)/blog/:slug/",
      headers: [{ key: "Vary", value: "Accept" }],
    },
    {
      source: "/blog/:slug",
      headers: [{ key: "Vary", value: "Accept" }],
    },
  ],
};
