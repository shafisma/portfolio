"use client";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = ["about", "projects", "skills", "contact"];

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div className="max-w-5xl mx-auto glass rounded-2xl px-3 py-2 sm:px-6 sm:py-3">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="hidden sm:block text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors"
            >
              shafi<span className="text-indigo-400">.</span>
            </a>
            <div className="flex items-center gap-1 w-full sm:w-auto justify-center sm:justify-end overflow-x-auto no-scrollbar">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative capitalize text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    activeSection === section
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
