"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "about", href: "/#about" },
  { name: "projects", href: "/#projects" },
  { name: "skills", href: "/#skills" },
  { name: "contact", href: "/#contact" },
  { name: "labs", href: "/labs" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      if (pathname.startsWith("/labs")) setActiveSection("labs");
      return;
    }

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

    // Observe Hero explicitly
    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    navItems.forEach((item) => {
      if (item.href.startsWith("/#")) {
        const sectionId = item.href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHome, pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (isHome && item.href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.href.replace("/#", "");
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLightMode = activeSection === "hero" || (isHome && activeSection === "");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div 
          className={`max-w-5xl mx-auto rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 ${
            isLightMode 
              ? "bg-white/70 backdrop-blur-md border border-black/5 shadow-sm hover:bg-white/90" 
              : "glass hover:bg-black/80"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className={`text-lg sm:text-xl font-black tracking-tight transition-colors uppercase shrink-0 ${
                isLightMode ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              shafi<span className="text-accent">.</span>
            </Link>
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`relative capitalize text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.name
                      ? isLightMode
                        ? "text-white bg-black shadow-lg shadow-black/20"
                        : "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : isLightMode
                        ? "text-black/70 hover:text-black hover:bg-black/5"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
