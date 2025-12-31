import { projects } from "@/app/data/projects";
import { GithubIcon, ExternalLinkIcon, StarIcon } from "../icons";

const languageColors: Record<string, string> = {
  Python: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  TypeScript: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "C++": "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <ExternalLinkIcon className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${languageColors[project.language] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                  {project.language}
                </span>
                {project.stars > 0 && (
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <StarIcon className="w-3.5 h-3.5 text-yellow-500" />
                    <span className="text-xs">{project.stars}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shafisma?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 glass-card rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors">View All Repositories</span>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
