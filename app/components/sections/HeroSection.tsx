import { GithubIcon, XIcon, InstagramIcon } from "../icons";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Hi, I&apos;m </span>
          <span className="relative">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Shafi
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C50 4 150 4 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                  <stop offset="0%" stopColor="#818cf8"/>
                  <stop offset="100%" stopColor="#c084fc"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
          Passionate about crafting elegant solutions through code.
          <br className="hidden sm:block" />
          Building the future, one commit at a time.
        </p>

        {/* Social links */}
        <div className="flex gap-3 justify-center mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://github.com/shafisma"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://x.com/Shafigrate"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
            aria-label="X (Twitter)"
          >
            <XIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/sh4fi_dx/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium text-white hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View My Work
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card rounded-xl font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
