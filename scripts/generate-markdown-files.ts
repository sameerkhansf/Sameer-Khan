import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/blog";

/**
 * Generate .md versions of all blog posts for LLM consumption
 * Following llms.txt spec: https://llmstxt.org
 * 
 * Files will be generated at: public/blog/[slug].md
 */
async function generateMarkdownFiles() {
  const posts = getAllPosts();
  const publicBlogDir = path.join(process.cwd(), "public", "blog");

  // Create blog directory if it doesn't exist
  if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
  }

  // Get full post content for each
  const { getPostBySlug } = await import("@/lib/blog");

  for (const postMeta of posts) {
    const post = getPostBySlug(postMeta.slug);
    if (!post) continue;

    // Format markdown with frontmatter and content
    const markdown = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
date: "${post.date}"
${post.updated ? `updated: "${post.updated}"` : ""}
author: "${post.author}"
tags: ${JSON.stringify(post.tags)}
category: "${post.category}"
${post.image ? `image: "${post.image}"` : ""}
${post.imageAlt ? `imageAlt: "${post.imageAlt}"` : ""}
---

# ${post.title}

${post.description}

**Published:** ${new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
${post.updated && post.updated !== post.date
      ? `\n**Updated:** ${new Date(post.updated).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`
      : ""}
**Author:** ${post.author}
**Category:** ${post.category}
**Reading Time:** ${post.readingTime}
**Word Count:** ${post.wordCount}

---

${post.content}
`;

    // Write markdown file
    const filePath = path.join(publicBlogDir, `${post.slug}.md`);
    fs.writeFileSync(filePath, markdown, "utf-8");
    console.log(`✓ Generated: ${filePath}`);
  }

  // Homepage markdown for Accept: text/markdown negotiation — llms.txt is
  // already the maintained markdown overview of the site, so reuse it.
  const publicDir = path.join(process.cwd(), "public");
  fs.copyFileSync(
    path.join(publicDir, "llms.txt"),
    path.join(publicDir, "index.md")
  );
  console.log("✓ Generated: public/index.md (from llms.txt)");

  console.log(`\n✅ Generated ${posts.length} markdown files in public/blog/`);
}

// Run if called directly
generateMarkdownFiles().catch(console.error);

export { generateMarkdownFiles };
