#!/usr/bin/env npx ts-node

/**
 * IndexNow Submission Script
 * 
 * Usage:
 *   npx ts-node scripts/indexnow-submit.ts           # Submit all URLs
 *   npx ts-node scripts/indexnow-submit.ts [urls...] # Submit specific URLs
 * 
 * Example:
 *   npx ts-node scripts/indexnow-submit.ts https://samkhan.net/blog/new-post
 */

import * as fs from "fs";
import * as path from "path";

const INDEXNOW_KEY = "505e7f8bf1c9482aa778af60aa569a43";
const SITE_URL = "https://samkhan.net";

// IndexNow endpoints - submit to one, they share with others
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

async function submitToIndexNow(urls: string[]): Promise<void> {
  const payload: IndexNowPayload = {
    host: "samkhan.net",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log(`\nSubmitting ${urls.length} URLs to IndexNow...\n`);
  console.log("URLs:");
  urls.forEach((url) => console.log(`  - ${url}`));
  console.log("");

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const statusLabel = response.status === 200 || response.status === 202 ? "OK" : "FAIL";
      console.log(`${statusLabel} ${endpoint}: ${response.status} ${response.statusText}`);
      
      // Only need to submit to one endpoint - they share with each other
      if (response.status === 200 || response.status === 202) {
        console.log("\nSuccess! URLs submitted to IndexNow.");
        console.log("   Search engines will be notified and may crawl soon.\n");
        return;
      }
    } catch (error) {
      console.log(`${endpoint}: Error - ${error}`);
    }
  }

  console.log("\n Failed to submit to all endpoints.\n");
}

function getAllBlogSlugs(): string[] {
  const contentDir = path.join(process.cwd(), "content", "blog");
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(".mdx", ""));
}

async function main() {
  const args = process.argv.slice(2);

  let urls: string[];

  if (args.length > 0) {
    // Submit specific URLs passed as arguments
    urls = args.filter((url) => url.startsWith("http"));
    
    if (urls.length === 0) {
      console.error("Please provide valid URLs starting with http/https");
      process.exit(1);
    }
  } else {
    // Submit all site URLs
    const slugs = getAllBlogSlugs();
    urls = [
      SITE_URL,
      `${SITE_URL}/blog`,
      `${SITE_URL}/resume`,
      ...slugs.map((slug) => `${SITE_URL}/blog/${slug}`),
    ];
  }

  await submitToIndexNow(urls);
}

main().catch(console.error);
