import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Confetti from "@/components/ui/Confetti";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sameer Khan",
  url: "https://sameerkhan.me",
  image: "https://sameerkhan.me/profile.jpg",
  jobTitle: "Software Engineer",
  description:
    "Software Engineer with expertise in full-stack development, AI/ML, and modern web technologies.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sonoma State University",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Full Stack Development",
    "AI/ML",
  ],
  sameAs: [
    "https://github.com/sameerkhansf",
    "https://linkedin.com/in/sameerkhansf",
    "https://x.com/sameerkhan_sf",
    "https://instagram.com/sam.khan007_",
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
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
