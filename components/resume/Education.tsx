import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      period: "Aug 21 - May 25",
      startDate: "2021-08",
      endDate: "2025-05",
      institution: "Sonoma State University",
      location: "Rohnert Park, CA",
      description:
        "Graduated with Honors. International Student Scholarship recipient (May 2023). Relevant Coursework: Database Management System Design, Data Structures & Algorithms, Computer Architecture, Software Design & Development, Intro to OOP, Computer Networking, Analysis of Algorithms.",
    },
  ];

  return (
    <AnimatedSection id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className="animate-fade-in bg-card rounded-2xl p-4 border border-border hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-border">
                  <Image
                    src="/logos/ssu.svg"
                    alt="Sonoma State University"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="framer-heading mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-4 h-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                        <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                      </svg>
                      <time dateTime={`${edu.startDate}/${edu.endDate}`}>
                        {edu.period}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-4 h-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 3l10 5-10 5L2 8l10-5z" />
                        <path d="M2 13l10 5 10-5M2 18l10 5 10-5" />
                      </svg>
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <svg
                          viewBox="0 0 20 20"
                          className="w-full h-full"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </div>
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-16">
                <p className="leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden border border-border">
                <Image
                  src="/logos/ssu.svg"
                  alt="Sonoma State University"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h3 className="framer-heading mb-1">{edu.degree}</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                    <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                  </svg>
                  <time dateTime={`${edu.startDate}/${edu.endDate}`}>{edu.period}</time>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3l10 5-10 5L2 8l10-5z" />
                    <path d="M2 13l10 5 10-5M2 18l10 5 10-5" />
                  </svg>
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                  <span>{edu.location}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
