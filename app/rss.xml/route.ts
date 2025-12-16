import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = "https://sameerkhan.me";

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Sameer Khan's Blog</title>
    <link>${siteUrl}</link>
    <description>Technical articles on AI models, React, TypeScript, and software engineering by Sameer Khan, Full-Stack Software Engineer in San Francisco.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/profile.jpg</url>
      <title>Sameer Khan's Blog</title>
      <link>${siteUrl}</link>
    </image>
    <copyright>© ${new Date().getFullYear()} Sameer Khan. All rights reserved.</copyright>
    <managingEditor>khansam@sonoma.edu (Sameer Khan)</managingEditor>
    <webMaster>khansam@sonoma.edu (Sameer Khan)</webMaster>
    <category>Technology</category>
    <category>Software Engineering</category>
    <category>AI/ML</category>
    <category>Web Development</category>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>khansam@sonoma.edu (Sameer Khan)</author>
      <category>${post.category}</category>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("\n      ")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
