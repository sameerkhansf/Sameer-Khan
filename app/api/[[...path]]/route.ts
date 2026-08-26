import { NextResponse } from "next/server";

// This site has no interactive API. Every /api/* request gets a structured
// JSON 404 pointing agents at the machine-readable content endpoints,
// which are documented in /openapi.json.
async function handler(
  _req: Request,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path = [] } = await params;
  return NextResponse.json(
    {
      error: {
        code: "not_found",
        message: `No API endpoint exists at /api/${path.join("/")}.`,
        hint: "This is a static content site. Machine-readable endpoints are documented at /openapi.json; start with /llms.txt or /sitemap.xml.",
      },
    },
    { status: 404 }
  );
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
