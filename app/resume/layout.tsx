import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Sameer Khan's professional resume - Software Engineer with expertise in full-stack development, AI/ML, React, Next.js, TypeScript, and AWS.",
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
    title: "Sameer Khan - Resume",
    description:
      "Software Engineer with expertise in full-stack development, AI/ML, and modern web technologies.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
