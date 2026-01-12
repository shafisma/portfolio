"use client";

import { projects } from "@/app/data/projects";
import Image from "next/image";
import { GithubIcon, ExternalLinkIcon } from "../icons";
import { Code2, Star } from "lucide-react";
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

        // Parallax Effect for Image
        const imageContainer = card.querySelector(".project-image-container");
        if (imageContainer) {
          gsap.fromTo(imageContainer, 
            { y: 0 },
            {
              y: -50, // Move up as we scroll down
              scrollTrigger: {
                 trigger: card,
                 start: "top bottom",
                 end: "bottom top",
                 scrub: 1, // Smooth scrubbing
              }
            }
          );
        }
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
              Venture <span className="font-serif italic font-thin text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary normal-case">Showcase</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mt-6 mx-auto rounded-full" />
        </div>
        {/* Projects Stack */}
        <div ref={projectsRef} className="flex flex-col gap-24 md:gap-32">
          {projects.slice(0, 4).map((project) => {
            return (
              <div
                key={project.name}
                className="project-card group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                
                {/* Info Side (Left) */}
                <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 text-left">
                   {/* Project Title with Dash */}
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-1 bg-accent rounded-full" />
                      <h3 className="text-4xl md:text-5xl font-bold text-white">{project.name}</h3>
                   </div>

                   <p className="text-gray-400 text-lg leading-relaxed">
                      {project.description}
                   </p>

                   {/* Features / Outcome List */}
                   <div className="flex flex-col gap-3 my-4">
                      {project.outcome && (
                        <div className="flex items-start gap-3">
                           <Star className="w-5 h-5 text-accent shrink-0 mt-1" />
                           <p className="text-gray-300">{project.outcome}</p>
                        </div>
                      )}
                       <div className="flex items-start gap-3">
                           <Code2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                           <p className="text-gray-300">{project.role || "Full Stack Development"}</p>
                        </div>
                   </div>

                   {/* Tech Stack Buttons */}
                   <div className="flex flex-wrap gap-3 mt-2">
                      {project.tech?.map((tech) => (
                        <div 
                          key={tech} 
                          className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-gray-300 text-sm font-medium flex items-center gap-2 hover:border-accent/50 transition-colors cursor-default"
                        >
                          {/* We don't have specific icons mapped, so we use a generic dot or nothing for now */}
                           <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {tech}
                        </div>
                      ))}
                   </div>

                </div>

                {/* Visual Side (Right) */}
                <div className="lg:col-span-7 relative order-1 lg:order-2">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full rounded-3xl border border-white/10 overflow-hidden bg-neutral-900/50 group-hover:border-accent/30 transition-all duration-500">
                      {/* Background Gradient Blob */}
                      <div className="absolute -inset-4 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.name}
                          fill
                          unoptimized
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                           <span className="text-white/10 font-black text-4xl">{project.name}</span>
                        </div>
                      )}

                      {/* Visit Project Overlay Button */}
                       <a 
                        href={project.weburl || project.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]"
                      >
                         <div className="relative group/btn">
                            <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-all text-white" />
                            <div className="relative h-32 w-32 rounded-full border border-white/20 bg-neutral-900/90 backdrop-blur-md flex items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <ExternalLinkIcon className="w-8 h-8 text-white" />
                                {/* Circular Text could go here if we had a component for it */}
                            </div>
                         </div>
                      </a>
                  </div>

                  {/* External Links below image for mobile/easy access */}
                   <div className="flex gap-4 mt-6 justify-end">
                      <a 
                        href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                         <GithubIcon className="w-5 h-5" />
                         <span>Source</span>
                      </a>
                      <a 
                         href={project.weburl || project.url}
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                         <ExternalLinkIcon className="w-5 h-5" />
                         <span>Live Demo</span>
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
