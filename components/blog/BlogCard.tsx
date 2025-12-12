"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      {/* Featured Image */}
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-700">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium">
            {post.category}
          </span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-medium rounded-md">
          Featured
        </div>
      )}
    </article>
  );
}
