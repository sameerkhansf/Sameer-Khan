import { NextResponse } from "next/server";
import Negotiator from "negotiator";

// acceptmarkdown.com content negotiation: pages with a markdown equivalent
// serve it when the request explicitly accepts text/markdown.
export function proxy(request) {
  const negotiator = new Negotiator({
    headers: { accept: request.headers.get("accept") || "" },
  });
  if (negotiator.mediaType(["text/html", "text/markdown"]) !== "text/markdown")
    return;

  const pathname = request.nextUrl.pathname.replace(/\/$/, "");

  let target = null;
  if (pathname === "") target = "/index.md";
  else {
    const post = pathname.match(/^\/blog\/([\w-]+)$/);
    if (post) target = `/blog/${post[1]}.md`;
  }
  if (!target) return;

  const url = request.nextUrl.clone();
  url.pathname = target;
  const response = NextResponse.rewrite(url);
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
};
