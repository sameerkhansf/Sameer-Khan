import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/blog";
import {
  identity,
  summary,
  experience,
  research,
  education,
  skills,
} from "@/lib/resume";

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
    console.log(`Generated: ${filePath}`);
  }

  // llms.txt is generated wholly from lib/resume.ts + the post index, so the
  // bio can never drift from the site again (it used to be hand-written here).
  const publicDir = path.join(process.cwd(), "public");
  const llmsPath = path.join(publicDir, "llms.txt");
  const byCategory = new Map<string, typeof posts>();
  for (const post of posts) {
    const list = byCategory.get(post.category) ?? [];
    list.push(post);
    byCategory.set(post.category, list);
  }
  const articleLines: string[] = [];
  for (const [category, categoryPosts] of byCategory) {
    articleLines.push(`**${category}:**`);
    for (const post of categoryPosts) {
      articleLines.push(
        `- [${post.title}](https://samkhan.net/blog/${post.slug}): ${post.description}`
      );
    }
    articleLines.push("");
  }
  const llms = `# ${identity.name}

> ${summary}

Based in ${identity.location}. This file follows https://llmstxt.org/.

## Experience

${experience
  .map(
    (job) =>
      `- **${job.title} at ${job.org}** (${job.period}, ${job.location}):\n${job.bullets.map((b) => `  - ${b}`).join("\n")}`
  )
  .join("\n")}

## Research

${research
  .map((r) => `- **${r.title}** (${r.org}): ${r.bullets.join(" ")}`)
  .join("\n")}

## Education

${education
  .map(
    (e) =>
      `- **${e.school}**: ${e.degree} (${e.period}).${e.notes.length ? " " + e.notes.join(" ") : ""}`
  )
  .join("\n")}

## Skills

${skills.map((s) => `- **${s.group}**: ${s.items}`).join("\n")}

## Blog

Technical articles on AI, React, Next.js, TypeScript, and software development.
All posts are available in LLM-friendly markdown: append \`.md\` to any blog post
URL, or send \`Accept: text/markdown\`.

### Articles

${articleLines.join("\n").trimEnd()}

## Contact

- Email: ${identity.email}
- Website: ${identity.site}
- LinkedIn: ${identity.linkedin}
- GitHub: ${identity.github}
- X: ${identity.twitter}
`;
  fs.writeFileSync(llmsPath, llms);
  console.log(`Generated: public/llms.txt (${posts.length} posts)`);

  // Homepage markdown for Accept: text/markdown negotiation — llms.txt is
  // already the maintained markdown overview of the site, so reuse it.
  fs.copyFileSync(llmsPath, path.join(publicDir, "index.md"));
  console.log("Generated: public/index.md (from llms.txt)");

  console.log(`\nGenerated ${posts.length} markdown files in public/blog/`);
}

// Run if called directly
generateMarkdownFiles().catch(console.error);

export { generateMarkdownFiles };
