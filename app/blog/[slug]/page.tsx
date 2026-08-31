import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/lib/blog";
import MDXContent from "@/components/blog/MDXContent";
import { ThemeToggle } from "@/components/theme-toggle";
import { identity } from "@/lib/resume";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author, url: "https://samkhan.net" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
      locale: "en_US",
      url: `https://samkhan.net/blog/${slug}/`,
      siteName: "Sameer Khan",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@sameerkhan_sf",
    },
    alternates: {
      canonical: `/blog/${slug}/`,
      // llms.txt spec v2: advertise the markdown twin of this page
      types: {
        "text/markdown": `https://samkhan.net/blog/${slug}.md`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://samkhan.net/blog/${slug}/#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      "@id": "https://samkhan.net/#person",
      name: post.author,
      url: "https://samkhan.net",
    },
    publisher: { "@id": "https://samkhan.net/#person" },
    mainEntityOfPage: `https://samkhan.net/blog/${slug}/`,
    keywords: post.tags.join(", "),
    wordCount: post.wordCount,
    articleSection: post.category,
    inLanguage: "en-US",
    isPartOf: { "@id": "https://samkhan.net/blog/#blog" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://samkhan.net/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://samkhan.net/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://samkhan.net/blog/${slug}/` },
    ],
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="mb-14 flex items-baseline justify-between">
        <Link href="/blog/" className="meta link-quiet">
          ← Blog
        </Link>
        <ThemeToggle />
      </nav>

      <main id="main-content">
        <article>
          <header className="mb-10">
            <p className="meta">
              {post.category}
              <span className="mx-2 select-none">|</span>
              <time dateTime={post.date}>{post.date}</time>
              {post.updated && post.updated !== post.date && (
                <>
                  <span className="mx-2 select-none">|</span>
                  <span>
                    Updated <time dateTime={post.updated}>{post.updated}</time>
                  </span>
                </>
              )}
              <span className="mx-2 select-none">|</span>
              {post.readingTime}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-muted-foreground">{post.description}</p>
            <p className="meta mt-3">By {post.author}</p>
          </header>

          <div className="prose prose-neutral max-w-none font-serif dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-a:underline-offset-4 prose-a:decoration-border hover:prose-a:decoration-current prose-code:before:content-none prose-code:after:content-none">
            <MDXContent source={post.content} />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section aria-labelledby="related" className="mt-14">
            <h2 id="related" className="section-title">
              Related
            </h2>
            <ul className="space-y-2.5">
              {relatedPosts.map((related) => (
                <li key={related.slug} className="entry-row">
                  <Link href={`/blog/${related.slug}/`} className="link-quiet">
                    {related.title}
                  </Link>
                  <time dateTime={related.date} className="meta shrink-0">
                    {related.date}
                  </time>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <footer className="mt-14 border-t pt-6">
        <p className="meta">
          © {new Date().getFullYear()} {identity.name}
          <span className="mx-2 select-none">|</span>
          <Link href="/" className="link-quiet">
            {identity.title}
          </Link>
        </p>
      </footer>
    </div>
  );
}
