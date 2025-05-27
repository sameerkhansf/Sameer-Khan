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
          <span className="text-muted-foreground">MARL 5G Accelerator</span>,
          where we bring together startups, investors, and industry giants
          building the future of Mobility, Autonomy, Robotics, and Logistics.
        </p>
        <Image
          src="https://media.licdn.com/dms/image/v2/C5603AQG26O6ReKYQYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1554737506744?e=1753920000&v=beta&t=uqob31VIUMpDMe1lP71I7-raar67TTiZHZQ_PH9yYyA"
          alt="Amir Khan"
          width={600}
          height={400}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-base text-muted-foreground leading-relaxed">
          I live in sunny and foggy San Francisco, CA. You can find me wine
          tasting in Sonoma, park hopping in SF, or chasing views up in the
          North Bay.
        </p>
        <p className="text-base leading-relaxed">
          Before this, I was in venture and fintech, founded{" "}
          <Link
            href="https://lendtech.co"
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          >
            LendTech
          </Link>{" "}
          to shake up banking, and helped turn around companies as a consultant.
          I like big ideas and even bigger challenges.
        </p>
      </div>
    </section>
  );
}
