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
    default: "Sameer Khan",
    template: "%s | Sameer Khan",
  },
  description:
    "Software Engineer passionate about building innovative web and mobile applications. Specializing in full-stack development, AI/ML, and modern web technologies.",
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
