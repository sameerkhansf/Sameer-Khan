"use client";

import { useState, useEffect } from "react";

const navItems = [
  {
    id: "intro",
    label: "Intro",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-gray-600 dark:text-gray-300" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-gray-600 dark:text-gray-300" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="14" y="4" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="4" y="14" width="6" height="6" rx="1" fill="currentColor"/>
        <rect x="14" y="14" width="6" height="6" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-gray-600 dark:text-gray-300" aria-hidden="true">
        <rect x="2" y="8" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "education",
    label: "Education",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-gray-600 dark:text-gray-300" aria-hidden="true">
        <path d="M12 3l10 5-10 5L2 8l10-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M2 13l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M2 18l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-gray-600 dark:text-gray-300" aria-hidden="true">
        <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8.5 14L12 16l3.5-2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M9 21l3-3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8">
        <div
          className="flex gap-1 px-2 py-2 rounded-[44px] border border-[rgba(18,18,18,0.07)] dark:border-gray-700 bg-[rgb(252,252,252)] dark:bg-gray-800 shadow-lg"
          data-border="true"
        >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            aria-label={`Navigate to ${item.label} section`}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 opacity-40 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${
              activeSection === item.id ? "opacity-100" : ""
            }`}
            style={{willChange: "transform", transform: "none"}}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {item.icon}
            </div>
          </a>
        ))}
        </div>
    </div>
  );
};

export default Navigation;