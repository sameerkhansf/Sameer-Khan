"use client";

import { motion } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";
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
            Founder of{" "}
            <Link
              href="https://marlvc.com"
              target="_blank"
              className="text-blue-500 hover:text-blue-600"
            >
              MARL 5G Accelerator
            </Link>
            , where we bring together startups, investors, and industry giants
            building the future of Mobility, Autonomy, Robotics, and Logistics.
            Basically, if it moves or thinks, we're into it.
          </p>

          <Image
            src="https://media.licdn.com/dms/image/v2/C5603AQG26O6ReKYQYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1554737506744?e=1753920000&v=beta&t=uqob31VIUMpDMe1lP71I7-raar67TTiZHZQ_PH9yYyA"
            alt="Amir Khan"
            width={600}
            height={400}
          />

          <p>
            Before this, I was in venture and fintech, founded{" "}
            <Link
              href="https://lendtech.co"
              target="_blank"
              className="text-blue-500 hover:text-blue-600"
            >
              LendTech
            </Link>{" "}
            to shake up banking, and helped turn around companies as a
            consultant. I like big ideas and even bigger challenges.
          </p>
          <p>
            Offline, I'm usually wine tasting in Sonoma, park hopping in SF, or
            chasing views up in the North Bay.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
