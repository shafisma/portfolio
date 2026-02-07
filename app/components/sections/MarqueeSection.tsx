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
      className="relative z-10 w-full h-[30vh] sm:h-[40vh] overflow-hidden bg-transparent flex items-center justify-center -mt-10 sm:-mt-20 pointer-events-none"
    >
        <div className="absolute w-[810%] sm:w-[220%] aspect-square flex items-center justify-center translate-y-[42%] sm:translate-y-[52%]">
             <svg 
                viewBox="0 0 1000 1000" 
                className="w-full h-full animate-[spin_60s_linear_infinite]"
                style={{ transformOrigin: 'center center' }}
             >
                <defs>
                    <path 
                        id="circlePath" 
                        d="M 500, 500 m -500, 0 a 500,500 0 1,1 1000,0 a 500,500 0 1,1 -1000,0" 
                    />
                </defs>
                <text fill="currentColor" className="text-[2.2rem] sm:text-[4rem] font-black uppercase text-white tracking-widest">
                    <textPath 
                        href="#circlePath" 
                        startOffset="0%"
                        className="fill-white"
                        textLength="3140" // Approximate circumference (2 * pi * 500)
                    >
                         SELECTED&nbsp;PROJECTS&nbsp;<tspan className="fill-green-500 font-bold">&nbsp;-&nbsp;</tspan>&nbsp;SELECTED&nbsp;PROJECTS&nbsp;<tspan className="fill-green-500 font-bold">&nbsp;-&nbsp;</tspan>&nbsp;SELECTED&nbsp;PROJECTS&nbsp;<tspan className="fill-green-500 font-bold">&nbsp;-&nbsp;</tspan>&nbsp;SELECTED&nbsp;PROJECTS&nbsp;<tspan className="fill-green-500 font-bold">&nbsp;-&nbsp;</tspan>&nbsp;SELECTED&nbsp;PROJECTS&nbsp;<tspan className="fill-green-500 font-bold">&nbsp;-&nbsp;</tspan>&nbsp;SELECTED&nbsp;PROJECTS&nbsp;<tspan className="fill-green-500 font-bold">&nbsp;-&nbsp;</tspan>&nbsp;
                    </textPath>
                </text>
             </svg>
        </div>
        
        {/* Optional: Add a center element or just leave it as a background effect */}
    </section>
  );
}
