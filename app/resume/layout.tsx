// This layout is kept for backward compatibility
// All content is now served from /[lang]/resume/

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Sameer Khan",
  description:
    "Sameer Khan's professional resume - Software Engineer with expertise in full-stack development, AI/ML, React, Next.js, TypeScript, and AWS.",
  keywords: [
    "Sameer Khan Resume",
    "Software Engineer Resume",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI/ML Engineer",
  ],
  authors: [{ name: "Sameer Khan", url: "https://samkhan.net" }],
  creator: "Sameer Khan",
  alternates: {
    canonical: "https://samkhan.net/resume",
  },
  openGraph: {
    title: "Sameer Khan - Resume",
    description:
      "Software Engineer with expertise in full-stack development, AI/ML, and modern web technologies.",
    type: "profile",
    url: "https://samkhan.net/resume",
    siteName: "Sameer Khan",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Khan - Software Engineer Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Khan - Resume",
    description:
      "Software Engineer with expertise in full-stack development, AI/ML, and modern web technologies.",
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

// ProfilePage Schema with comprehensive resume information
const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://samkhan.net/resume",
  name: "Sameer Khan - Resume",
  description:
    "Professional resume of Sameer Khan, Software Engineer specializing in full-stack development, AI/ML, and modern web technologies.",
  dateModified: "2025-12-11T00:00:00+00:00",
  mainEntity: {
    "@type": "Person",
    "@id": "https://samkhan.net/#person",
    name: "Sameer Khan",
    jobTitle: "Software Engineer",
    url: "https://samkhan.net",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://samkhan.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume",
        item: "https://samkhan.net/resume",
      },
    ],
  },
};

// ItemList Schema for Projects - helps AI understand project portfolio
const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sameer Khan's Projects",
  description: "Software development projects by Sameer Khan",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: "BioSoundSCape",
        description:
          "Computer Vision research project for land cover classification using machine learning",
        programmingLanguage: "Python",
        codeRepository: "https://github.com/sameerkhansf/BioSoundSCape_SSU_Computer_Science",
        author: { "@id": "https://samkhan.net/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareSourceCode",
        name: "DFA/NFA Builder",
        description:
          "Automata theory project for building and visualizing deterministic and non-deterministic finite automata",
        programmingLanguage: "Java",
        codeRepository: "https://github.com/sameerkhansf/JFLAPAutomataBuilder",
        author: { "@id": "https://samkhan.net/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareSourceCode",
        name: "C++ Interpreter",
        description: "A compiler/interpreter implementation in C++",
        programmingLanguage: "C++",
        codeRepository: "https://github.com/sameerkhansf/Interpreter",
        author: { "@id": "https://samkhan.net/#person" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "WebApplication",
        name: "Expense Tracker",
        description:
          "Full-stack web application for tracking personal expenses",
        url: "https://expense-tracker-mocha-three.vercel.app",
        applicationCategory: "FinanceApplication",
        author: { "@id": "https://samkhan.net/#person" },
      },
    },
  ],
};

// EducationalOccupationalCredential Schema
const educationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  name: "Bachelor of Science in Computer Science",
  credentialCategory: "degree",
  educationalLevel: "Bachelor's Degree",
  recognizedBy: {
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
  dateCreated: "2025-05-01T00:00:00+00:00",
  description:
    "Graduated with Honors. Relevant coursework: Database Management System Design, Data Structures & Algorithms, Computer Architecture, Software Design & Development, Computer Networking, Analysis of Algorithms.",
};

// WorkExperience Schema - Structured employment history for AI answer engines
const workExperienceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sameer Khan's Work Experience",
  description: "Professional work experience and internships",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "OrganizationRole",
        roleName: "Software Developer",
        startDate: "2025-03",
        endDate: "2025-05",
        description:
          "Architected and built 'Books Done Right': AI bookkeeping app using Next.js, React, Node.js, Python, LLM tool calling, and QuickBooks API. Implemented LLM-based natural language interface, reducing manual effort by 80%, improving classification accuracy to 95%+.",
        memberOf: {
          "@type": "Organization",
          name: "PomJuice",
          description: "AI Bookkeeping Platform",
          url: "https://pomjuice.com",
          industry: "FinTech",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "OrganizationRole",
        roleName: "Research Intern, Explainable AI for Cancer Diagnosis",
        startDate: "2024-06",
        endDate: "2024-08",
        description:
          "Worked with Dr. Gill on integrating explainable AI into CNNs, improving model interpretability and predictive accuracy for cancer diagnosis applications.",
        memberOf: {
          "@type": "Organization",
          name: "MESA Research Program, Sonoma State University",
          url: "https://www.sonoma.edu",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Rohnert Park",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "OrganizationRole",
        roleName: "Full Stack Software Developer Intern",
        startDate: "2024-04",
        endDate: "2024-08",
        description:
          "Developed user authentication and onboarding using TypeScript. Designed AWS CodePipeline CI/CD pipelines, cutting deployment time and errors. Collaborated on full-stack development (TypeScript, CSS, Python/Django) and deployed via AWS.",
        memberOf: {
          "@type": "Organization",
          name: "Stealth Startup",
          industry: "Technology",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "OrganizationRole",
        roleName: "Undergraduate Teaching Assistant",
        startDate: "2022-08",
        endDate: "2023-12",
        description:
          "CS 215 Labs: Guided 80 students through C++/OOP labs and assignments. CSE 315: Mentored 60 students in data structures and algorithms. Created a coding best-practices module with 90%+ positive feedback.",
        memberOf: {
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
      },
    },
  ],
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeJsonLd).replace(/</g, "\\u003c"),
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
          __html: JSON.stringify(educationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
