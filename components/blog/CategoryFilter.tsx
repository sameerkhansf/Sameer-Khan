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

  return (
    <>
      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Featured Posts */}
      {filteredFeatured.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Featured
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredFeatured.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      {filteredPosts.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {filteredFeatured.length > 0 ? "All Posts" : "Latest Posts"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
