import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BioSoundSCape",
      date: "Spring 2025",  
      role: "Computer Vision Researcher",
      category: "Computer Vision Project",
      image: "https://xptrglblnutotevffhpd.supabase.co/storage/v1/object/public/temp//Land-Cover.png",
      url: "https://github.com/sameerkhansf/BioSoundSCape_SSU_Computer_Science",
    },
    {
      id: 2,
      title: "DFA/NFA Builder",
      date: "Fall 2024",
      role: "Automata Theory Project",
      category: "Automata Theory",
      image: "https://xptrglblnutotevffhpd.supabase.co/storage/v1/object/public/temp//JflapAutomatoBuilder.png",
      url: "https://github.com/sameerkhansf/JFLAPAutomataBuilder/tree/bb307977f4c3b30ead8571a1dd8c2f32c864f558",
    },
    {
      id: 3,
      title: "C++ Interpreter",
      date: "Spring 2025",
      role: "C++ Compiler Project",
      category: "C++",
      image: "https://xptrglblnutotevffhpd.supabase.co/storage/v1/object/public/temp//C++%20Interpreter.jpg",
      url: "https://github.com/sameerkhansf/Interpreter",
    },
    {
      id: 4,
      title: "Expense Tracker Application",
      date: "Dec 2024",
      role: "Full Stack Developer",
      category: "Web Application",
      image: "https://xptrglblnutotevffhpd.supabase.co/storage/v1/object/public/temp//ExpenseTracker.png",
      url: "https://expense-tracker-mocha-three.vercel.app",
    },
    {
      id: 5,
      title: "See more projects",
      date: "View all projects",
      role: "Github",
      category: "Github",
      image: "https://xptrglblnutotevffhpd.supabase.co/storage/v1/object/public/temp//github.jpg",
      url: "https://github.com/sameerkhansf",
    }

  ];

  return (
    <AnimatedSection id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="flex flex-col items-center gap-3 md:flex-row md:overflow-x-auto md:gap-4 md:pb-4">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[320px] md:flex-shrink-0 bg-[rgb(252,252,252)] dark:bg-gray-800 rounded-2xl border border-[rgba(18,18,18,0.07)] dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Mobile Layout */}
            <div className="flex flex-col items-start gap-2 p-4 md:hidden">
              {/* Project image above */}
              <div className="w-10 h-10 rounded-full overflow-hidden mb-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="framer-heading mb-1">{project.title}</h3>
              {/* Info row */}
              <div
                className="flex items-center gap-6 text-xs"
                style={{ color: "rgb(126, 126, 126)" }}
              >
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                    <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                  </svg>
                  <span>{project.date.split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <circle cx="10" cy="7" r="4" />
                    <path d="M10 11s-4 4-4 6a4 4 0 008 0c0-2-4-6-4-6z" />
                  </svg>
                  <span>{project.role.split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  <span>
                    {project.category.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex md:flex-col md:gap-1 md:p-1 md:h-full">
              {/* Large project image */}
              <div
                className="rounded-xl overflow-hidden shadow-sm border border-white/10"
                style={{
                  borderRadius: "12px",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 28px 0px",
                }}
              >
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content below image */}
              <div className="flex items-center gap-3 p-1">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="framer-heading mb-1 text-sm">
                    {project.title}
                  </h3>
                  <div
                    className="flex items-center gap-4 text-xs"
                    style={{
                      color:
                        "var(--extracted-r6o4lv, var(--token-4ed8c69a-230d-4c07-af1f-2e5cbb244f43, rgb(126, 126, 126)))",
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-3 h-3"
                        fill="currentColor"
                      >
                        <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                        <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                      </svg>
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-3 h-3"
                        fill="currentColor"
                      >
                        <circle cx="10" cy="7" r="4" />
                        <path d="M10 11s-4 4-4 6a4 4 0 008 0c0-2-4-6-4-6z" />
                      </svg>
                      {project.role}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-3 h-3"
                        fill="currentColor"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
