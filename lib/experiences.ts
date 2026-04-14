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
    title: "Co-Founder",
    company: "agentShop",
    companyDescription: "Commerce Intelligence for AI",
    period: "Nov 25 - Present",
    startDate: "2025-11",
    endDate: "Present",
    location: "San Francisco, CA",
    logoType: "stealth",
    description:
      "Co-founding agentShop, the commerce intelligence layer that turns AI conversations into consultative sales — for any brand, on any AI surface. Helping brands show up where AI is deciding what customers buy. Built WordPress/WooCommerce plugin, Shopify and Wix integrations, and an analytics dashboard tracking AI-driven sales and visibility across ChatGPT, Gemini, and Perplexity.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI Agents",
      "WooCommerce",
      "Shopify",
      "Analytics",
    ],
    achievements: [
      "Launched WordPress plugin on the official plugin directory",
      "Built AI visibility tracking across ChatGPT, Gemini, and Perplexity",
      "Developed commerce intelligence platform for AI-driven product discovery",
    ],
    employmentType: "FULL_TIME",
    industry: "AI Commerce",
  },
  {
    id: 2,
    title: "Portfolio Tech Analyst Intern",
    company: "MARL Accelerator",
    companyDescription: "Venture Capital Accelerator",
    period: "Jan 25 - Jul 25",
    startDate: "2025-01",
    endDate: "2025-07",
    location: "Remote",
    logoType: "stealth",
    description:
      "Conducted technical and strategic diligence on 500+ early-stage startup applications to shortlist companies for MARL's Winter 2024 cohort — owning the process from first call to final tech assessment. Built and deployed an AI-powered Analyst Agent that automated the initial diligence pipeline and generated Investment Memos aligned with MARL Fund III's thesis, reducing analyst hours per deal by over 70%.",
    technologies: [
      "AI Agents",
      "LLM",
      "Python",
      "Due Diligence",
      "Investment Analysis",
    ],
    achievements: [
      "Evaluated 500+ early-stage startup applications",
      "Built AI-powered Analyst Agent automating diligence pipeline",
      "Reduced analyst hours per deal by over 70%",
    ],
    employmentType: "INTERN",
    industry: "Venture Capital",
  },
  {
    id: 3,
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
    id: 4,
    title: "MESA Idea Accelerator Program",
    company: "MESA at Sonoma State University",
    companyDescription: "Entrepreneurship Accelerator at Uber HQ",
    period: "Aug 24",
    startDate: "2024-08",
    endDate: "2024-08",
    location: "San Francisco, CA",
    logoType: "ssu",
    description:
      "Participated in the MESA Idea Accelerator Program at Uber headquarters in San Francisco, focusing on human-centered design and business development. Engaged in workshops and mentorship sessions with industry professionals from Uber and other tech companies. Collaborated with a team to ideate, design, and pitch a marketable prototype to industry leaders. Presented at the annual Student Leadership Conference.",
    technologies: [
      "Human-Centered Design",
      "Business Development",
      "Prototyping",
      "Pitching",
    ],
    achievements: [
      "Week-long intensive at Uber headquarters",
      "Pitched marketable prototype to industry leaders",
      "Presented at Student Leadership Conference",
    ],
    employmentType: "FULL_TIME",
    industry: "Entrepreneurship",
  },
  {
    id: 5,
    title: "Research Intern, Explainable AI for Brain Tumor Diagnosis",
    company: "MESA Research Program, Sonoma State University",
    period: "Jun 24 - Aug 24",
    startDate: "2024-06",
    endDate: "2024-08",
    location: "Rohnert Park, CA",
    logoType: "ssu",
    description:
      "Built custom image classification models for brain tumor diagnosis using CNNs (VGG16, VGG19, ResNet-50, MobileNet). Applied transfer learning and XAI techniques including LIME, SHAP, and Grad-CAM to enhance model interpretability for healthcare professionals. Evaluated models using AUC-ROC curves and confusion matrices on the Br-H35 clinical image dataset.",
    technologies: ["Python", "TensorFlow", "CNN", "LIME", "SHAP", "Grad-CAM", "Jupyter"],
    achievements: [
      "Built classification models using VGG16, VGG19, ResNet-50, and MobileNet",
      "Applied XAI techniques (LIME, SHAP, Grad-CAM) for model interpretability",
      "Evaluated models on Br-H35 clinical image dataset with AUC-ROC analysis",
    ],
    employmentType: "INTERN",
    industry: "Healthcare AI Research",
  },
  {
    id: 6,
    title: "Full-Stack Software Engineer",
    company: "CmdTower",
    companyDescription: "Vertical SaaS Platform",
    period: "Apr 24 - Aug 24",
    startDate: "2024-04",
    endDate: "2024-08",
    location: "San Francisco, CA",
    logoType: "stealth",
    description:
      "Developed a SaaS platform to streamline business operations with robust user authentication, secure protected routes, and dynamic onboarding forms using TypeScript. Designed AWS CodePipeline CI/CD pipelines for smooth deployment. Engineered a scalable backend in Django deployed on AWS Elastic Beanstalk.",
    technologies: [
      "TypeScript",
      "Python",
      "Django",
      "AWS",
      "AWS CodePipeline",
      "AWS Elastic Beanstalk",
      "CSS",
    ],
    achievements: [
      "Built user authentication and onboarding system",
      "Designed CI/CD pipelines with AWS CodePipeline",
      "Engineered scalable Django backend on AWS Elastic Beanstalk",
    ],
    employmentType: "FULL_TIME",
    industry: "Technology",
  },
  {
    id: 7,
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
