import AnimatedSection from "./AnimatedSection";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Developer",
      issueDate: "Issued 2025",
      logo: (
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_200_200/company-logo_200_200/0/1738855736997/amazon_web_services_logo?e=1755734400&v=beta&t=O1XUKKTZDcUZ292A6eGZ7tENH-zTct2PH21Y30zQWhM"
            alt="AWS Certified Developer"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Technical Interview Prep",
      issueDate: "Issued 2022",
      logo: (
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/C560BAQG2JeFuP6VNVQ/company-logo_200_200/company-logo_200_200/0/1652971578618/codepath_org_logo?e=1755734400&v=beta&t=vc8mphClK7IPflbaNdSM05Oz0et3UBk0SYLaePfKuO8"
            alt="Technical Interview Prep"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
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
                <h3 className="framer-heading mb-1">{cert.title}</h3>
                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126))",
                  }}
                >
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
