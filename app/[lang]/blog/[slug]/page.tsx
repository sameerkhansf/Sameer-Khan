import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
} from "@/lib/blog";
import MDXContent from "@/components/blog/MDXContent";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { getDictionary, hasLocale, locales, type Locale } from "../../dictionaries";

// Lazy load below-fold components for better performance
const BlogCard = dynamic(() => import("@/components/blog/BlogCard"));
const ShareButtons = dynamic(() => import("@/components/blog/ShareButtons"));

interface BlogPostPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

// Generate static params for all locales and slugs
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  const params: { lang: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ lang: locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Sameer Khan",
    };
  }

  return {
    title: `${post.title} | Sameer Khan`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author, url: "https://sameerkhan.me" }],
    creator: post.author,
    publisher: "Sameer Khan",
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
      section: post.category,
      locale: lang === "en-US" ? "en_US" : lang,
      images: post.image
        ? [{ url: post.image, alt: post.imageAlt || post.title, width: 1200, height: 630 }]
        : [{ url: "/og-image.jpg", alt: post.title, width: 1200, height: 630 }],
      url: `https://sameerkhan.me/${lang}/blog/${slug}`,
      siteName: "Sameer Khan",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@sameerkhan_sf",
      images: post.image ? [post.image] : ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://sameerkhan.me/${lang}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params;

  // Validate locale
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  // Determine if this is a review post or tutorial post
  const isReviewPost = post.category === "AI" &&
    (post.title.toLowerCase().includes("review") ||
     post.title.toLowerCase().includes("vs") ||
     post.title.toLowerCase().includes("comparison"));

  const isTutorialPost = post.category === "Web Development" ||
    post.category === "Developer Tools" ||
    post.title.toLowerCase().includes("guide") ||
    post.title.toLowerCase().includes("how to") ||
    post.title.toLowerCase().includes("setting up") ||
    post.title.toLowerCase().includes("complete");

  // Review Schema for AI model reviews
  const reviewSchema = isReviewPost ? {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `https://sameerkhan.me/${lang}/blog/${slug}#review`,
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: post.title.replace(/Review|Complete|Developer|Technical/gi, "").trim(),
      applicationCategory: "AI Language Model",
      operatingSystem: "Web, API",
    },
    author: {
      "@type": "Person",
      "@id": "https://sameerkhan.me/#person",
      name: post.author,
    },
    publisher: {
      "@type": "Person",
      "@id": "https://sameerkhan.me/#person",
      name: post.author,
    },
    reviewBody: post.description,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "8.5",
      bestRating: "10",
      worstRating: "1",
    },
    datePublished: post.date,
    dateModified: post.updated || post.date,
  } : null;

  // HowTo Schema for tutorial posts
  const howToSchema = isTutorialPost ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://sameerkhan.me/${lang}/blog/${slug}#howto`,
    name: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: `https://sameerkhan.me/og-image.jpg`,
      alt: post.title,
    },
    totalTime: `PT${Math.ceil(post.wordCount / 200)}M`,
    author: {
      "@type": "Person",
      "@id": "https://sameerkhan.me/#person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.updated || post.date,
  } : null;

  // Article Schema for SEO/AEO - Enhanced
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://sameerkhan.me/${lang}/blog/${slug}#article`,
    headline: post.title,
    description: post.description,
    image: post.image
      ? {
          "@type": "ImageObject",
          url: `https://sameerkhan.me${post.image}`,
          alt: post.imageAlt || post.title,
          width: 1200,
          height: 630,
        }
      : {
          "@type": "ImageObject",
          url: "https://sameerkhan.me/og-image.jpg",
          alt: post.title,
          width: 1200,
          height: 630,
        },
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      "@id": "https://sameerkhan.me/#person",
      name: post.author,
      url: "https://sameerkhan.me",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://sameerkhan.me/#person",
      name: post.author,
      url: "https://sameerkhan.me",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sameerkhan.me/${lang}/blog/${slug}`,
      url: `https://sameerkhan.me/${lang}/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
    wordCount: post.wordCount,
    articleSection: post.category,
    inLanguage: lang,
    isPartOf: {
      "@type": "Blog",
      "@id": "https://sameerkhan.me/blog#blog",
      name: "Sameer Khan's Blog",
      url: "https://sameerkhan.me/blog",
    },
    about: post.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
    mentions: post.tags.map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
    genre: post.category,
    audience: {
      "@type": "Audience",
      audienceType: "Developers, Software Engineers, AI/ML Practitioners",
    },
    citation: `https://sameerkhan.me/${lang}/blog/${slug}`,
    creativeWorkStatus: "Published",
    copyrightHolder: {
      "@type": "Person",
      "@id": "https://sameerkhan.me/#person",
      name: post.author,
    },
    copyrightYear: new Date(post.date).getFullYear().toString(),
  };

  // BreadcrumbList Schema for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.common.home,
        item: `https://sameerkhan.me/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.blog.title,
        item: `https://sameerkhan.me/${lang}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://sameerkhan.me/${lang}/blog/${slug}`,
      },
    ],
  };

  // Speakable Schema for blog posts - Enhanced with XPath
  const articleSpeakableSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://sameerkhan.me/${lang}/blog/${slug}#speakable`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "h1",
        ".quick-answer",
        "article h2:first-of-type",
        "article p:first-of-type",
      ],
      xpath: [
        "/html/head/title",
        "/html/body/main//article//h1[1]",
        "/html/body/main//*[contains(@class, 'quick-answer')]//p[1]",
        "/html/body/main//article//h2[1]",
        "/html/body/main//article//p[1]",
      ],
    },
    url: `https://sameerkhan.me/${lang}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSpeakableSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-background text-foreground">
        <ReadingProgress />
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link
                href={`/${lang}/blog`}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {dict.common.backToBlog}
              </Link>
              <Link
                href={`/${lang}`}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {dict.common.home}
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Content */}
          <article itemScope itemType="https://schema.org/Article">
            <header className="mb-12">
              {/* Quick Answer Section - AEO Optimization */}
              <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {dict.blog.quickAnswer}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed quick-answer">
                  <strong>{post.title.replace(/Review|Complete|Developer|Technical|Guide/gi, "").trim()}</strong>{" "}
                  {post.description.split(".")[0]}.
                </p>
              </div>

              {/* Category */}
              <div className="mb-6">
                <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 itemProp="headline" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight tracking-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span itemProp="author" itemScope itemType="https://schema.org/Person" className="font-medium text-gray-700 dark:text-gray-300">
                    <span itemProp="name">{post.author}</span>
                  </span>
                </div>
                <span className="hidden sm:block text-gray-300 dark:text-gray-600">·</span>
                <time itemProp="datePublished" dateTime={post.date} className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(post.date).toLocaleDateString(lang === "en-US" ? "en-US" : lang, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.updated && post.updated !== post.date && (
                  <>
                    <span className="hidden sm:block text-gray-300 dark:text-gray-600">·</span>
                    <time itemProp="dateModified" dateTime={post.updated} className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      {dict.blog.updatedOn}{" "}
                      {new Date(post.updated).toLocaleDateString(lang === "en-US" ? "en-US" : lang, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </>
                )}
                <span className="hidden sm:block text-gray-300 dark:text-gray-600">·</span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readingTime}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Last Updated Badge - Prominent Display */}
            {post.updated && post.updated !== post.date && (
              <div className="mb-8 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-green-800 dark:text-green-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="font-semibold">{dict.blog.updatedOn}:</span>
                  <time dateTime={post.updated}>
                    {new Date(post.updated).toLocaleDateString(lang === "en-US" ? "en-US" : lang, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-green-600 dark:text-green-400">
                    ({Math.floor((new Date().getTime() - new Date(post.updated).getTime()) / (1000 * 60 * 60 * 24))} {dict.blog.daysAgo})
                  </span>
                </div>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-800 dark:prose-pre:border-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400 prose-blockquote:pl-6 prose-blockquote:italic prose-img:rounded-xl prose-img:shadow-lg">
              <MDXContent source={post.content} />
            </div>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {dict.blog.shareArticle}
                </h3>
              </div>
              <ShareButtons title={post.title} slug={slug} />
            </div>
          </article>

          {/* Internal Links Section - AEO Optimization */}
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {dict.blog.relatedArticles}
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedPosts.slice(0, 5).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${lang}/blog/${relatedPost.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  {relatedPost.title}
                </Link>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {dict.blog.relatedPosts}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} lang={lang} />
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Sameer Khan. {dict.common.allRightsReserved}.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
