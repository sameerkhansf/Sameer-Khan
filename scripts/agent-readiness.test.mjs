// Agent-readiness checks. Run against a server:
//   BASE_URL=https://samkhan.net npm run test:agents   (default: localhost:3000)
import { test } from "node:test";
import assert from "node:assert/strict";

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
