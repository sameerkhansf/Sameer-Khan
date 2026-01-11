import AnimatedSection from "./AnimatedSection";

const Intro = () => {
  return (
    <AnimatedSection id="intro" className="section-container">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Sameer Khan</h1>
      <p className="text-lg text-muted-foreground mb-6">Full-Stack Software Engineer</p>
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
