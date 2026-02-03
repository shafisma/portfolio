"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Initial cloned text for seamless loop logic if needed, 
    // but for scroll-driven, just moving it enough is fine.
    
    gsap.to(slider, {
      x: "-20%", // Move 20% to the left over the course of the scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Fade-in reveal
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-24 overflow-hidden">
      <div className="w-full border-y border-white/5 bg-white/5 backdrop-blur-sm -rotate-2 scale-110">
        <div ref={sliderRef} className="flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                Selected Projects
              </span>
              <span className="text-4xl sm:text-6xl text-accent">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
