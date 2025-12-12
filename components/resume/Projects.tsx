import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { projects as projectsData } from "@/lib/experiences";

const Projects = () => {
  // Combine project data with the "See more" card
  const projects = [
    ...projectsData,
    {
      id: 5,
      title: "See more projects",
      date: "View all projects",
      dateISO: undefined,
      role: "Github",
      category: "Github",
      description: "View all projects and contributions on GitHub",
      technologies: [],
      image: "/projects/github.jpg",
      url: "https://github.com/sameerkhansf",
    },
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
            className="w-full md:w-[320px] md:flex-shrink-0 bg-card rounded-2xl border border-border hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Mobile Layout */}
            <div className="flex flex-col items-start gap-2 p-4 md:hidden">
              {/* Project image above */}
              <div className="w-10 h-10 rounded-full overflow-hidden mb-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="framer-heading mb-1">{project.title}</h3>
              {/* Info row */}
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                    <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                  </svg>
                  {project.dateISO ? (
                    <time dateTime={project.dateISO}>{project.date.split(" ").slice(0, 2).join(" ")}</time>
                  ) : (
                    <span>{project.date.split(" ").slice(0, 2).join(" ")}</span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
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
                    aria-hidden="true"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  <span>
                    {project.category.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
              </div>
              {project.description && project.id !== 5 && (
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                  {project.description}
                </p>
              )}
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
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content below image */}
              <div className="flex items-center gap-3 p-1">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="framer-heading mb-1 text-sm">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-3 h-3"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17 4h-4V2a1 1 0 00-2 0v2H9V2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM4 16V7h12v9H4z" />
                        <path d="M6 9h2v2H6zM9 9h2v2H9zM12 9h2v2h-2zM6 12h2v2H6zM9 12h2v2H9zM12 12h2v2h-2z" />
                      </svg>
                      {project.dateISO ? (
                        <time dateTime={project.dateISO}>{project.date}</time>
                      ) : (
                        project.date
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 20 20"
                        className="w-3 h-3"
                        fill="currentColor"
                        aria-hidden="true"
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
                        aria-hidden="true"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      {project.category}
                    </div>
                  </div>
                  {project.description && project.id !== 5 && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  )}
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
