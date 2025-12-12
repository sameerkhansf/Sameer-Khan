import Image from "next/image";

const Sidebar = () => {
  const skills = [
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
  ];

  const languages = [
    { name: "English", flag: "🇺🇸" },
    { name: "Urdu", flag: "🇵🇰" },
    { name: "Hindi", flag: "🇮🇳" },
  ];

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "http://x.com/sameerkhansf",
      name: "X (Twitter)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/sam.khan007_",
      name: "Instagram",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/sameerkhansf",
      name: "LinkedIn",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://www.github.com/sameerkhansf",
      name: "GitHub",
    },
  ];

  return (
    <aside className="w-80 lg:w-96 h-screen bg-resumx-bg dark:bg-gray-900 border-r border-resumx-gray/20 dark:border-gray-700 p-6 lg:p-8 overflow-y-auto flex-shrink-0">
      <div className="h-full flex flex-col">
        <div className="space-y-6 flex-1">
          {/* Profile */}
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden animate-float">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQEGVvJL1lNOdw/profile-displayphoto-shrink_400_400/B56ZW1dWncGQAs-/0/1742506128155?e=1755734400&v=beta&t=D-rQ5kLROJKetC45vatp-po9wQZDzbfOfFrPdpc9FmI"
                alt="Sameer Khan - Software Engineer"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <h1
                  className="text-2xl md:text-3xl"
                  style={{
                    color:
                      "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
                  }}
                >
                  Sameer Khan
                </h1>
                <div
                  className="w-5 h-5 md:w-6 md:h-6 bg-[rgb(46,144,250)] rounded-full flex items-center justify-center"
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
                className="text-resumx-text/60 text-xs md:text-sm mt-0"
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
            <h3 className="framer-section-heading">ABOUT</h3>
            <p
              className="leading-relaxed"
              style={{
                fontSize: "15px",
                color:
                  "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))",
              }}
            >
              New grad Software Engineer with a B.S. in Computer Science from Sonoma State University. Expertise in full-stack development, AI/ML, and modern web technologies.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="framer-section-heading">CONTACT</h3>
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
            <h3 className="framer-section-heading">SKILLS</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="framer-section-heading">LANGUAGES</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
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

        <div className="mb-6"></div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center pb-4">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-resumx-text/60 hover:text-resumx-text dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 text-xl"
              title={link.name}
              aria-label={`Visit my ${link.name} profile`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
