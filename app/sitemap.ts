import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://samkhan.net";
  const posts = getAllPosts();

  const latestPostDate =
    posts.length > 0
      ? new Date(
          Math.max(...posts.map((p) => new Date(p.updated || p.date).getTime()))
        )
      : new Date();

  const staticPages: MetadataRoute.Sitemap = [
    // Google only trusts <lastmod> when it is verifiably accurate, so no
    // build-time `new Date()`: the home and blog index change when a post
    // does, and the resume has no tracked date, so it carries none.
    // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
    {
      url: `${baseUrl}/`,
      lastModified: latestPostDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume/`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: post.updated ? new Date(post.updated) : new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...blogPosts];
}
