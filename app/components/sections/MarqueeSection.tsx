"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Rotate from 90 to 450 (360 degrees) infinitely
    gsap.fromTo(rotationRef.current, 
      { rotation: 90 },
      {
        rotation: 450,
        duration: 120, // Slow rotation
        ease: "none",
        repeat: -1,
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full h-[40vh] sm:h-[50vh] overflow-hidden bg-transparent flex items-center justify-center pointer-events-none -my-20 sm:-my-32 mix-blend-difference"
    >
        <div 
          ref={rotationRef}
          className="absolute top-[5vh] left-1/2 -translate-x-1/2 w-[300%] sm:w-[150%] aspect-square flex items-center justify-center transform-gpu will-change-transform"
        >
             <svg 
                viewBox="0 0 1000 1000" 
                className="w-full h-full"
             >
                <defs>
                    {/* Circle centered at 500,500 with radius 500 */}
                    <path 
                        id="circlePath" 
                        d="M 500, 500 m -500, 0 a 500,500 0 1,1 1000,0 a 500,500 0 1,1 -1000,0" 
                    />
                </defs>
                <text fill="currentColor" className="text-[2.2rem] sm:text-[4rem] font-black uppercase text-white tracking-widest">
                    <textPath 
                        href="#circlePath" 
                        startOffset="0"
                        className="fill-white"
                        textLength="3141" // Full circumference
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
