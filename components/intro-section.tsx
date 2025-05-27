"use client";

import { motion } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
export default function IntroSection() {
  return (
    <section>
      <div className="space-y-6 text-left">
        <p className="text-base leading-relaxed">
          Welcome to my little piece of the internet. I'm the founder of{" "}
          <span className="text-muted-foreground">
            <Link
              href="https://marlvc.com"
              target="_blank"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              MARL 5G Accelerator
            </Link>
          </span>
          , where we bring together startups, investors, and industry giants
          building the future of Mobility, Autonomy, Robotics, and Logistics.
          Visionaries i have backed can be found{" "}
          <span className="text-muted-foreground">
            <Link
              href="https://marlvc.com/our-portfolio/"
              target="_blank"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              here
            </Link>
          </span>
        </p>
        <Image
          src="/panel-event.jpg"
          alt="Panel Event"
          width={600}
          height={400}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-base leading-relaxed">
          Before this, I was in venture and fintech, founded{" "}
          <span className="text-muted-foreground">LendTech</span> (acquired) to
          shake up banking, and helped turn around companies as a consultant. I
          like big ideas and even bigger challenges.
        </p>
        <p className="text-base  leading-relaxed">
          I live in sunny and foggy San Francisco, CA. You can find me wine
          tasting in Sonoma, park hopping in SF, or chasing views up in the
          North Bay.
        </p>
      </div>
    </section>
  );
}
