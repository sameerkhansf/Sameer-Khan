import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getFeaturedPosts, getAllCategories, getPopularPosts } from "@/lib/blog";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";

interface BlogPageProps {
  params: Promise<{ lang: string }>;
}

export const metadata: Metadata = {
  title: "Blog | Sameer Khan",
  description:
    "Technical articles on React, TypeScript, AI/ML, and software engineering. Comprehensive reviews of GPT-5.2, Claude Opus 4.5, DeepSeek-V3.2-Speciale, Mistral Large 3, and other frontier AI models. React tutorials, TypeScript guides, and developer tools comparisons.",
  keywords: [
    "Sameer Khan Blog",
    "AI Model Reviews",
    "GPT-5.2 Review",
    "Claude Opus 4.5",
    "React Tutorials",
    "TypeScript Guides",
    "LLM Reviews",
    "Developer Tools",
    "Web Development",
    "Software Engineering",
  ],
  authors: [{ name: "Sameer Khan", url: "https://samkhan.net" }],
  creator: "Sameer Khan",
  openGraph: {
    title: "Blog | Sameer Khan",
    description:
      "Technical articles on React, TypeScript, AI/ML, and software engineering. Comprehensive reviews of frontier AI models, React tutorials, and developer tools comparisons.",
    type: "website",
    url: "https://samkhan.net/blog",
    siteName: "Sameer Khan",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Khan's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sameer Khan",
    description:
      "Technical articles on React, TypeScript, AI/ML, and software engineering.",
    creator: "@sameerkhan_sf",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://samkhan.net/blog",
    types: {
      "application/rss+xml": "https://samkhan.net/rss.xml",
    },
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

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;

  // Validate locale
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const popularPosts = getPopularPosts(5);

  // Blog/CollectionPage Schema for AEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://samkhan.net/blog#blog",
    name: "Sameer Khan's Blog",
    description:
      "Technical articles on React, TypeScript, AI/ML, and software engineering. Comprehensive reviews of GPT-5.2, Claude Opus 4.5, DeepSeek-V3.2-Speciale, Mistral Large 3, and other frontier AI models. React tutorials, TypeScript guides, and developer tools comparisons.",
    url: "https://samkhan.net/blog",
    inLanguage: lang,
    publisher: {
      "@type": "Person",
      "@id": "https://samkhan.net/#person",
      name: "Sameer Khan",
      url: "https://samkhan.net",
    },
    author: {
      "@type": "Person",
      "@id": "https://samkhan.net/#person",
      name: "Sameer Khan",
      url: "https://samkhan.net",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `https://samkhan.net/blog/${post.slug}#blogpost`,
      headline: post.title,
      description: post.description,
      datePublished: `${post.date}T00:00:00+00:00`,
      dateModified: `${post.updated || post.date}T00:00:00+00:00`,
      url: `https://samkhan.net/blog/${post.slug}`,
      author: {
        "@type": "Person",
        "@id": "https://samkhan.net/#person",
        name: post.author,
      },
      publisher: {
        "@type": "Person",
        "@id": "https://samkhan.net/#person",
        name: post.author,
      },
      articleSection: post.category,
      keywords: post.tags.join(", "),
      inLanguage: lang,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://samkhan.net/blog/${post.slug}`,
      },
    })),
  };

  // CollectionPage Schema - Helps search engines understand this is a collection
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://samkhan.net/blog#collection",
    name: "Sameer Khan's Blog - Technical Articles",
    description:
      "Collection of technical articles on React, TypeScript, AI/ML, and software engineering",
    url: "https://samkhan.net/blog",
    mainEntity: {
      "@type": "Blog",
      "@id": "https://samkhan.net/blog#blog",
    },
    numberOfItems: posts.length,
    inLanguage: lang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-background text-foreground">
      {/* Header - Cleaner like Medium */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href={`/${lang}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              ← {dict.common.home}
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href={`/${lang}/resume`}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {dict.common.resume}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 md:py-12">
        {/* Page Title - More Compact */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
            {dict.blog.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {dict.blog.description}
          </p>
        </div>

        {/* Popular Posts Section - SEO Optimization */}
        {popularPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              📈 {dict.blog.popularPosts}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {popularPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/${lang}/blog/${post.slug}`}
                  className="group p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                    {post.readingTime}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter and Posts */}
        <CategoryFilter
          posts={posts}
          featuredPosts={featuredPosts}
          categories={categories}
          lang={lang}
        />
      </main>

      {/* Newsletter Section */}
      <section className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {dict.blog.stayUpdated}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            {dict.blog.getNotified}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={dict.common.enterEmail}
              className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <button className="px-6 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              {dict.common.subscribe}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Sameer Khan. {dict.common.allRightsReserved}.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href={`/${lang}`}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {dict.common.home}
              </Link>
              <Link
                href={`/${lang}/resume`}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {dict.common.resume}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
