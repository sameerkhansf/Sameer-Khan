import AnimatedSection from './AnimatedSection';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Alpha Certified Developer Associate',
      issueDate: 'Issued 2019',
      logo: (
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: 'Beta Certified Developer Associate',
      issueDate: 'Issued 2023',
      logo: (
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <AnimatedSection id="certifications" className="section-container">
      <h2 className="section-title">License & Certification</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="animate-fade-in bg-[rgb(252,252,252)] rounded-2xl p-4 border border-[rgba(18,18,18,0.07)] hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              {cert.logo}
              <div className="flex-1">
                <h3 className="framer-heading mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm" style={{color: "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126))"}}>
                  {cert.issueDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Certifications;