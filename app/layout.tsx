import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
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
  jobTitle: "Software Engineer",
  description:
    "Sameer Khan is a Software Engineer with a B.S. in Computer Science from Sonoma State University. He specializes in full-stack development using React, Next.js, TypeScript, and Node.js, with additional expertise in AI/ML and cloud technologies like AWS.",
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
  },
  title: {
    default: "Sameer Khan - Software Engineer",
    template: "%s | Sameer Khan",
  },
  description:
    "Software Engineer passionate about building innovative web and mobile applications. Specializing in full-stack development, AI/ML, and modern web technologies.",
  keywords: [
    "Sameer Khan",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "AI/ML",
    "San Francisco",
  ],
  authors: [{ name: "Sameer Khan", url: "https://sameerkhan.me" }],
  creator: "Sameer Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameerkhan.me",
    siteName: "Sameer Khan",
    title: "Sameer Khan - Software Engineer",
    description:
      "Software Engineer passionate about building innovative web and mobile applications. Specializing in full-stack development, AI/ML, and modern web technologies.",
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
    title: "Sameer Khan - Software Engineer",
    description:
      "Software Engineer passionate about building innovative web and mobile applications.",
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

        {/* Google Analytics - deferred to reduce render blocking */}
        <script
          async
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-RWXWZX4QQ2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RWXWZX4QQ2');
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sameer Khan" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body className="antialiased tracking-tight">
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
      </body>
    </html>
  );
}
