"use client";

import Navigation from "@/components/resume/Navigation";
import Sidebar from "@/components/resume/Header";
import MobileHeader from "@/components/resume/MobileHeader";
import Intro from "@/components/resume/Intro";
import Projects from "@/components/resume/Projects";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import Certifications from "@/components/resume/Certifications";
import Contact from "@/components/resume/Contact";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:gap-x-8 bg-background text-foreground">
      {/* Sidebar - Desktop only, as a sibling */}
      <div className="hidden md:block h-screen sticky top-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Back to Home Button - Mobile and Desktop */}
        <div className="fixed top-4 right-4 z-50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 dark:text-white"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Mobile Header */}
        <MobileHeader />

        {/* Main Content Area */}
        <div className="relative flex-1 overflow-hidden">
          <main className="min-h-screen max-w-4xl mx-auto px-8 lg:px-12 xl:px-16">
            <Intro />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            {/* <Testimonials /> */}
            <Contact />
            {/* Footer */}
            <footer className="section-container">
              <div className="text-center py-8 border-t border-resumx-gray/20 dark:border-gray-700 mb-20">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  © 2025 Resume by Sameer Khan
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* Fixed navigation bar - positioned relative to main content */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex">
          {/* Sidebar spacer */}
          <div className="hidden md:block w-80 lg:w-96 flex-shrink-0"></div>
          {/* Main content area */}
          <div className="flex-1 flex justify-center relative">
            {/* Blur effect only for main content area */}
            <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm"></div>
            <div className="pointer-events-auto relative z-10">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
