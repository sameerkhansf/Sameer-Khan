// Agent-readiness checks. Run against a server:
//   BASE_URL=https://samkhan.net npm run test:agents   (default: localhost:3000)
// Runs under `tsx --test` so it can import the TypeScript career data source.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { extractText, getDocumentProxy } from "unpdf";
import { identity, experience, education, skills } from "../lib/resume.ts";

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");

test("nonexistent path returns 404 with recovery links", async () => {
  const res = await fetch(`${BASE}/this-path-does-not-exist-12345`);
  assert.equal(res.status, 404);
  const body = await res.text();
  for (const link of ["/sitemap.xml", "/llms.txt", "/openapi.json", "/blog/"]) {
    assert.ok(body.includes(link), `404 body should link to ${link}`);
  }
});

test("homepage negotiates markdown via Accept: text/markdown", async () => {
  const res = await fetch(`${BASE}/`, {
    headers: { Accept: "text/markdown" },
  });
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") || "", /^text\/markdown/);
  assert.match(res.headers.get("vary") || "", /accept/i);
  const body = await res.text();
  assert.ok(body.trimStart().startsWith("#"), "body should be markdown");
});

test("blog post negotiates markdown via Accept: text/markdown", async () => {
  const res = await fetch(`${BASE}/blog/building-this-portfolio/`, {
    headers: { Accept: "text/markdown" },
  });
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type") || "", /^text\/markdown/);
  assert.match(res.headers.get("vary") || "", /accept/i);
});

test("openapi.json is a valid OpenAPI 3.x document", async () => {
  const res = await fetch(`${BASE}/openapi.json`);
  assert.equal(res.status, 200);
  const spec = await res.json();
  assert.match(spec.openapi, /^3\./);
  assert.ok(Object.keys(spec.paths).length >= 5, "spec should document endpoints");
});

test("openapi.json identity and routes match the career data source", async () => {
  const res = await fetch(`${BASE}/openapi.json`);
  const raw = await res.text();
  assert.ok(
    raw.includes(identity.title),
    `openapi description should carry the current title "${identity.title}"`
  );
  assert.ok(!raw.includes("{lang}"), "no retired localized routes documented");
  assert.ok(!raw.includes("Co-Founder, agentShop"), "no retired identity");
});

test("downloadable resume PDF stays in parity with lib/resume.ts", async () => {
  const pdf = await getDocumentProxy(
    new Uint8Array(await readFile("public/SameerKhan-Resume.pdf"))
  );
  const { text } = await extractText(pdf, { mergePages: true });
  const flat = text.replace(/\s+/g, " ");
  assert.ok(flat.includes(identity.title), `PDF carries "${identity.title}"`);
  for (const job of experience) {
    assert.ok(flat.includes(job.org), `PDF lists ${job.org}`);
    assert.ok(flat.includes(job.period.replaceAll(" - ", " – ")) || flat.includes(job.period),
      `PDF shows period for ${job.org} (${job.period})`);
  }
  for (const school of education) {
    assert.ok(flat.includes(school.school), `PDF lists ${school.school}`);
  }
  assert.ok(
    flat.includes("AWS (Certified Developer)"),
    "PDF certification line matches"
  );
  assert.ok(
    skills.every((s) => flat.includes(s.group)),
    "PDF has every skills group"
  );
});

test("/api/* returns structured JSON 404", async () => {
  const res = await fetch(`${BASE}/api/does/not/exist`);
  assert.equal(res.status, 404);
  assert.match(res.headers.get("content-type") || "", /application\/json/);
  const body = await res.json();
  assert.equal(body.error.code, "not_found");
  assert.ok(body.error.message && body.error.hint);
});

test("homepage serves headings and 500+ chars without JavaScript", async () => {
  const res = await fetch(`${BASE}/`);
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "exactly one h1");
  assert.ok((html.match(/<h2[\s>]/g) || []).length >= 2, "several h2s");
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
  assert.ok(text.length > 500, `visible text ${text.length} chars > 500`);
});

test("resume page serves the full document structure without JavaScript", async () => {
  const res = await fetch(`${BASE}/resume/`);
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "exactly one h1");
  assert.ok((html.match(/<h2[\s>]/g) || []).length >= 3, "several h2s");
  assert.ok((html.match(/<h3[\s>]/g) || []).length >= 2, "h3 depth under h2s");
});
