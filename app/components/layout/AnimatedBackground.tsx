"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AnimatedBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate if the device has enough power (simple heuristic) and prevent main-thread blocking on load
    const ctx = gsap.context(() => {
      // Delay animation start slightly to prioritize LCP/TBT
      const t1 = gsap.to(blob1Ref.current, {
        x: "50vw",
        y: "50vh",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5 
      });
      
      const t2 = gsap.to(blob2Ref.current, {
        x: "-30vw",
        y: "-40vh",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
      
      {/* Animated Gradient Blobs */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
      />
      <div 
        ref={blob2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
                           linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80" />
    </div>
  );
}
