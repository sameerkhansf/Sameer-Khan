import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            View Resume
          </Link>
        </div>
        <nav aria-label="Site map" className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">Where to look next:</p>
          <ul className="space-y-1">
            <li>
              <Link href="/blog/" className="text-blue-600 hover:underline">/blog/</Link> — articles and AI model reviews
            </li>
            <li>
              <a href="/sitemap.xml" className="text-blue-600 hover:underline">/sitemap.xml</a> — full list of pages
            </li>
            <li>
              <a href="/llms.txt" className="text-blue-600 hover:underline">/llms.txt</a> — markdown site overview for agents
            </li>
            <li>
              <a href="/openapi.json" className="text-blue-600 hover:underline">/openapi.json</a> — machine-readable endpoints
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
