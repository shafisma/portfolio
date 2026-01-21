"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

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

    tl.from(".char", {
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
    })
      .to(
        shimmerRef.current,
        {
          x: "100%",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.6"
      );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="relative overflow-hidden p-4">
        <h1
          className="text-4xl sm:text-4xl md:text-9xl font-black tracking-tighter text-white uppercase overflow-hidden"
        >
          {"Shafiuzzaman".split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>
        <div
          ref={shimmerRef}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        />
      </div>
    </div>
  );
}
