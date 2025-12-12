import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Confetti from "@/components/ui/Confetti";

const inter = Inter({ subsets: ["latin"] });

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
        url: "/og-image.png",
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
    creator: "@sameerkhansf",
    images: ["/og-image.png"],
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
