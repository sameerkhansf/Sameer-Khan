import { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAllPosts } from "@/lib/blog";
import { identity } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing on AI models, agents, React, TypeScript, and software engineering.",
  alternates: {
    canonical: "/blog/",
    types: {
      "application/rss+xml": "https://samkhan.net/rss.xml",
    },
  },
  openGraph: {
    title: "Blog | Sameer Khan",
    description:
      "Technical writing on AI models, agents, React, TypeScript, and software engineering.",
    type: "website",
    url: "https://samkhan.net/blog/",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://samkhan.net/blog/#blog",
    name: "Sameer Khan's Blog",
    description:
      "Technical writing on AI models, agents, React, TypeScript, and software engineering.",
    url: "https://samkhan.net/blog/",
    inLanguage: "en-US",
    author: { "@id": "https://samkhan.net/#person" },
    publisher: { "@id": "https://samkhan.net/#person" },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `https://samkhan.net/blog/${post.slug}/`,
      author: { "@id": "https://samkhan.net/#person" },
    })),
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="mb-14 flex items-baseline justify-between">
        <Link href="/" className="meta link-quiet">
          ← {identity.name}
        </Link>
        <ThemeToggle />
      </nav>

      <main id="main-content">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 mb-10 text-muted-foreground">
          Technical writing on AI models, agents, and software engineering.
        </p>

        <ul className="space-y-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <div className="entry-row">
                <Link href={`/blog/${post.slug}/`} className="link-quiet">
                  {post.title}
                </Link>
                <time dateTime={post.date} className="meta shrink-0">
                  {post.date}
                </time>
              </div>
              <p className="meta">
                {post.category} · {post.readingTime}
              </p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="mt-14 border-t pt-6">
        <p className="meta">
          © {new Date().getFullYear()} {identity.name}
        </p>
      </footer>
    </div>
  );
}
