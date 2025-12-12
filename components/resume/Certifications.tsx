import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      issueDate: "Issued 2025",
      logoSrc: "/logos/aws.svg",
      logoAlt: "AWS",
      logoBg: "bg-[#232F3E]",
    },
    {
      id: 2,
      title: "Technical Interview Prep",
      issuer: "CodePath",
      issueDate: "Issued 2022",
      logoSrc: "/logos/codepath.png",
      logoAlt: "CodePath",
      logoBg: "bg-white",
    },
  ];

  return (
    <AnimatedSection id="certifications" className="section-container">
      <h2 className="section-title">License & Certification</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="animate-fade-in bg-[rgb(252,252,252)] dark:bg-gray-800 rounded-2xl p-4 border border-[rgba(18,18,18,0.07)] dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${cert.logoBg} rounded-xl flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600 p-2`}>
                <Image
                  src={cert.logoSrc}
                  alt={cert.logoAlt}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="framer-heading mb-1">{cert.title}</h3>
                <p
                  className="text-sm"
                  style={{
                    color:
                      "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126))",
                  }}
                >
                  {cert.issuer} · {cert.issueDate}
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
