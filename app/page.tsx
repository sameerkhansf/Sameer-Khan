import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight } from "lucide-react";
// import WritingsSection from "@/components/writings-section";
import IntroSection from "@/components/intro-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-lg mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-xl font-medium">./sameerkhan.me</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/resume"
              className="text-sm hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              Resume
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="space-y-8">
          <IntroSection />
          {/* <WritingsSection /> */}
        </main>

        <footer className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col items-center space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Link
                href="https://x.com/sameerkhan_sf"
                target="_blank"
                className="hover:text-blue-600 hover:decoration-wavy hover:underline"
                aria-label="Follow me on X (Twitter)"
              >
                @sameerkhansf
              </Link>
              <span>·</span>
              <Link
                href="https://linkedin.com/in/sameerkhansf"
                target="_blank"
                className="hover:text-blue-600 hover:decoration-wavy hover:underline"
                aria-label="Connect with me on LinkedIn"
              >
                linkedin
              </Link>
              <span>·</span>
              <Link
                href="https://github.com/sameerkhansf"
                target="_blank"
                className="hover:text-blue-600 hover:decoration-wavy hover:underline"
                aria-label="View my projects on GitHub"
              >
                github
              </Link>
            </div>
            <p className="text-center">
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in San Francisco, CA
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
