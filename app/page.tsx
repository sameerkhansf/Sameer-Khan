import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight } from "lucide-react";
import WritingsSection from "@/components/writings-section";
import IntroSection from "@/components/intro-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-xl font-medium">amirkhan.me</h1>
          <ThemeToggle />
        </header>

        <main className="space-y-16">
          <IntroSection />
          <WritingsSection />
        </main>

        <footer className="mt-24 pt-8 border-t border-border">
          <div className="flex flex-col items-center space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Link
                href="https://twitter.com/learnwdaniel"
                className="footer-link hover:text-foreground transition-colors"
              >
                @learnwdaniel
              </Link>
              <span>·</span>
              <Link
                href="https://linkedin.com/in/amirkhan177"
                className="footer-link hover:text-foreground transition-colors"
              >
                linkedin
              </Link>
              <span>·</span>
              <Link
                href="https://github.com/amirkhan"
                className="footer-link hover:text-foreground transition-colors"
              >
                github
              </Link>
            </div>
            <p className="text-center">
              This website design was inspired by{" "}
              <Link
                href="https://leerob.io"
                target="_blank"
                className="footer-link hover:text-foreground transition-colors"
              >
                Lee Robinson
              </Link>
              's website.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
