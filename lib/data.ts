export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Cloud" | "Database" | "Tools" | "Languages";
  proficiency: "Expert" | "Advanced" | "Intermediate";
}

export interface Expertise {
  area: string;
  level: "Expert" | "Advanced" | "Intermediate";
  technologies: string[];
  relatedProjects?: string[];
}

export const profileData = {
  name: "Sameer Khan",
  pronouns: "he/him",
  bio: "Co-Founder of agentShop, the commerce intelligence layer that turns AI conversations into consultative sales. B.S. in Computer Science from Sonoma State University (Honors). Expertise in full-stack development, AI/ML, and modern web technologies.",
  imageUrl: "/profile.jpg",
  contact: {
    email: "khansam@sonoma.edu",
    website: "samkhan.net",
  },
  // Flat skills array for backward compatibility
  skills: [
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "AWS",
    "Docker",
    "MongoDB",
    "Git",
  ],
  // Enhanced skills with categories and proficiency
  skillsDetailed: [
    { name: "React", category: "Frontend", proficiency: "Advanced" },
    { name: "Next.js", category: "Frontend", proficiency: "Advanced" },
    { name: "TypeScript", category: "Languages", proficiency: "Advanced" },
    { name: "JavaScript", category: "Languages", proficiency: "Advanced" },
    { name: "Node.js", category: "Backend", proficiency: "Advanced" },
    { name: "Python", category: "Languages", proficiency: "Advanced" },
    { name: "Java", category: "Languages", proficiency: "Intermediate" },
    { name: "C++", category: "Languages", proficiency: "Intermediate" },
    { name: "AWS", category: "Cloud", proficiency: "Intermediate" },
    { name: "Docker", category: "Cloud", proficiency: "Intermediate" },
    { name: "MongoDB", category: "Database", proficiency: "Advanced" },
    { name: "Git", category: "Tools", proficiency: "Advanced" },
  ] as Skill[],
  // Areas of expertise
  expertise: [
    {
      area: "Full-Stack Development",
      level: "Advanced",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
      relatedProjects: ["Expense Tracker", "Books Done Right", "agentShop"],
    },
    {
      area: "AI/ML & Computer Vision",
      level: "Advanced",
      technologies: ["Python", "TensorFlow", "CNN", "LLM", "AI Agents"],
      relatedProjects: ["BioSoundSCape", "Explainable AI Research", "MARL Analyst Agent"],
    },
    {
      area: "Cloud & DevOps",
      level: "Intermediate",
      technologies: ["AWS", "Docker", "CI/CD", "CodePipeline"],
      relatedProjects: ["CmdTower Infrastructure"],
    },
    {
      area: "Systems Programming",
      level: "Intermediate",
      technologies: ["C++", "Compilers", "Interpreters"],
      relatedProjects: ["C++ Interpreter", "DFA/NFA Builder"],
    },
  ] as Expertise[],
  languages: [
    { name: "English", flag: "🇺🇸", proficiency: "Native" },
    { name: "Urdu", flag: "🇵🇰", proficiency: "Native" },
    { name: "Hindi", flag: "🇮🇳", proficiency: "Fluent" },
  ],
  socialLinks: [
    {
      name: "X (Twitter)",
      url: "https://x.com/sameerkhan_sf",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sam.khan007_",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sameerkhansf",
    },
    {
      name: "GitHub",
      url: "https://www.github.com/sameerkhansf",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
    },
    {
      name: "CodePath Technical Interview Prep",
      issuer: "CodePath",
      date: "2024",
    },
  ],
};
