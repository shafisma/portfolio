"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: onFinish,
        });
      },
    });

    // Initial entrance
    tl.from(cardRef.current, {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      // Pulsing dot animation (simulated loading time)
      .to(dotRef.current, {
        scale: 1.5,
        opacity: 0.6,
        duration: 0.6,
        repeat: 3, 
        yoyo: true,
        ease: "power1.inOut",
      });
      
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 backdrop-blur-xl"
    >
      <div 
        ref={cardRef}
        className="bg-white rounded-md px-6 py-3 flex items-center gap-3 shadow-2xl shadow-white/5"
      >
        <div 
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-indigo-500"
        />
        <span className="text-zinc-900 font-medium tracking-tight text-lg">
          Loading
        </span>
      </div>
    </div>
  );
}
