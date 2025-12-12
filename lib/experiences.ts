export interface Experience {
  id: number;
  title: string;
  company: string;
  companyDescription?: string;
  period: string;
  startDate: string; // ISO 8601 format
  endDate: string; // ISO 8601 format
  location: string;
  logoType: "ssu" | "pomjuice" | "stealth";
  description: string;
  technologies: string[];
  achievements?: string[];
  employmentType: "FULL_TIME" | "INTERN" | "PART_TIME" | "CONTRACT";
  industry?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "PomJuice",
    companyDescription: "AI Bookkeeping Platform",
    period: "Mar 25 - May 25",
    startDate: "2025-03",
    endDate: "2025-05",
    location: "San Francisco, CA",
    logoType: "pomjuice",
    description:
      'Architected and built "Books Done Right": AI bookkeeping app using Next.js, React, Node.js, Python, LLM tool calling, and QuickBooks API. Implemented LLM-based natural language interface, reducing manual effort by 80%, improving classification accuracy to 95%+.',
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "LLM",
      "QuickBooks API",
      "TypeScript",
    ],
    achievements: [
      "Reduced manual bookkeeping effort by 80%",
      "Achieved 95%+ classification accuracy with LLM-based interface",
      "Built end-to-end AI bookkeeping application",
    ],
    employmentType: "FULL_TIME",
    industry: "FinTech",
  },
  {
    id: 2,
    title: "Research Intern, Explainable AI for Cancer Diagnosis",
    company: "MESA Research Program, Sonoma State University",
    period: "Jun 24 - Aug 24",
    startDate: "2024-06",
    endDate: "2024-08",
    location: "Rohnert Park, CA",
    logoType: "ssu",
    description:
      "Worked with Dr. Gill on integrating explainable AI into CNNs, improving model interpretability and predictive accuracy for cancer diagnosis applications.",
    technologies: ["Python", "TensorFlow", "CNN", "Explainable AI", "Jupyter"],
    achievements: [
      "Improved model interpretability for cancer diagnosis",
      "Enhanced predictive accuracy through explainable AI techniques",
    ],
    employmentType: "INTERN",
    industry: "Healthcare AI Research",
  },
  {
    id: 3,
    title: "Full Stack Software Developer Intern",
    company: "Stealth Startup",
    period: "Apr 24 - Aug 24",
    startDate: "2024-04",
    endDate: "2024-08",
    location: "San Francisco, CA",
    logoType: "stealth",
    description:
      "Developed user authentication and onboarding using TypeScript. Designed AWS CodePipeline CI/CD pipelines, cutting deployment time and errors. Collaborated on full-stack development (TypeScript, CSS, Python/Django) and deployed via AWS.",
    technologies: [
      "TypeScript",
      "Python",
      "Django",
      "AWS",
      "AWS CodePipeline",
      "CSS",
    ],
    achievements: [
      "Built user authentication and onboarding system",
      "Reduced deployment time and errors with CI/CD pipelines",
      "Full-stack development across frontend and backend",
    ],
    employmentType: "INTERN",
    industry: "Technology",
  },
  {
    id: 4,
    title: "Undergraduate Teaching Assistant",
    company: "Sonoma State University",
    period: "Aug 22 - Dec 23",
    startDate: "2022-08",
    endDate: "2023-12",
    location: "Rohnert Park, CA",
    logoType: "ssu",
    description:
      "CS 215 Labs: Guided 80 students through C++/OOP labs and assignments. CSE 315: Mentored 60 students in data structures and algorithms. Created a coding best-practices module with 90%+ positive feedback.",
    technologies: ["C++", "OOP", "Data Structures", "Algorithms"],
    achievements: [
      "Guided 80 students through C++ and OOP coursework",
      "Mentored 60 students in data structures and algorithms",
      "Created coding best-practices module with 90%+ positive feedback",
    ],
    employmentType: "PART_TIME",
    industry: "Education",
  },
];

export interface Project {
  id: number;
  title: string;
  date: string;
  dateISO?: string;
  role: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  repositoryUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BioSoundSCape",
    date: "Spring 2025",
    dateISO: "2025-05",
    role: "Computer Vision Researcher",
    category: "Computer Vision Project",
    description:
      "Research project focused on land cover classification using machine learning and computer vision techniques for environmental analysis.",
    technologies: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
    image: "/projects/biosoundscape.png",
    url: "https://github.com/sameerkhansf/BioSoundSCape_SSU_Computer_Science",
    repositoryUrl:
      "https://github.com/sameerkhansf/BioSoundSCape_SSU_Computer_Science",
  },
  {
    id: 2,
    title: "DFA/NFA Builder",
    date: "Fall 2024",
    dateISO: "2024-12",
    role: "Automata Theory Project",
    category: "Automata Theory",
    description:
      "Tool for creating and visualizing deterministic and non-deterministic finite automata, implementing core concepts from automata theory and formal languages.",
    technologies: ["Java", "Automata Theory", "Graph Visualization"],
    image: "/projects/dfa-nfa-builder.png",
    url: "https://github.com/sameerkhansf/JFLAPAutomataBuilder",
    repositoryUrl: "https://github.com/sameerkhansf/JFLAPAutomataBuilder",
  },
  {
    id: 3,
    title: "C++ Interpreter",
    date: "Spring 2025",
    dateISO: "2025-05",
    role: "Compiler Project Developer",
    category: "C++",
    description:
      "Interpreter implementation demonstrating programming language theory concepts including lexical analysis, parsing, and execution.",
    technologies: ["C++", "Compilers", "Lexical Analysis", "Parsing"],
    image: "/projects/cpp-interpreter.jpg",
    url: "https://github.com/sameerkhansf/Interpreter",
    repositoryUrl: "https://github.com/sameerkhansf/Interpreter",
  },
  {
    id: 4,
    title: "Expense Tracker Application",
    date: "Dec 2024",
    dateISO: "2024-12",
    role: "Full Stack Developer",
    category: "Web Application",
    description:
      "Full-stack web application for personal expense tracking with data visualization and expense categorization features.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    image: "/projects/expense-tracker.png",
    url: "https://expense-tracker-mocha-three.vercel.app",
    demoUrl: "https://expense-tracker-mocha-three.vercel.app",
  },
];
