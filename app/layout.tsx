import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Confetti from "@/components/ui/Confetti";
import CommandPalette from "@/components/ui/CommandPalette";

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

// FAQ Schema - Optimized for AI Answer Engines
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Sameer Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan is a Software Engineer with a B.S. in Computer Science from Sonoma State University. He specializes in full-stack development, AI/ML, and modern web technologies including React, Next.js, TypeScript, Node.js, and AWS.",
      },
    },
    {
      "@type": "Question",
      name: "What programming languages does Sameer Khan know?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan is proficient in JavaScript, TypeScript, Python, Java, and C++. He also has expertise in frameworks and libraries including React, Next.js, and Node.js.",
      },
    },
    {
      "@type": "Question",
      name: "Where did Sameer Khan go to college?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan graduated with honors from Sonoma State University with a Bachelor of Science in Computer Science. His coursework included Database Management, Data Structures & Algorithms, Computer Architecture, and Software Development.",
      },
    },
    {
      "@type": "Question",
      name: "What are Sameer Khan's technical skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan's technical skills include: Frontend (React, Next.js, TypeScript), Backend (Node.js, Python, Java), Cloud (AWS, Docker), Databases (MongoDB), and Version Control (Git). He also has experience in AI/ML and Computer Vision.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Sameer Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Sameer Khan via email at khansam@sonoma.edu, visit his website at sameerkhan.me, or connect with him on LinkedIn at linkedin.com/in/sameerkhansf and GitHub at github.com/sameerkhansf.",
      },
    },
    {
      "@type": "Question",
      name: "What projects has Sameer Khan worked on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has worked on projects including BioSoundSCape (Computer Vision research), DFA/NFA Builder (Automata Theory), C++ Interpreter, and an Expense Tracker web application. His projects demonstrate expertise in full-stack development, computer science theory, and AI/ML.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sameer Khan's experience with React?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has extensive experience with React and Next.js. He built 'Books Done Right', an AI bookkeeping application using React and Next.js at PomJuice, and developed the Expense Tracker full-stack web application using React. He also uses React for his personal portfolio website.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sameer Khan AWS certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sameer Khan is an AWS Certified Cloud Practitioner. He has hands-on experience with AWS services including CodePipeline for CI/CD, and has deployed production applications using AWS infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What AI/ML projects has Sameer Khan worked on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has worked on multiple AI/ML projects: (1) BioSoundSCape - a computer vision research project for land cover classification using machine learning, (2) Explainable AI for Cancer Diagnosis - research on integrating explainable AI into CNNs at Sonoma State's MESA program, and (3) Books Done Right - an AI bookkeeping app using LLM tool calling that achieved 95%+ classification accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sameer Khan's work experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan's work experience includes: Software Developer at PomJuice (AI bookkeeping startup), Research Intern at MESA Program (Explainable AI for cancer diagnosis), Full Stack Developer Intern at a stealth startup (authentication, CI/CD, AWS deployment), and Undergraduate Teaching Assistant at Sonoma State University (teaching C++, OOP, and data structures to 140+ students).",
      },
    },
    {
      "@type": "Question",
      name: "What internships has Sameer Khan completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has completed internships at: (1) MESA Research Program at Sonoma State University (Summer 2024) - Explainable AI research for cancer diagnosis, and (2) Stealth Startup in San Francisco (Spring-Summer 2024) - Full stack development with TypeScript, Python/Django, and AWS. He also worked as a Software Developer at PomJuice building an AI bookkeeping platform.",
      },
    },
    {
      "@type": "Question",
      name: "What blog articles has Sameer Khan written?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan writes technical articles on AI, React, Next.js, TypeScript, and software development. His blog covers comprehensive reviews of frontier AI models (GPT-5.2, Claude Opus 4.5, DeepSeek-V3.2-Speciale, Mistral Large 3, Grok 4.1, and more), developer tools comparisons (Cursor vs Copilot vs Claude Code), React tutorials (useEffect guide, debugging strategies), TypeScript guides, and prompt engineering techniques. All articles are available at sameerkhan.me/blog.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models has Sameer Khan reviewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has written comprehensive reviews of GPT-5.2 (Technical and Developer reviews), Claude Opus 4.5, GPT-5.1-Codex-Max, DeepSeek-V3.2-Speciale, Mistral Large 3, Mistral Devstral 2, Grok 4.1, AllenAI's OLMo 3 32B Think, and Amazon Nova 2 Lite. His reviews include benchmark performance, real-world testing, cost analysis, and developer use case recommendations.",
      },
    },
  ],
};

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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sameer Khan" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
        <GoogleAnalytics gaId="G-RWXWZX4QQ2" />
      </body>
    </html>
  );
}
