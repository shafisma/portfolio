import { projects } from "@/app/data/projects";
import { GithubIcon, ExternalLinkIcon, StarIcon } from "../icons";

const languageColors: Record<string, string> = {
  Python: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  JavaScript: "bg-yellow-400/20 text-yellow-200 border-yellow-400/30",
  "C++": "bg-blue-600/20 text-blue-200 border-blue-600/30",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 border border-accent/20 bg-accent/10 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base sm:text-xl">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card p-6 flex flex-col h-full hover:bg-white/5 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header: Type icon & Link */}
              <div className="flex items-start justify-between mb-6">
                 <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{project.role || "Developer"}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                   <ExternalLinkIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                 </div>
              </div>

              {/* Value / Outcome */}
              <div className="mb-6 flex-grow">
                 <p className="text-white font-medium text-lg mb-2">
                   {project.outcome || project.description}
                 </p>
                 <p className="text-sm text-gray-500 line-clamp-2">
                   {project.description}
                 </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(project.tech || [project.language]).map(t => (
                  <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer: Metric */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                 <div className="flex items-center gap-2">
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1.5 text-gray-300 font-bold bg-white/5 px-2 py-1 rounded text-xs">
                        <StarIcon className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.metric && (
                       <span className="text-xs font-bold text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-900/30">
                         {project.metric}
                       </span>
                    )}
                 </div>
                 <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors flex items-center gap-1">
                   View Code <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </span>
              </div>
            </a>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/shafisma?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            <GithubIcon className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg uppercase">View All Projects</span>
            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
