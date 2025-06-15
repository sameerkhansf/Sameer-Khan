"use client";

import Navigation from "@/components/resume/Navigation";
import Sidebar from "@/components/resume/Header";
import Intro from "@/components/resume/Intro";
import Projects from "@/components/resume/Projects";
import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import Certifications from "@/components/resume/Certifications";
import Testimonials from "@/components/resume/Testimonials";
import Contact from "@/components/resume/Contact";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:gap-x-8 resume-body">
      {/* Sidebar - Desktop only, as a sibling */}
      <div className="hidden md:block h-screen sticky top-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Back to Home Button - Mobile and Desktop */}
        <div className="fixed top-4 right-4 z-50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white/90 hover:bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
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
        <div className="md:hidden px-4">
          <div className="p-6 space-y-6">
            {/* Profile */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-18 h-18 rounded-full overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEGVvJL1lNOdw/profile-displayphoto-shrink_400_400/B56ZW1dWncGQAs-/0/1742506128155?e=1755734400&v=beta&t=D-rQ5kLROJKetC45vatp-po9wQZDzbfOfFrPdpc9FmI"
                  alt="Sameer Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <h1
                    className="text-3xl font-bold"
                    style={{
                      color:
                        "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                    }}
                  >
                    Sameer Khan
                  </h1>
                  <div
                    className="w-6 h-6 bg-[rgb(46,144,250)] rounded-full flex items-center justify-center"
                    style={{
                      mask: "url('https://framerusercontent.com/images/hxlv6ghDGJi7x5RjjyITyC3eBQw.svg') center center / contain no-repeat alpha",
                      boxShadow:
                        "rgba(255, 255, 255, 0.18) 0px 0.602187px 0.602187px -1.25px inset, rgba(255, 255, 255, 0.16) 0px 2.28853px 2.28853px -2.5px inset, rgba(255, 255, 255, 0.063) 0px 10px 10px -3.75px inset",
                    }}
                  >
                    <svg
                      viewBox="0 0 20 21"
                      className="w-3 h-3 text-white fill-current"
                    >
                      <path d="M 5.454 11.969 L 7.618 14.161 C 7.981 14.517 8.554 14.517 8.927 14.161 L 14.309 8.737 C 14.663 8.381 14.663 7.806 14.309 7.45 L 14.245 7.386 C 13.89 7.03 13.309 7.03 12.954 7.386 L 8.272 12.097 L 6.809 10.618 C 6.454 10.262 5.872 10.262 5.518 10.618 L 5.454 10.682 C 5.1 11.038 5.1 11.613 5.454 11.969 Z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126))",
                  }}
                >
                  he/him
                </p>
              </div>
            </div>

            {/* About */}
            <div>
              <h3
                className="font-semibold mb-2"
                style={{
                  fontSize: "15px",
                  color:
                    "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                }}
              >
                ABOUT
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  fontSize: "15px",
                  color:
                    "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                }}
              >
                Computer Science student at Sonoma State University with
                expertise in full-stack development, AI/ML, and modern web
                technologies.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="font-semibold mb-2"
                style={{
                  fontSize: "15px",
                  color:
                    "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                }}
              >
                CONTACT
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:khansam@sonoma.edu"
                  className="flex items-center gap-3 transition-colors"
                  style={{
                    fontSize: "15px",
                    color:
                      "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-resumx-text/60 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                  khansam@sonoma.edu
                </a>
                <a
                  href="https://sameerkhan.me"
                  className="flex items-center gap-3 transition-colors"
                  style={{
                    fontSize: "15px",
                    color:
                      "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-resumx-text/60 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  sameerkhan.me
                </a>
                <a
                  href="tel:+14154103335"
                  className="flex items-center gap-3 transition-colors"
                  style={{
                    fontSize: "15px",
                    color:
                      "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-resumx-text/60 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  (415) 410-3335
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3
                className="font-semibold mb-2"
                style={{
                  fontSize: "15px",
                  color:
                    "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                }}
              >
                SKILLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "C++",
                  "Python",
                  "Java",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Next.js",
                  "AWS",
                  "Docker",
                  "MongoDB",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3
                className="font-semibold mb-2"
                style={{
                  fontSize: "15px",
                  color:
                    "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                }}
              >
                LANGUAGES
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "English", flag: "🇺🇸" },
                  { name: "Urdu", flag: "🇵🇰" },
                  { name: "Hindi", flag: "🇮🇳" },
                ].map((language) => (
                  <span
                    key={language.name}
                    className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-white rounded-full border border-resumx-gray/30 text-resumx-text hover:bg-resumx-purple hover:text-white hover:border-resumx-purple transition-all duration-200"
                  >
                    <span className="text-base">{language.flag}</span>
                    {language.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative flex-1 overflow-hidden">
          <main className="min-h-screen max-w-4xl mx-auto px-8 lg:px-12 xl:px-16">
            <Intro />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Testimonials />
            <Contact />
            {/* Footer */}
            <footer className="section-container">
              <div className="text-center py-8 border-t border-resumx-gray/20 mb-20">
                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126)))",
                  }}
                >
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
            <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-sm"></div>
            <div className="pointer-events-auto relative z-10">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
