import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sameerkhan.me";
  const posts = getAllPosts();

  // Get the latest post date for blog page lastModified
  const latestPostDate = posts.length > 0
    ? new Date(Math.max(...posts.map((p) => new Date(p.updated || p.date).getTime())))
    : new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date("2025-12-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic blog posts
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated ? new Date(post.updated) : new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...blogPosts];
}
