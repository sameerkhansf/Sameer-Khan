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

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const filteredFeatured =
    selectedCategory === "All"
      ? featuredPosts
      : featuredPosts.filter((post) => post.category === selectedCategory);

  // Count posts per category
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = posts.filter((post) => post.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === "All"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
            }`}
          >
            <span className="relative z-10">All</span>
            {selectedCategory === "All" && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-50 dark:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
          {categories.map((category) => {
            const count = categoryCounts[category] || 0;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      selectedCategory === category
                        ? "bg-white/20 dark:bg-gray-900/20"
                        : "bg-gray-200/50 dark:bg-gray-700/50"
                    }`}
                  >
                    {count}
                  </span>
                </span>
                {selectedCategory === category && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-50 dark:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Featured Posts */}
      {filteredFeatured.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Featured
              </h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
            {filteredFeatured.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      {filteredPosts.length > 0 ? (
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {filteredFeatured.length > 0 ? "All Posts" : "Latest Posts"}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : (
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
    </>
  );
}
