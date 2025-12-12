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
      {/* Header - Cleaner like Medium */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              ← Home
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/resume"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Resume
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        {/* Page Title - More Compact */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
            Blog
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
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

      {/* Newsletter Section */}
      <section className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Get notified when I publish new articles on AI, web development, and software engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <button className="px-6 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Sameer Khan. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/resume"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
