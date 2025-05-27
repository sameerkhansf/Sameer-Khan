'use client';

import { motion } from "@/components/motion";

export default function IntroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Hey, I'm Amir
        </h2>
        <div className="text-lg md:text-xl text-muted-foreground space-y-4 leading-relaxed">
          <p>
            Founder of MARL 5G Accelerator, where we bring together startups, investors, and industry giants building the future of Mobility, Autonomy, Robotics, and Logistics. Basically, if it moves or thinks, we're into it.
          </p>
          <p>
            Before this, I was in venture and fintech, founded LendTech to shake up banking, and helped turn around companies as a consultant. I like big ideas and even bigger challenges.
          </p>
          <p>
            Offline, I'm usually wine tasting in Sonoma, park hopping in SF, or chasing views up in the North Bay.
          </p>
        </div>
      </motion.div>
    </section>
  );
}