// MDX compile gate: the same compiler next-mdx-remote uses, so a post that
// would break `next build` (e.g. a bare `<50ms`) fails here with file:line:col.
import { compile } from "@mdx-js/mdx";
import matter from "gray-matter";
import { readFileSync, globSync } from "node:fs";
import remarkGfm from "remark-gfm";

let failed = false;
for (const file of globSync("content/blog/**/*.mdx")) {
  try {
    await compile(matter(readFileSync(file, "utf8")).content, { remarkPlugins: [remarkGfm] });
  } catch (e) {
    failed = true;
    console.error(`${file}:${e.line}:${e.column} MDX ${e.reason}`);
  }
}
process.exit(failed ? 1 : 0);
