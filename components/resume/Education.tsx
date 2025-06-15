import AnimatedSection from './AnimatedSection';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      period: 'Aug 21 - May 25',
      institution: 'Sonoma State University',
      location: 'Rohnert Park, CA',
      description: 'GPA: 3.52. Relevant Coursework: Database Management System Design, Data Structures & Algorithms, Computer Architecture, Software Design & Development, Intro to OOP, Computer Networking, Analysis of Algorithms. Awards & Scholarships: Dean\'s List (Fall 2021, Spring 2022); International Student Scholarship.',
      logo: (
        <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 3l10 5-10 5L2 8l10-5z"/>
            <path d="M2 13l10 5 10-5M2 18l10 5 10-5"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <AnimatedSection id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className="animate-fade-in bg-[rgb(252,252,252)] rounded-2xl p-4 border border-[rgba(18,18,18,0.07)] hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="flex items-start gap-4 mb-3">
                {edu.logo}
                <div className="flex-1">
                  <h3 className="framer-heading mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-resumx-text/60">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                        <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z"/>
                        <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z"/>
                      </svg>
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
                        <path d="M12 3l10 5-10 5L2 8l10-5z"/>
                        <path d="M2 13l10 5 10-5M2 18l10 5 10-5"/>
                      </svg>
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <svg viewBox="0 0 20 20" className="w-full h-full" fill="currentColor" style={{imageRendering: 'pixelated', flexShrink: 0}}>
                          <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/>
                        </svg>
                      </div>
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-16">
                <p className="leading-relaxed" style={{color: "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126)))"}}>
                  {edu.description}
                </p>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                <span className="text-sm font-bold text-black">W</span>
              </div>
              <h3 className="framer-heading mb-1">{edu.degree}</h3>
              <div className="flex items-center gap-4 text-xs" style={{ color: "rgb(126, 126, 126)" }}>
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 20 20" className="w-6 h-6" fill="currentColor">
                    <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z"/>
                    <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z"/>
                  </svg>
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 20 20" className="w-6 h-6" fill="currentColor">
                    <path d="M12 3l10 5-10 5L2 8l10-5z"/>
                    <path d="M2 13l10 5 10-5M2 18l10 5 10-5"/>
                  </svg>
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg viewBox="0 0 20 20" className="w-6 h-6" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/>
                  </svg>
                  <span>{edu.location}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;