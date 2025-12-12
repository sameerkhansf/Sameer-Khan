import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Confetti from "@/components/ui/Confetti";

const inter = Inter({ subsets: ["latin"] });

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
    "Personal portfolio and resume of Sameer Khan, Software Engineer specializing in full-stack development and AI/ML.",
  publisher: {
    "@id": "https://sameerkhan.me/#person",
  },
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
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <head>
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
      </head>
      <body className="antialiased tracking-tight">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Confetti />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
