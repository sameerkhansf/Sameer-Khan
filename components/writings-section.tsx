"use client";

import Link from "next/link";

const writings = [
  {
    title:
      "Beyond ChatGPT: The AI startups that will become the next decacorns, according to investors",
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
      <div className="space-y-4 text-left">
        <h3 className="text-lg font-semibold mb-2">Writings</h3>
        <ul className="space-y-2">
          {writings.map((writing, index) => (
            <li key={index}>
              <Link
                href={writing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:decoration-wavy hover:underline"
              >
                {writing.title}
              </Link>
              <span className="text-xs text-muted-foreground ml-2">
                {writing.source}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
