import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-14">
      <p className="meta">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <nav aria-label="Site map" className="mt-8 border-t pt-6">
        <p className="meta mb-3">Where to look next:</p>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="link-quiet">
              /
            </Link>{" "}
            <span className="text-muted-foreground">resume and profile</span>
          </li>
          <li>
            <Link href="/blog/" className="link-quiet">
              /blog/
            </Link>{" "}
            <span className="text-muted-foreground">articles and AI model reviews</span>
          </li>
          <li>
            <a href="/sitemap.xml" className="link-quiet">
              /sitemap.xml
            </a>{" "}
            <span className="text-muted-foreground">full list of pages</span>
          </li>
          <li>
            <a href="/llms.txt" className="link-quiet">
              /llms.txt
            </a>{" "}
            <span className="text-muted-foreground">markdown site overview for agents</span>
          </li>
          <li>
            <a href="/openapi.json" className="link-quiet">
              /openapi.json
            </a>{" "}
            <span className="text-muted-foreground">machine-readable endpoints</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
