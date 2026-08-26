import AnimatedSection from "./AnimatedSection";

const Intro = () => {
  return (
    <AnimatedSection id="intro" className="section-container">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Sameer Khan</h1>
      <p className="text-lg text-muted-foreground mb-6">Co-Founder, agentShop · Full-Stack Software Engineer</p>
      <h2 className="section-title">Intro</h2>
      <div className="prose leading-relaxed text-foreground">
        <p className="mb-6">
          I&apos;m Sameer Khan, Co-Founder of agentShop — the commerce intelligence
          layer that turns AI conversations into consultative sales. I build at
          the intersection of AI and commerce, helping brands show up where AI
          is deciding what customers buy.
        </p>
        <p>
          My journey spans from research in explainable AI for brain tumor
          diagnosis to evaluating 500+ startups at MARL Accelerator, building
          AI-powered bookkeeping platforms at PomJuice, and now building
          agentShop to help brands own the AI shelf.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default Intro;
