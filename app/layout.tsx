import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

// Lazy load non-critical components for better performance
const Confetti = dynamic(() => import("@/components/ui/Confetti"));
const CommandPalette = dynamic(() => import("@/components/ui/CommandPalette"));

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// Person Schema - Enhanced for AEO with comprehensive details
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sameerkhan.me/#person",
  name: "Sameer Khan",
  givenName: "Sameer",
  familyName: "Khan",
  url: "https://sameerkhan.me",
  image: {
    "@type": "ImageObject",
    url: "https://sameerkhan.me/profile.jpg",
    width: 400,
    height: 400,
  },
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Sameer Khan is a Full-Stack Software Engineer based in San Francisco with a B.S. in Computer Science from Sonoma State University. He specializes in React, Next.js, TypeScript, Node.js, and AI/ML integration.",
  // Location for local SEO
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sonoma State University",
    url: "https://www.sonoma.edu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rohnert Park",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bachelor of Science in Computer Science",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Cloud Practitioner",
      credentialCategory: "certificate",
    },
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "AWS",
    "Docker",
    "MongoDB",
    "Git",
    "Full Stack Development",
    "AI/ML",
    "Computer Vision",
    "Web Development",
    "LLM Integration",
    "Prompt Engineering",
    "Large Language Models",
    "GPT-5",
    "Claude",
    "Mistral",
    "DeepSeek",
    "AI Coding Tools",
  ],
  knowsLanguage: ["English", "Urdu", "Hindi"],
  sameAs: [
    "https://github.com/sameerkhansf",
    "https://linkedin.com/in/sameerkhansf",
    "https://x.com/sameerkhan_sf",
    "https://instagram.com/sam.khan007_",
  ],
};

// FAQ Schema moved to page.tsx (homepage only) to avoid duplicate FAQPage on blog posts

// WebSite Schema for sitelinks search
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sameerkhan.me/#website",
  url: "https://sameerkhan.me",
  name: "Sameer Khan - Software Engineer",
  description:
    "Personal portfolio and resume of Sameer Khan, Software Engineer specializing in full-stack development and AI/ML. Technical blog with comprehensive reviews of frontier AI models, React tutorials, and developer tools comparisons.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Person",
    "@id": "https://sameerkhan.me/#person",
    name: "Sameer Khan",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sameerkhan.me/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// BreadcrumbList Schema for navigation structure
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sameerkhan.me",
    },
  ],
};

// SiteNavigationElement Schema - helps Google understand site structure
const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Home",
      description: "Sameer Khan's portfolio and personal website",
      url: "https://sameerkhan.me",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Blog",
      description: "Technical articles on AI models, React, TypeScript, and software engineering",
      url: "https://sameerkhan.me/blog",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Resume",
      description: "Sameer Khan's professional experience and skills",
      url: "https://sameerkhan.me/resume",
    },
  ],
};

// Organization Schema - Critical for AI Visibility (SEMrush recommendation)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sameerkhan.me/#organization",
  name: "Sameer Khan",
  url: "https://sameerkhan.me",
  logo: {
    "@type": "ImageObject",
    url: "https://sameerkhan.me/profile.jpg",
    width: 400,
    height: 400,
  },
  description: "Technical blog and portfolio of Sameer Khan, Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and AI/ML. Comprehensive reviews of frontier AI models, React tutorials, and developer tools comparisons.",
  founder: {
    "@type": "Person",
    "@id": "https://sameerkhan.me/#person",
  },
  foundingDate: "2024",
  sameAs: [
    "https://github.com/sameerkhansf",
    "https://linkedin.com/in/sameerkhansf",
    "https://x.com/sameerkhan_sf",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "khansam@sonoma.edu",
    contactType: "customer service",
  },
};

// Speakable Schema - For voice assistants (Google Assistant, Alexa, etc.)
// Enhanced with both CSS selectors and XPath for maximum compatibility
// Helps AI voice interfaces identify the most relevant content to read aloud
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://sameerkhan.me/#speakable",
  speakable: {
    "@type": "SpeakableSpecification",
    // CSS selectors for modern browsers
    cssSelector: ["h1", "h2", ".quick-answer", "article p:first-of-type", "main h1", "main h2"],
    // XPath for more precise targeting (better for voice assistants)
    xpath: [
      "/html/head/title",
      "/html/body/main//h1[1]",
      "/html/body/main//h2[1]",
      "/html/body/main//article//p[1]",
      "/html/body//*[contains(@class, 'quick-answer')]//p[1]",
    ],
  },
  url: "https://sameerkhan.me",
};

// ProfilePage Schema - Establishes author expertise (E-E-A-T signals)
// Critical for AI systems to understand author credibility and topic authority
const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://sameerkhan.me/#profilepage",
  mainEntity: {
    "@type": "Person",
    "@id": "https://sameerkhan.me/#person",
  },
  dateCreated: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  url: "https://sameerkhan.me",
  name: "Sameer Khan - Software Engineer Profile",
  description:
    "Professional profile of Sameer Khan, Full-Stack Software Engineer specializing in React, Next.js, TypeScript, and AI/ML. Includes work experience, projects, certifications, and technical blog.",
};

// Projects Schema - SoftwareSourceCode for portfolio projects
const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: "BioSoundSCape",
        description:
          "Research project focused on land cover classification using machine learning and computer vision techniques for environmental analysis.",
        programmingLanguage: ["Python", "TensorFlow"],
        codeRepository:
          "https://github.com/sameerkhansf/BioSoundSCape_SSU_Computer_Science",
        author: { "@id": "https://sameerkhan.me/#person" },
        dateCreated: "2025-05",
        applicationCategory: "Computer Vision",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareSourceCode",
        name: "DFA/NFA Builder",
        description:
          "Tool for creating and visualizing deterministic and non-deterministic finite automata, implementing core concepts from automata theory.",
        programmingLanguage: ["Java"],
        codeRepository:
          "https://github.com/sameerkhansf/JFLAPAutomataBuilder",
        author: { "@id": "https://sameerkhan.me/#person" },
        dateCreated: "2024-12",
        applicationCategory: "Automata Theory",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareSourceCode",
        name: "C++ Interpreter",
        description:
          "Interpreter implementation demonstrating programming language theory concepts including lexical analysis, parsing, and execution.",
        programmingLanguage: ["C++"],
        codeRepository: "https://github.com/sameerkhansf/Interpreter",
        author: { "@id": "https://sameerkhan.me/#person" },
        dateCreated: "2025-05",
        applicationCategory: "Compilers",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "WebApplication",
        name: "Expense Tracker Application",
        description:
          "Full-stack web application for personal expense tracking with data visualization and expense categorization features.",
        url: "https://expense-tracker-mocha-three.vercel.app",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web Browser",
        author: { "@id": "https://sameerkhan.me/#person" },
        dateCreated: "2024-12",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sameerkhan.me"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es": "/es",
      "de": "/de",
      "fr": "/fr",
      "ja": "/ja",
      "zh": "/zh",
      "x-default": "/en-US",
    },
    types: {
      "application/rss+xml": "https://sameerkhan.me/rss.xml",
    },
  },
  title: {
    default: "Sameer Khan | Full-Stack Software Engineer | React & AI/ML",
    template: "%s | Sameer Khan",
  },
  description:
    "Sameer Khan is a Full-Stack Software Engineer in San Francisco specializing in React, Next.js, TypeScript, and AI/ML. Technical blog with AI model reviews, React tutorials, and developer guides.",
  keywords: [
    "Sameer Khan",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "AI/ML Engineer",
    "San Francisco Developer",
    "GPT-5 Review",
    "Claude Opus Review",
    "AI Model Reviews",
    "React Tutorials",
  ],
  authors: [{ name: "Sameer Khan", url: "https://sameerkhan.me" }],
  creator: "Sameer Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameerkhan.me",
    siteName: "Sameer Khan",
    title: "Sameer Khan | Full-Stack Software Engineer | React & AI/ML",
    description:
      "Sameer Khan is a Full-Stack Software Engineer in San Francisco specializing in React, Next.js, TypeScript, and AI/ML. Technical blog with AI model reviews and React tutorials.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Khan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Khan | Full-Stack Software Engineer | React & AI/ML",
    description:
      "Full-Stack Software Engineer in San Francisco. React, Next.js, TypeScript, AI/ML. Writing about AI models and web development.",
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
    <html lang="en" className={`${inter.variable} ${inter.className}`} suppressHydrationWarning>
      <head>
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

        {/* Preload LCP image for faster discovery */}
        <link rel="preload" href="/panel-event.jpg" as="image" fetchPriority="high" />
        <link rel="manifest" href="/manifest.json" />
        {/* Bing Webmaster Tools verification - required for ChatGPT/AI visibility */}
        <meta name="msvalidate.01" content="0937F6DB8C8C03B8C8BFF19C2D4B47B1" />
        <meta name="theme-color" content="#1a1a1a" />
        {/* RSS Feed link */}
        <link rel="alternate" type="application/rss+xml" title="Sameer Khan's Blog" href="/rss.xml" />
        {/* LLMs.txt links for AI discovery (AEO) - https://llmstxt.org/ */}
        <link rel="alternate" type="text/plain" title="LLM Summary" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="LLM Full Content" href="/llms-full.txt" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sameer Khan" />
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
            __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectsSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speakableSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="antialiased tracking-tight">
        {/* Skip to content link for accessibility - improves SEO */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Confetti />
          <CommandPalette />
          {children}
          <Analytics />
        </ThemeProvider>
        
        {/* Google Analytics - Optimized with @next/third-parties */}
        <GoogleAnalytics gaId="G-RWXWZX4QQ2" />
      </body>
    </html>
  );
}
