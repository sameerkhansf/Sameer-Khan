"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Featured Image */}
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative">
          <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Featured Badge on Image */}
            {post.featured && (
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold rounded-md shadow-lg backdrop-blur-sm z-10">
                ⭐ Featured
              </div>
            )}
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Header Section - Category, Date, Read Time */}
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* Left side: Category, Date, Read Time */}
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            {/* First row: Category and Date */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap">
                {post.category}
              </span>
              <time 
                dateTime={post.date} 
                className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
            {/* Second row: Read Time */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {post.readingTime}
              </span>
            </div>
          </div>
          
          {/* Right side: Featured Badge (if no image) */}
          {!post.image && post.featured && (
            <div className="px-2.5 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold rounded-lg shadow-sm flex-shrink-0 self-start">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Title - Limited to 2 lines */}
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:underline decoration-2 underline-offset-4 block"
          >
            {post.title}
          </Link>
        </h2>

        {/* Description - Limited to 2 lines */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
          {post.description}
        </p>

        {/* Tags Section */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover Arrow Indicator */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <svg
            className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}
