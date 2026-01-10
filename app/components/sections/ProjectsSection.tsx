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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-accent/20 bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6 rounded-full">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-lg sm:text-xl">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card p-6 group flex flex-col h-full hover:bg-white/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <ExternalLinkIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${languageColors[project.language] || "bg-gray-800 text-gray-300 border-gray-700"}`}>
                  {project.language}
                </span>
                {project.stars > 0 && (
                  <div className="flex items-center gap-1.5 text-gray-400 font-bold">
                    <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                )}
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
            <span className="text-white font-bold text-lg uppercase">View All Repositories</span>
            <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
