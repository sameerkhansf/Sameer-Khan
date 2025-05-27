'use client';

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "@/components/motion";

const writings = [
  {
    title: "Beyond ChatGPT: The AI startups that will become the next decacorns, according to investors",
    url: "https://www.businessinsider.com/ai-startups-prediction-decacorn-deep-tech-investor-chatgpt-2023-5",
    source: "Business Insider",
  },
  {
    title: "The Future of Mobility and 5G",
    url: "https://link.medium.com/TUh635omzPb",
    source: "Medium",
  },
];

export default function WritingsSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold">Writings</h3>
        <ul className="space-y-6">
          {writings.map((writing, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <Link 
                href={writing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 -mx-4 rounded-lg transition-colors hover:bg-accent"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {writing.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{writing.source}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-1 opacity-0 group-hover:opacity-100" />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}