import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Charis_SIL } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { identity, summary, skills, education } from "@/lib/resume";

// Charis SIL is the open, Google-Fonts-hosted descendant of Bitstream Charter —
// the face the LaTeX résumé is set in.
const charis = Charis_SIL({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://samkhan.net/#person",
  name: identity.name,
  givenName: "Sameer",
  familyName: "Khan",
  url: identity.site,
  image: {
    "@type": "ImageObject",
    url: "https://samkhan.net/profile.jpg",
    width: 400,
    height: 400,
  },
  jobTitle: identity.title,
  description: summary,
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  alumniOf: education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.school,
  })),
  knowsAbout: skills.flatMap((s) => s.items.split(", ")),
  knowsLanguage: ["English", "Urdu", "Hindi"],
  sameAs: [identity.github, identity.linkedin, identity.twitter],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://samkhan.net/#website",
  url: identity.site,
  name: `${identity.name}, ${identity.title}`,
  description: summary,
  inLanguage: "en-US",
  publisher: { "@id": "https://samkhan.net/#person" },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://samkhan.net/#profilepage",
  mainEntity: { "@id": "https://samkhan.net/#person" },
  url: identity.site,
  name: `${identity.name}, ${identity.title}`,
  description: summary,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#151413" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://samkhan.net"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://samkhan.net/rss.xml",
    },
  },
  title: {
    default: `${identity.name} | ${identity.title}`,
    template: `%s | ${identity.name}`,
  },
  description: summary,
  authors: [{ name: identity.name, url: identity.site }],
  creator: identity.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: identity.site,
    siteName: identity.name,
    title: `${identity.name} | ${identity.title}`,
    description: summary,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${identity.name}, ${identity.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} | ${identity.title}`,
    description: summary,
    creator: "@sameerkhan_sf",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={charis.variable} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="manifest" href="/manifest.json" />
        {/* Bing Webmaster Tools verification - required for ChatGPT/AI visibility */}
        <meta name="msvalidate.01" content="0937F6DB8C8C03B8C8BFF19C2D4B47B1" />
        <link rel="alternate" type="application/rss+xml" title="Sameer Khan's Blog" href="/rss.xml" />
        {/* LLMs.txt link for AI discovery - https://llmstxt.org/ */}
        <link rel="alternate" type="text/plain" title="LLM Summary" href="/llms.txt" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-RWXWZX4QQ2" />
      </body>
    </html>
  );
}
