"use client";

import { projects } from "@/app/data/projects";
import Image from "next/image";
import { GithubIcon, ExternalLinkIcon } from "../icons";
import { ArrowRight, Code2, Star } from "lucide-react";
import { cn } from "@/app/lib/utils";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Projects Animation
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 px-4 selection:bg-accent/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-24">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
              CRAFTING DIGITAL EXPERIENCES
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase relative z-10">
              Venture <span className="font-[family-name:var(--font-playfair)] italic font-thin text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary normal-case">Showcase</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mt-6 mx-auto rounded-full" />
        </div>

        {/* Projects Stack */}
        <div ref={projectsRef} className="flex flex-col gap-16 md:gap-32">
          {projects.slice(0, 4).map((project, index) => {
            // Determine layout direction based on index (even/odd)
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.name}
                className="project-card group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Visual Side (Mockup/Bento) */}
                <div className={cn(
                  "lg:col-span-7 relative order-2 lg:order-none",
                  isEven ? "lg:order-2" : "lg:order-1"
                )}>
                  {/* Image Container */}
                  <div className="relative aspect-video w-full rounded-2xl border-2 border-white/20 overflow-hidden bg-neutral-900 group-hover:border-accent/50 transition-colors duration-500">
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.name}
                          fill
                          unoptimized
                          className="object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                           <span className="text-white/10 font-black text-4xl">{project.name}</span>
                        </div>
                      )}
                  </div>
                </div>

                {/* Info Side */}
                <div className={cn(
                  "lg:col-span-5 flex flex-col gap-6 order-1 lg:order-none",
                  isEven ? "lg:order-1 text-left" : "lg:order-2 lg:text-right items-end"
                )}>
                   {/* Project Logo/Header */}
                   <div className={cn(
                     "flex items-center gap-4",
                     !isEven && "flex-row-reverse"
                   )}>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                         <Code2 className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                        <span className="text-sm text-gray-400 font-mono">{project.role || "Developer"}</span>
                      </div>
                   </div>

                   <p className={cn(
                     "text-gray-400 text-lg leading-relaxed",
                     !isEven && "lg:text-right"
                   )}>
                      {project.description}
                   </p>

                   {/* Tech Stack */}
                   <div className={cn(
                     "flex flex-wrap gap-2",
                     !isEven && "justify-end"
                   )}>
                      {project.tech?.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                   </div>
                  
                   {/* Highlight/Metric */}
                   <div className={cn(
                     "py-4 border-y border-white/5 w-full flex gap-8",
                     !isEven ? "justify-end" : "justify-start"
                   )}>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Outcome</p>
                          <p className="text-white font-medium">{project.outcome || "Successful Deployment"}</p>
                        </div>
                   </div>

                   {/* Actions */}
                   <div className={cn(
                     "flex gap-4 mt-2",
                     !isEven && "flex-row-reverse"
                   )}>
                      <a 
                        href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all"
                        aria-label="View Source on GitHub"
                      >
                         <GithubIcon className="w-5 h-5" />
                      </a>
                   </div>
                </div>

              </div>
            );
          })}
        </div>
        
        {/* Foot note */}
        <div className="mt-32 text-center">
            <p className="text-gray-500">
               And many more internal experiments...
            </p>
        </div>
      </div>
    </section>
  );
}
