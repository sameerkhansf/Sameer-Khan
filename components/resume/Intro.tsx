import AnimatedSection from './AnimatedSection';

const Intro = () => {
  return (
    <AnimatedSection id="intro" className="section-container">
      <h2 className="section-title">Intro</h2>
      <div className="prose leading-relaxed" style={{color: "var(--token-c688907e-c440-4ba5-8234-4183c55006d7, rgb(41, 41, 41))"}}>
        <p className="mb-6">
          I'm Sameer Khan, a Computer Science student at Sonoma State University graduating in May 2025. My expertise lies in developing innovative and user-focused applications using modern web technologies, AI/ML, and full-stack development where I emphasize intuitive design and robust functionality.
        </p>
        <p>
          Currently pursuing a Bachelor's degree in Computer Science with a 3.52 GPA, my journey has taken me from research in explainable AI for cancer diagnosis to building AI-powered bookkeeping platforms and full-stack applications for startups.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Intro;