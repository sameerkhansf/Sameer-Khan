import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Sameer Khan's professional resume - Software Engineer with expertise in full-stack development, AI/ML, React, Next.js, TypeScript, and AWS.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Sameer Khan - Resume",
    description:
      "Software Engineer with expertise in full-stack development, AI/ML, and modern web technologies.",
    url: "https://sameerkhan.me/resume",
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
    images: ["/og-image.jpg"],
  },
};

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Sameer Khan - Resume",
  description:
    "Professional resume of Sameer Khan, Software Engineer specializing in full-stack development.",
  mainEntity: {
    "@type": "Person",
    name: "Sameer Khan",
    jobTitle: "Software Engineer",
    url: "https://sameerkhan.me",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sameerkhan.me",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume",
        item: "https://sameerkhan.me/resume",
      },
    ],
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />
      {children}
    </>
  );
}
