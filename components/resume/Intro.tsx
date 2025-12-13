import AnimatedSection from "./AnimatedSection";

const Intro = () => {
  return (
    <AnimatedSection id="intro" className="section-container">
      <h1 className="sr-only">Sameer Khan - Professional Resume</h1>
      <h2 className="section-title">Intro</h2>
      <div className="prose leading-relaxed text-foreground">
        <p className="mb-6">
          I'm Sameer Khan, passionate software engineering student with a strong
          interest in building innovative and user-friendly applications. My
          goal is to leverage my technical skills and problem-solving abilities
          to contribute to the development of cutting-edge technologies. My
          expertise lies in developing innovative and user-focused applications
          using modern web technologies, AI/ML, and full-stack development.
        </p>
        <p>
          My journey has taken me from research in explainable AI for cancer
          diagnosis to building AI-powered bookkeeping platforms and full-stack
          applications for startups.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Intro;
