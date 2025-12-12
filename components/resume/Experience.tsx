import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

// Pomegranate icon for PomJuice
const PomJuiceLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <circle cx="12" cy="13" r="8" fill="#DC2626" />
    <path d="M12 5C12 5 10 3 12 1C14 3 12 5 12 5Z" fill="#22C55E" />
    <circle cx="9" cy="11" r="1.5" fill="#FCA5A5" opacity="0.6" />
    <circle cx="14" cy="12" r="1.5" fill="#FCA5A5" opacity="0.6" />
    <circle cx="11" cy="15" r="1.5" fill="#FCA5A5" opacity="0.6" />
  </svg>
);

// Stealth/incognito icon for stealth startup
const StealthLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4Z" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="11.5" r="3.5" fill="white"/>
  </svg>
);

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      period: "Mar 25 - May 25",
      company: "PomJuice — AI Bookkeeping Platform",
      location: "San Francisco, CA",
      logoType: "pomjuice" as const,
      description:
        'Architected and built "Books Done Right": AI bookkeeping app using Next.js, React, Node.js, Python, LLM tool calling, and QuickBooks API. Implemented LLM-based natural language interface, reducing manual effort by 80%, improving classification accuracy to 95%+.',
    },
    {
      id: 2,
      title: "Research Intern, Explainable AI for Cancer Diagnosis",
      period: "Jun 24 - Aug 24",
      company: "MESA Research Program, Sonoma State University",
      logoType: "ssu" as const,
      location: "Rohnert Park, CA",
      description:
        "Worked with Dr. Gill on integrating explainable AI into CNNs, improving model interpretability and predictive accuracy for cancer diagnosis applications.",
    },
    {
      id: 3,
      title: "Full Stack Software Developer Intern",
      period: "Apr 24 - Aug 24",
      company: "Stealth (Startup)",
      location: "San Francisco, CA",
      logoType: "stealth" as const,
      description:
        "Developed user authentication and onboarding using TypeScript. Designed AWS CodePipeline CI/CD pipelines, cutting deployment time and errors. Collaborated on full-stack development (TypeScript, CSS, Python/Django) and deployed via AWS.",
    },
    {
      id: 4,
      title: "Undergraduate Teaching Assistant",
      period: "Aug 22 - Dec 23",
      company: "Sonoma State University",
      location: "Rohnert Park, CA",
      logoType: "ssu" as const,
      description:
        "CS 215 Labs: Guided 80 students through C++/OOP labs and assignments. CSE 315: Mentored 60 students in data structures and algorithms. Created a coding best-practices module with 90%+ positive feedback.",
    },
  ];

  const renderLogo = (logoType: string) => {
    switch (logoType) {
      case "ssu":
        return (
          <Image
            src="/logos/ssu.svg"
            alt="Sonoma State University"
            width={40}
            height={40}
            className="w-full h-full object-contain p-1"
          />
        );
      case "pomjuice":
        return <PomJuiceLogo />;
      case "stealth":
        return <StealthLogo />;
      default:
        return null;
    }
  };

  const getLogoBgColor = (logoType: string) => {
    switch (logoType) {
      case "ssu":
        return "bg-white";
      case "pomjuice":
        return "bg-white";
      case "stealth":
        return "bg-gray-700";
      default:
        return "bg-red-600";
    }
  };

  return (
    <AnimatedSection id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="animate-fade-in bg-[rgb(252,252,252)] dark:bg-gray-800 rounded-2xl p-4 border border-[rgba(18,18,18,0.07)] dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 ${getLogoBgColor(exp.logoType)} rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-600`}>
                  {renderLogo(exp.logoType)}
                </div>
                <div className="flex-1">
                  <h3 className="framer-heading mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-resumx-text/60">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-4 h-4"
                        fill="currentColor"
                      >
                        <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                        <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                      </svg>
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-4 h-4"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1V6zm6 4a1 1 0 100-2 1 1 0 000 2zm-7 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm4 0a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4 0a1 1 0 011-1h.01a1 1 0 110 2H14a1 1 0 01-1-1zm-7 2a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm4 0a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <svg
                          viewBox="0 0 20 20"
                          className="w-full h-full"
                          fill="currentColor"
                          style={{ imageRendering: "pixelated", flexShrink: 0 }}
                        >
                          <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </div>
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-14">
                <p
                  className="leading-relaxed"
                  style={{
                    color:
                      "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126)))",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className={`w-10 h-10 ${getLogoBgColor(exp.logoType)} rounded-xl flex items-center justify-center mb-2 overflow-hidden border border-gray-200 dark:border-gray-600`}>
                {renderLogo(exp.logoType)}
              </div>
              <h3 className="framer-heading mb-1">{exp.title}</h3>
              <div
                className="flex items-center gap-4 text-xs"
                style={{ color: "rgb(126, 126, 126)" }}
              >
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                    <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                  </svg>
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  <span>{exp.location}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
