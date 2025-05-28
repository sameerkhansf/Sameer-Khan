import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Confetti from "@/components/ui/Confetti";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://amirkhan.me"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Amir Khan",
    template: "%s | Amir Khan",
  },
  description:
    "Founder of MARL 5G Accelerator, bringing together startups, investors, and industry giants building the future of Mobility, Autonomy, Robotics, and Logistics.",
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
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
