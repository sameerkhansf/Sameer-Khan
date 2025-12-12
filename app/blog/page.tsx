import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog";
import CategoryFilter from "@/components/blog/CategoryFilter";

export const metadata: Metadata = {
  title: "Blog | Sameer Khan",
  description:
    "Technical articles on React, TypeScript, AI/ML, and software engineering. Tips, tutorials, and insights from a full-stack developer.",
  openGraph: {
    title: "Blog | Sameer Khan",
    description:
      "Technical articles on React, TypeScript, AI/ML, and software engineering.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sameer Khan",
    description:
      "Technical articles on React, TypeScript, AI/ML, and software engineering.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <svg
                viewBox="0 0 20 20"
                className="w-4 h-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/resume"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              View Resume
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts on software development, AI, and everything in between.
            Learning in public and sharing what I discover along the way.
          </p>
        </div>

        {/* Category Filter and Posts */}
        <CategoryFilter
          posts={posts}
          featuredPosts={featuredPosts}
          categories={categories}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Sameer Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
