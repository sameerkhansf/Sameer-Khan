"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import { BlogPostMeta } from "@/lib/blog";

interface CategoryFilterProps {
  posts: BlogPostMeta[];
  featuredPosts: BlogPostMeta[];
  categories: string[];
}

export default function CategoryFilter({
  posts,
  featuredPosts,
  categories,
}: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Count posts per category (from all posts)
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = posts.filter((post) => post.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  // Filter posts based on selected category
  // Latest Posts should show ALL posts (newest first), not just non-featured
  const allFilteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  // Featured posts for the Featured section (separate from Latest)
  const featuredSlugs = new Set(featuredPosts.map((p) => p.slug));
  const filteredFeatured = allFilteredPosts.filter((post) =>
    featuredSlugs.has(post.slug)
  );
  
  // Latest Posts = ALL filtered posts (already sorted by date/time in getAllPosts)
  const filteredPosts = allFilteredPosts;

  return (
    <>
      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-start gap-2 md:gap-3 mb-10 md:mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === "All"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => {
            const count = categoryCounts[category] || 0;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
                {count > 0 && (
                  <span className="ml-1.5 text-xs opacity-75">
                    ({count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Latest Posts - Show FIRST like Medium */}
      {filteredPosts.length > 0 && (
        <section>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Latest Posts
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Show "No posts" message only if there are NO posts at all (neither regular nor featured) */}
      {filteredPosts.length === 0 && filteredFeatured.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No posts in this category
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try selecting a different category or check back later.
          </p>
        </div>
      )}

      {/* Featured Posts - Show AFTER latest posts */}
      {filteredFeatured.length > 0 && (
        <section className="mt-16 md:mt-20">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Featured
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Handpicked articles worth reading
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
            {filteredFeatured.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
