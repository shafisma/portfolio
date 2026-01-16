"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
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
      }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Main heading */}
        <h1 ref={titleRef} className="text-8xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black mb-6 sm:mb-8 tracking-tighter leading-[0.95] sm:leading-[0.9] text-white">
          LABS
          <span className="block capitalize mt-2 text-xl tracking-[0.3em] sm:text-2xl md:text-2xl font-medium text-[#6A6A6B]">
            EXPERIMENTAL PLAYGROUND
          </span>
        </h1>

        {/* Subtitle */}
        <div ref={subtitleRef} className="flex flex-col items-center gap-6 mb-8 sm:mb-12 px-2">
          <span className="font-serif italic md:text-4xl lg:text-6xl sm:text-4xl text-white">where ideas come alive.</span>
        </div>
      </div>
    </section>
  );
}
