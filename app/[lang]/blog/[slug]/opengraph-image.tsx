import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ lang: string; slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Sameer Khan";
  const category = post?.category ?? "Blog";
  const date = post?.date?.split("T")[0] ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex" }}>{category}</div>
          <div style={{ display: "flex" }}>{date}</div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", color: "#e2e8f0" }}>Sameer Khan</div>
          <div style={{ display: "flex", color: "#60a5fa" }}>samkhan.net</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
