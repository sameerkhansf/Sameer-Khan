"use client";
import Link from "next/link";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section>
      <div className="space-y-6 text-left">
        <h1 className="text-2xl font-semibold">Sameer Khan - Software Engineer</h1>
        <p className="text-base leading-relaxed">
          Welcome to my little piece of the internet. I'm a new grad Software
          Engineer with a passion for building innovative web and mobile
          applications that solve real-world problems. I specialize in
          full-stack development, AI/ML, and building innovative web and mobile
          applications that solve real-world problems.
        </p>
        <div className="space-y-2">
          <Image
            src="/panel-event.jpg"
            alt="ASES x NFX Ventures dinner with Stanford entrepreneurs"
            width={600}
            height={400}
            className="w-full rounded-lg"
            priority
            fetchPriority="high"
          />
          <p className="text-sm text-muted-foreground text-center">
            <Link
              href="https://ases.stanford.edu"
              target="_blank"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              ASES
            </Link>{" "}
            x{" "}
            <Link
              target="_blank"
              href="https://www.nfx.com/team/anna-pinol"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              NFX Ventures
            </Link>{" "}
            dinner with Stanford's next generation of entrepreneurs!
          </p>
        </div>
        <p className="text-base leading-relaxed">
          My journey spans from research in explainable AI for cancer diagnosis
          to building AI-powered bookkeeping platforms at{" "}
          <span className="text-muted-foreground">PomJuice</span>, where I
          architected systems that reduced manual effort by 80% and achieved
          95%+ classification accuracy.
        </p>
        <p className="text-base leading-relaxed">
          When I'm not coding, you can find me exploring the beautiful Bay Area,
          working on side projects, or diving deep into the latest tech trends.
          I believe in building technology that makes a meaningful impact.
        </p>
      </div>
    </section>
  );
}
