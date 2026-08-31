// Single source of truth for career facts. Every surface (homepage, /resume,
// JSON-LD, llms.txt bio) derives from this file — edit here, nowhere else.

export interface ResumeEntry {
  title: string;
  org: string;
  period: string; // display form, e.g. "Nov 2025 - Aug 2026"
  startDate: string; // ISO, for JSON-LD / sorting
  endDate: string; // ISO or "Present"
  location: string;
  bullets: string[];
}

export const identity = {
  name: "Sameer Khan",
  title: "Forward Deployed / AI Engineer",
  location: "San Francisco, CA",
  email: "khansam@sonoma.edu",
  site: "https://samkhan.net",
  linkedin: "https://linkedin.com/in/sameerkhansf",
  github: "https://github.com/sameerkhansf",
  twitter: "https://x.com/sameerkhan_sf",
};

export const summary =
  "Forward Deployed / AI Engineer with founder experience taking ambiguous customer and product problems from discovery through production. Built AI-commerce, bookkeeping, and venture-diligence systems across TypeScript/Next.js, Node.js, Python, LLM tool calling, and AWS; strongest in fast scoping, hands-on implementation, and translating technical systems into measurable business outcomes.";

export const experience: ResumeEntry[] = [
  {
    title: "Co-Founder & Founding Engineer",
    org: "agentShop",
    period: "Nov 2025 - Aug 2026",
    startDate: "2025-11",
    endDate: "2026-08",
    location: "San Francisco, CA",
    bullets: [
      "Co-founded agentShop, a commerce-intelligence platform for AI shopping; shipped Shopify, WordPress/WooCommerce, and Wix integrations plus an analytics dashboard for tracking AI-driven sales and visibility across ChatGPT, Gemini, and Perplexity.",
      "Took the Shopify product to the App Store, launched February 4, 2026, with AI PDP optimization, automated SEO, revenue attribution, AI revenue audits, and AI-shopping recommendation tracking.",
      "Shipped product capabilities for share-of-recommendation tracking, product-data enrichment, AI experimentation, competitor visibility, and linking AI exposure to downstream conversions.",
    ],
  },
  {
    title: "Portfolio Technology Analyst",
    org: "MARL Accelerator",
    period: "Jan 2025 - Jul 2025",
    startDate: "2025-01",
    endDate: "2025-07",
    location: "Remote",
    bullets: [
      "Conducted technical and strategic diligence on 500+ early-stage startup applications, owning the process from first call through final technical assessment.",
      "Built and deployed an AI-powered Analyst Agent that automated initial diligence and generated investment memos aligned with MARL Fund III's thesis, reducing analyst hours per deal by 70%+.",
      "Evaluated technical feasibility, architecture, team execution, and AI/product defensibility from incomplete data and unfamiliar codebases under time pressure.",
    ],
  },
  {
    title: "Software Developer, AI Bookkeeping",
    org: "PomJuice",
    period: "Mar 2025 - May 2025",
    startDate: "2025-03",
    endDate: "2025-05",
    location: "San Francisco, CA",
    bullets: [
      "Architected “Books Done Right,” an AI bookkeeping application using Next.js, React, Node.js, Python, LLM tool calling, and the QuickBooks API.",
      "Implemented an LLM-based natural-language interface that reduced manual bookkeeping effort by 80% while achieving 95%+ classification accuracy.",
      "Translated bookkeeping workflows and edge cases into model, prompt, API, and UI behavior for non-technical users.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    org: "CmdTower",
    period: "Apr 2024 - Aug 2024",
    startDate: "2024-04",
    endDate: "2024-08",
    location: "San Francisco, CA",
    bullets: [
      "Built a vertical SaaS platform with TypeScript-based onboarding and authentication, a Django backend on AWS Elastic Beanstalk, and AWS CodePipeline CI/CD for deployment.",
    ],
  },
];

export const research = [
  {
    title: "Explainable AI for Brain Tumor Diagnosis",
    org: "MESA Research Program, Sonoma State University",
    bullets: [
      "Built and evaluated CNN image-classification models (VGG16, VGG19, ResNet-50, MobileNet) on the Br-H35 brain-tumor dataset; applied LIME, SHAP, and Grad-CAM for interpretability and evaluated performance with AUC-ROC curves and confusion matrices.",
    ],
  },
];

export const education = [
  {
    school: "Sonoma State University",
    degree: "B.S. Computer Science",
    period: "Aug 2023 - May 2025",
    location: "Rohnert Park, CA",
    notes: [
      "Graduated with Honors; International Student Scholarship recipient (May 2023).",
      "Relevant coursework: Database Systems, Data Structures & Algorithms, Computer Architecture, Software Design & Development, Computer Networking, Analysis of Algorithms.",
    ],
  },
  {
    school: "City College of San Francisco",
    degree: "A.S. Computer Science",
    period: "Aug 2021 - May 2023",
    location: "San Francisco, CA",
    notes: [],
  },
];

export const skills: { group: string; items: string }[] = [
  {
    group: "AI / ML",
    items:
      "LLM integration, prompt engineering, tool calling, RAG, TensorFlow, PyTorch, LIME, SHAP, Grad-CAM",
  },
  {
    group: "Frontend",
    items: "React, Next.js, TypeScript, Tailwind CSS, HTML/CSS",
  },
  {
    group: "Backend",
    items: "Node.js, Python, Java, Django, Express.js, REST APIs, QuickBooks API",
  },
  {
    group: "Cloud & Infra",
    items: "AWS (Certified Developer), Docker, CI/CD, MongoDB, PostgreSQL, Vercel",
  },
  {
    group: "Ways of working",
    items:
      "Customer discovery, technical scoping under ambiguity, technical diligence, executive communication, ROI framing, Git, Agile",
  },
];
