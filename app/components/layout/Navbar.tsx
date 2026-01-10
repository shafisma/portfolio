"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = ["about", "projects", "skills", "contact"];

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-element", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div className="max-w-5xl mx-auto glass rounded-full px-3 py-2 sm:px-6 sm:py-3 transition-all hover:bg-black/80">
          <div className="flex items-center justify-between">
            <a
              href="#"
              aria-label="Shafi Home"
              className="nav-element hidden sm:block text-xl font-black tracking-tight text-white hover:text-accent transition-colors uppercase"
            >
              shafi<span className="text-accent">.</span>
            </a>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end overflow-x-auto no-scrollbar">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`nav-element relative capitalize text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap group overflow-hidden ${
                    activeSection === section
                      ? "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10">{section}</span>
                  {activeSection !== section && (
                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
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
