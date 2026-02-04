"use client";

import { projects } from "@/app/data/projects";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Command } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "../layout";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const listRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const getProjectDimensions = (index: number | null) => {
    if (index === null) return { width: 0, height: 0 };
    const project = projects[index];
    const isMobile = project.tech?.includes("Flutter") || project.role?.includes("Mobile");
    
    // Mobile: Taller, narrower
    // Web: Wider, shorter
    return isMobile 
      ? { width: 280, height: 620 } 
      : { width: 440, height: 320 };
  };

  // Calculate safe position for preview card
  const getPreviewPosition = () => {
    if (typeof window === "undefined" || hoveredProject === null) return { left: 0, top: 0 };
    
    const { width, height } = getProjectDimensions(hoveredProject);
    const padding = 20; // safe area
    
    let left = cursorPos.x + 40; // Default: to the right
    let top = cursorPos.y - (height / 2); // Default: centered vertically

    // Flip to left if too close to right edge
    if (left + width + padding > window.innerWidth) {
      left = cursorPos.x - width - 40;
    }
    
    // Constrain horizontal to left edge
    if (left < padding) left = padding;

    // Constrain vertical
    if (top + height + padding > window.innerHeight) {
      top = window.innerHeight - height - padding;
    }
    if (top < padding) top = padding;

    return { left, top, right: undefined, bottom: undefined };
  };

  const { left, top, right, bottom } = getPreviewPosition();
  const activeDims = getProjectDimensions(hoveredProject);

  return (
    <>
    <AnimatedBackground />
    <section id="projects" className="relative py-24 bg-white text-black min-h-screen" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-16">
          <ArrowDownRight className="w-12 h-12 stroke-[1.5]" />
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tight">Projects</h2>
        </div>

        {/* Project List */}
        <div ref={listRef} className="flex flex-col border-t border-black">
          {projects.map((project, index) => (
            <div key={index}>
              {/* Mobile View */}
              <div className="md:hidden flex flex-col items-center border-b border-black py-16">
                 <h3 className="text-3xl font-normal mb-8 text-center">{project.name}</h3>
                 
                 <Link 
                    href={project.url || project.weburl || "#"}
                    target="_blank"
                    className="relative w-full aspect-[7/8] bg-[#2C5D3F] rounded-lg overflow-hidden shadow-xl"
                 >
                    {project.image ? (
                        <Image 
                            src={project.image} 
                            alt={project.name}
                            fill
                            className="object-contain p-6 rounded-[2rem]"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/50">No Image</div>
                    )}
                    
                    <div className="absolute bottom-6 left-6 z-10 flex flex-col items-start gap-2">
                         <span className="text-white text-3xl font-bold tracking-tight shadow-black/50 drop-shadow-md">{project.name}</span>
                         <div className="flex flex-wrap gap-2">
                            {project.tech?.slice(0, 3).map((t) => (
                                <span key={t} className="px-2 py-0.5 border border-white/40 rounded text-[10px] uppercase font-bold text-white tracking-wider backdrop-blur-sm">
                                   {t}
                                </span>
                            ))}
                        </div>
                    </div>
                 </Link>
              </div>

              {/* Desktop View */}
              <Link
                href={project.url || project.weburl || "#"}
                target="_blank"
                className="hidden md:flex group relative flex-col sm:flex-row items-center justify-between p-8 sm:p-12 border-b border-black md:hover:bg-black md:hover:text-white transition-colors duration-300"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-center gap-6 sm:gap-12 w-full">
                   <div className="shrink-0 p-3">
                      <Command className="w-5 h-5" />
                   </div>
                   
                   <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 text-xl sm:text-3xl font-normal w-full">
                      <span className="shrink-0">{project.name}</span>
                      <span className="hidden sm:inline-block w-8 h-px bg-current opacity-50"></span>
                      <span className="text-base sm:text-xl opacity-60 font-light">
                        {project.role} {project.tech && `, ${project.tech.slice(0, 2).join(", ")}`}
                      </span>
                   </div>
                </div>

                <div className="mt-6 sm:mt-0 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                  <span className="inline-flex items-center px-6 py-3 border border-current rounded-md text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-colors">
                    Contact for details
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Preview */}
      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            className="fixed pointer-events-none z-50 overflow-hidden bg-[#F3F2F0] rounded-sm shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            style={{ 
                width: activeDims.width,
                height: activeDims.height 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              left,
              top,
              right,
              bottom
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Image Area */}
            <div className="relative h-[75%] w-full bg-zinc-200">
               {projects[hoveredProject].image ? (
                   <Image 
                     src={projects[hoveredProject].image!} 
                     alt={projects[hoveredProject].name}
                     fill
                     className="object-cover"
                   />
               ) : (
                   <div className="w-full h-full flex items-center justify-center text-zinc-400">No Image</div>
               )}
            </div>

            {/* Content Area */}
            <div className="h-[25%] px-5 flex flex-col justify-center gap-2">
                <h3 className="text-black font-bold text-lg">{projects[hoveredProject].name}</h3>
                <div className="flex flex-wrap gap-2">
                    {projects[hoveredProject].tech?.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 border border-zinc-300 rounded text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                           {t}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
}
