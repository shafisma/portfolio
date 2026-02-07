"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  useGSAP(() => {
    gsap.to(textPathRef.current, {
      attr: { startOffset: 1200 }, // Animate along the path
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full h-[50vh] sm:h-[80vh] overflow-hidden bg-black/5 flex items-center justify-center"
    >
        <div className="absolute w-[200%] sm:w-[120%] aspect-square flex items-center justify-center translate-y-[30%] sm:translate-y-[40%]">
             <svg 
                viewBox="0 0 1000 1000" 
                className="w-full h-full animate-[spin_60s_linear_infinite]"
                style={{ transformOrigin: 'center center' }}
             >
                <defs>
                    <path 
                        id="circlePath" 
                        d="M 500, 500 m -350, 0 a 350,350 0 1,1 700,0 a 350,350 0 1,1 -700,0" 
                    />
                </defs>
                <text fill="currentColor" className="text-[4rem] sm:text-[5rem] font-black uppercase text-white tracking-widest">
                    <textPath 
                        href="#circlePath" 
                        startOffset="0%"
                        className="fill-white"
                        textLength="2200" // Approximate circumference
                    >
                         SELECTED PROJECTS <tspan className="fill-green-500 font-bold">-</tspan> SELECTED PROJECTS <tspan className="fill-green-500 font-bold">-</tspan> SELECTED PROJECTS <tspan className="fill-green-500 font-bold">-</tspan> SELECTED PROJECTS <tspan className="fill-green-500 font-bold">-</tspan> 
                    </textPath>
                </text>
             </svg>
        </div>
        
        {/* Optional: Add a center element or just leave it as a background effect */}
    </section>
  );
}
