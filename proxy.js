import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Must match app/[lang]/dictionaries.ts — duplicated here because
// dictionaries.ts uses "server-only" and cannot be imported in middleware.
const locales = ["en-US", "es", "fr", "de", "ja", "zh"];
const defaultLocale = "en-US";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  // Negotiator returns ["*"] when Accept-Language is absent (RFC 7231 §5.3.5).
  // "*" is not a BCP 47 tag so it must be stripped before locale matching.
  const languages = new Negotiator({ headers: negotiatorHeaders })
    .languages()
    .filter((lang) => lang !== "*");

  if (languages.length === 0) return defaultLocale;
  return match(languages, locales, defaultLocale);
}

// acceptmarkdown.com content negotiation: pages with a markdown equivalent
// serve it when the request explicitly accepts text/markdown.
function markdownRewrite(request) {
  const negotiator = new Negotiator({
    headers: { accept: request.headers.get("accept") || "" },
  });
  if (negotiator.mediaType(["text/html", "text/markdown"]) !== "text/markdown")
    return null;

  // Normalize: strip trailing slash and any locale prefix
  let pathname = request.nextUrl.pathname.replace(/\/$/, "");
  for (const locale of locales) {
    if (pathname === `/${locale}`) pathname = "";
    else if (pathname.startsWith(`/${locale}/`))
      pathname = pathname.slice(locale.length + 1);
  }

  let target = null;
  if (pathname === "") target = "/index.md";
  else {
    const post = pathname.match(/^\/blog\/([\w-]+)$/);
    if (post) target = `/blog/${post[1]}.md`;
  }
  if (!target) return null;

  const url = request.nextUrl.clone();
  url.pathname = target;
  const response = NextResponse.rewrite(url);
  response.headers.set("Vary", "Accept");
  return response;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const markdown = markdownRewrite(request);
  if (markdown) return markdown;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
};
