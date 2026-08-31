import type { Metadata } from "next";
import Link from "next/link";
import ResumeBody from "@/components/resume-body";
import PrintButton from "@/components/print-button";
import { identity, summary } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Résumé",
  description: summary,
  alternates: {
    canonical: "/resume/",
  },
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10 sm:py-14">
      <nav className="mb-14 flex items-baseline justify-between">
        <Link href="/" className="meta link-quiet">
          ← {identity.name}
        </Link>
        <span className="flex items-baseline gap-5">
          <a href="/SameerKhan-Resume.pdf" className="meta link-quiet">
            Download PDF
          </a>
          <PrintButton />
        </span>
      </nav>
      <main id="main-content">
        <ResumeBody />
      </main>
    </div>
  );
}
