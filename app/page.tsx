import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUpRight } from "lucide-react";
// import WritingsSection from "@/components/writings-section";
import IntroSection from "@/components/intro-section";

// FAQ Schema - Homepage only (moved from layout.tsx to avoid duplicate on blog posts)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Sameer Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan is a Software Engineer with a B.S. in Computer Science from Sonoma State University. He specializes in full-stack development, AI/ML, and modern web technologies including React, Next.js, TypeScript, Node.js, and AWS.",
      },
    },
    {
      "@type": "Question",
      name: "What programming languages does Sameer Khan know?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan is proficient in JavaScript, TypeScript, Python, Java, and C++. He also has expertise in frameworks and libraries including React, Next.js, and Node.js.",
      },
    },
    {
      "@type": "Question",
      name: "Where did Sameer Khan go to college?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan graduated with honors from Sonoma State University with a Bachelor of Science in Computer Science. His coursework included Database Management, Data Structures & Algorithms, Computer Architecture, and Software Development.",
      },
    },
    {
      "@type": "Question",
      name: "What are Sameer Khan's technical skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan's technical skills include: Frontend (React, Next.js, TypeScript), Backend (Node.js, Python, Java), Cloud (AWS, Docker), Databases (MongoDB), and Version Control (Git). He also has experience in AI/ML and Computer Vision.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Sameer Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Sameer Khan via email at khansam@sonoma.edu, visit his website at sameerkhan.me, or connect with him on LinkedIn at linkedin.com/in/sameerkhansf and GitHub at github.com/sameerkhansf.",
      },
    },
    {
      "@type": "Question",
      name: "What projects has Sameer Khan worked on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has worked on projects including BioSoundSCape (Computer Vision research), DFA/NFA Builder (Automata Theory), C++ Interpreter, and an Expense Tracker web application. His projects demonstrate expertise in full-stack development, computer science theory, and AI/ML.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sameer Khan's experience with React?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has extensive experience with React and Next.js. He built 'Books Done Right', an AI bookkeeping application using React and Next.js at PomJuice, and developed the Expense Tracker full-stack web application using React. He also uses React for his personal portfolio website.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sameer Khan AWS certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sameer Khan is an AWS Certified Cloud Practitioner. He has hands-on experience with AWS services including CodePipeline for CI/CD, and has deployed production applications using AWS infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What AI/ML projects has Sameer Khan worked on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has worked on multiple AI/ML projects: (1) BioSoundSCape - a computer vision research project for land cover classification using machine learning, (2) Explainable AI for Cancer Diagnosis - research on integrating explainable AI into CNNs at Sonoma State's MESA program, and (3) Books Done Right - an AI bookkeeping app using LLM tool calling that achieved 95%+ classification accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sameer Khan's work experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan's work experience includes: Software Developer at PomJuice (AI bookkeeping startup), Research Intern at MESA Program (Explainable AI for cancer diagnosis), Full Stack Developer Intern at a stealth startup (authentication, CI/CD, AWS deployment), and Undergraduate Teaching Assistant at Sonoma State University (teaching C++, OOP, and data structures to 140+ students).",
      },
    },
    {
      "@type": "Question",
      name: "What internships has Sameer Khan completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has completed internships at: (1) MESA Research Program at Sonoma State University (Summer 2024) - Explainable AI research for cancer diagnosis, and (2) Stealth Startup in San Francisco (Spring-Summer 2024) - Full stack development with TypeScript, Python/Django, and AWS. He also worked as a Software Developer at PomJuice building an AI bookkeeping platform.",
      },
    },
    {
      "@type": "Question",
      name: "What blog articles has Sameer Khan written?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan writes technical articles on AI, React, Next.js, TypeScript, and software development. His blog covers comprehensive reviews of frontier AI models (GPT-5.2, Claude Opus 4.5, DeepSeek-V3.2-Speciale, Mistral Large 3, Grok 4.1, and more), developer tools comparisons (Cursor vs Copilot vs Claude Code), React tutorials (useEffect guide, debugging strategies), TypeScript guides, and prompt engineering techniques. All articles are available at sameerkhan.me/blog.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models has Sameer Khan reviewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sameer Khan has written comprehensive reviews of GPT-5.2 (Technical and Developer reviews), Claude Opus 4.5, GPT-5.1-Codex-Max, DeepSeek-V3.2-Speciale, Mistral Large 3, Mistral Devstral 2, Grok 4.1, AllenAI's OLMo 3 32B Think, and Amazon Nova 2 Lite. His reviews include benchmark performance, real-world testing, cost analysis, and developer use case recommendations.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-lg mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-16">
          <span className="text-xl font-medium">./sameerkhan.me</span>
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              Blog
            </Link>
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
    </>
  );
}
