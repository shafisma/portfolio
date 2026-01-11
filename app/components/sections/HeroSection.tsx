"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
    })
      .from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        skewY: 5,
      }, "-=0.4")
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      }, "-=0.6")
      .from(socialRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
      {/* Background glow effects - Commented out to use global AnimatedBackground
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      */}
      
      <div className="text-center max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Status badge */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1a1a1a] border border-white/10 mb-6 sm:mb-8 hover:bg-[#222] transition-all group cursor-default">
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-widest group-hover:text-white">Available for work</span>
        </div>

        {/* Main heading */}
        <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 tracking-tighter leading-[0.95] sm:leading-[0.9] text-white">
          Building&nbsp;
          <span className="font-serif italic font-normal text-white/90 pr-0 block sm:inline sm:pr-4">Software</span>
          <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-green-500">
            That actually works.
          </span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="flex flex-col items-center gap-6 mb-8 sm:mb-12 px-2">
          <p className="text-base sm:text-lg text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
            Focused on <span className="font-serif italic text-white">interfaces you can feel</span>. Previously shipped 6+ projects used by communities and teams.
          </p>
        </div>


        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="modern-button items-center justify-center inline-flex shadow-lg shadow-accent/20 w-full sm:w-auto py-3 sm:py-4 text-base sm:text-lg"
          >
            Start a project
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:-translate-y-1 hover:border-white/20 transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
