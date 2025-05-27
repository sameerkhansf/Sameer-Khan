import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight } from "lucide-react";
import WritingsSection from "@/components/writings-section";
import IntroSection from "@/components/intro-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-lg mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-xl font-medium">./amirkhan.me</h1>
          <ThemeToggle />
        </header>

        <main className="space-y-8">
          <IntroSection />
          <WritingsSection />
        </main>

        <footer className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col items-center space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Link
                href="https://amirkhan177.medium.com/"
                className=" hover:text-blue-600 hover:decoration-wavy hover:underline"
              >
                @amirkhan177
              </Link>
              <span>·</span>
              <Link
                href="https://linkedin.com/in/amirkhan177"
                className="hover:text-blue-600 hover:decoration-wavy hover:underline"
              >
                linkedin
              </Link>
              <span>·</span>
              <Link
                href="https://github.com/amirkhan"
                className="hover:text-blue-600 hover:decoration-wavy hover:underline"
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
