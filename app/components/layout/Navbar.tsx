"use client";

import { useState, useEffect } from "react";

const sections = ["about", "projects", "skills", "contact"];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -35% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (section: string) => {
    // setActiveSection(section); // Let the observer handle the state update
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div className="max-w-5xl mx-auto glass rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all hover:bg-black/80">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              className="text-lg sm:text-xl font-black tracking-tight text-white hover:text-accent transition-colors uppercase shrink-0"
            >
              shafi<span className="text-accent">.</span>
            </a>
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className={`relative capitalize text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeSection === section
                      ? "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
