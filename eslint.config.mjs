import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import * as mdx from "eslint-plugin-mdx";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    ignores: [".claude/**", ".agents/**"],
}, {
    extends: [...nextCoreWebVitals],
}, {
    // MDX parse gate for posts: a bare `<50ms` in prose is JSX and breaks `next build`.
    ...mdx.flat,
    files: ["content/blog/**/*.mdx"],
}]);