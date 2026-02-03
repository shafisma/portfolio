"use client";

import React from "react";
import Image from "next/image";
import { AnimatedBackground } from "../layout";

export function CTASection() {
  return (
    <>
              <AnimatedBackground />
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Avatar + Text */}
        <div className="flex flex-col gap-2 md:gap-4 z-10">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="https://github.com/shafisma.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-5xl md:text-8xl font-medium text-white tracking-tighter">
              Let's create
            </h2>
          </div>
          <h2 className="text-5xl md:text-8xl font-medium text-zinc-600 tracking-tighter pl-2 md:pl-24">
            something real.
          </h2>
        </div>

        {/* Right Side: Siri-like Glowing Orb */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mt-8 md:mt-0 flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full" />
            
            {/* Animated Gradients Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden isolate z-0">
                {/* Rotating Color Mesh */}
                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-100 blur-[30px]">
                     {/* Blue blob */}
                    <div className="absolute top-0 right-[20%] w-[70%] h-[70%] bg-[#3b82f6] rounded-full mix-blend-screen opacity-80" />
                    {/* Purple blob */}
                    <div className="absolute bottom-0 left-[20%] w-[70%] h-[70%] bg-[#8b5cf6] rounded-full mix-blend-screen opacity-80" />
                    {/* Cyan blob */}
                    <div className="absolute top-[40%] left-0 w-[60%] h-[60%] bg-[#06b6d4] rounded-full mix-blend-screen opacity-80" />
                </div>
                
                 {/* Second Counter-Rotating Layer for Complexity */}
                 <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite_reverse] opacity-80 blur-[20px] mix-blend-overlay">
                    <div className="absolute top-0 left-[30%] w-[60%] h-[60%] bg-[#ec4899] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[20%] right-0 w-[60%] h-[60%] bg-[#6366f1] rounded-full mix-blend-screen" />
                 </div>
            </div>

            {/* Inner Mask to create the "Ring" shape */}
            <div className="absolute inset-[4px] bg-[#0a0a0a] rounded-full z-10 flex items-center justify-center border border-white/5 box-border">
                {/* Secondary inner reflection */}
                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent opacity-20" />
            </div>

             {/* Surface Glare */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] z-20 pointer-events-none ring-1 ring-white/10" />
        </div>
      </div>
    </section>
    </>
  );
}
