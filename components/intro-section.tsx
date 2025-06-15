"use client";

import { motion } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
export default function IntroSection() {
  return (
    <section>
      <div className="space-y-6 text-left">
        <p className="text-base leading-relaxed">
          Welcome to my little piece of the internet. I'm a Computer Science student at{" "}
          <span className="text-muted-foreground">
            <Link
              href="https://www.sonoma.edu"
              target="_blank"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              Sonoma State University
            </Link>
          </span>
          {" "}graduating in May 2025. I specialize in full-stack development, AI/ML, and building innovative web and mobile applications that solve real-world problems.
        </p>
        <Image
          src="/panel-event.jpg"
          alt="Panel Event"
          width={600}
          height={400}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-base leading-relaxed">
          My journey spans from research in explainable AI for cancer diagnosis to building AI-powered bookkeeping platforms at{" "}
          <span className="text-muted-foreground">PomJuice</span>, where I architected systems that reduced manual effort by 80% and achieved 95%+ classification accuracy.
        </p>
        <p className="text-base leading-relaxed">
          When I'm not coding, you can find me exploring the beautiful Bay Area, working on side projects, or diving deep into the latest tech trends. I believe in building technology that makes a meaningful impact.
        </p>
      </div>
    </section>
  );
}
