// Clone of simonw/til update_readme.py: rewrite README.md between
// <!-- index starts/ends --> and <!-- count starts/ends --> markers.
// Run after posts change; CI commits the result back (README-bot pattern).
import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/blog";

const readmePath = path.join(process.cwd(), "README.md");
const indexRe = /<!-- index starts -->[\s\S]*<!-- index ends -->/;
const countRe = /<!-- count starts -->[\s\S]*?<!-- count ends -->/;

const posts = getAllPosts();
const byCategory = new Map<string, typeof posts>();
for (const post of posts) {
  const list = byCategory.get(post.category) ?? [];
  list.push(post);
  byCategory.set(post.category, list);
}

const lines = ["<!-- index starts -->"];
for (const [category, categoryPosts] of byCategory) {
  lines.push(`### ${category}\n`);
  for (const post of categoryPosts) {
    const date = post.date.split("T")[0];
    lines.push(
      `* [${post.title}](https://samkhan.net/blog/${post.slug}/) ([source](https://github.com/sameerkhansf/Sameer-Khan/blob/main/content/blog/${post.slug}.mdx)) - ${date}`
    );
  }
  lines.push("");
}
if (lines[lines.length - 1] === "") lines.pop();
lines.push("<!-- index ends -->");

let readme = fs.readFileSync(readmePath, "utf-8");
if (!indexRe.test(readme)) {
  readme += `\n\n## Blog index\n\n<!-- count starts -->0<!-- count ends --> posts. [Atom/RSS feed](https://samkhan.net/rss.xml).\n\n<!-- index starts -->\n<!-- index ends -->\n`;
}
readme = readme.replace(indexRe, lines.join("\n"));
readme = readme.replace(
  countRe,
  `<!-- count starts -->${posts.length}<!-- count ends -->`
);
fs.writeFileSync(readmePath, readme);
console.log(`README index updated: ${posts.length} posts, ${byCategory.size} categories`);
