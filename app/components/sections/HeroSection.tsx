"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedBackground } from "../layout";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Scroll snapping for Hero -> About transition
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top", 
      snap: {
        snapTo: 1, // Snap to the end point (scrolling past the hero)
        duration: { min: 0.5, max: 1 },
        delay: 0.1,
        ease: "power2.inOut"
      }
    });

    tl.from(badgeRef.current, {
      y: -20,
      autoAlpha: 0,
      duration: 0.8,
    })
      .from(titleRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 1,
        skewY: 5,
      }, "-=0.4")
      .from(subtitleRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 1,
      }, "-=0.6")
      .from(socialRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(mouseRef.current, {
        autoAlpha: 0,
        duration: 1,
      }, "-=1");
  }, { scope: containerRef });

  return (
    <>
    <section id="hero" ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden bg-[#EBEBEB]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
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
        <h1 ref={titleRef} className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 tracking-tighter leading-[0.95] sm:leading-[0.9] text-black">
          Building&nbsp;
          <span className="font-serif italic font-normal text-black/90 pr-0 block sm:inline sm:pr-4">Software</span>
          <span className="block mt-2 text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-green-500">
            That actually works.
          </span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="flex flex-col items-center gap-6 mb-8 sm:mb-12 px-2">
          <p className="text-base sm:text-lg text-gray-600 font-medium max-w-lg mx-auto leading-relaxed">
            Focused on <span className="font-serif italic text-black">interfaces you can feel</span>. Previously shipped 6+ projects used by communities and teams.
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
            className="items-center justify-center inline-flex shadow-lg shadow-black/20 w-full sm:w-auto px-8 py-3 sm:py-4 text-base sm:text-lg bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:-translate-y-0.5"
          >
            Start a project
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black/5 border border-black/10 rounded-full text-black font-bold text-base sm:text-lg hover:bg-black/10 hover:-translate-y-1 hover:border-black/20 transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            View projects
          </a>
        </div>
      </div>

      <div ref={mouseRef} className="bg-[#1f1c1c11] absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-2 z-20">
        <Image 
          src="/mouse.png" 
          alt="Scroll Down" 
          width={40} 
          height={40} 
          className="w-10 h-auto opacity-100 bg-[#1f1c1c11]"
        />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 animate-bounce">
          Scroll Down
        </span>
      </div>
    </section>
    </>
  );
}
