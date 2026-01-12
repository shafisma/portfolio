"use client";

import React from "react";
import Image from "next/image";

export function CTASection() {
  return (
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
            {/* Outer Ambient Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full animate-pulse" />
            
            {/* Wave Layers */}
            <div className="absolute inset-0 rounded-full overflow-hidden rotate-0">
                {/* Primary Wave - Blue/Purple */}
                <div className="absolute -inset-[50%] bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_60deg,transparent_120deg,#8b5cf6_180deg,transparent_240deg,#3b82f6_300deg,transparent_360deg)] animate-[spin_4s_linear_infinite] blur-[20px] opacity-70" />
                
                {/* Secondary Wave - Cyan/Pink (Counter-rotating) */}
                <div className="absolute -inset-[50%] bg-[conic-gradient(from_180deg,transparent_0deg,#06b6d4_60deg,transparent_120deg,#ec4899_180deg,transparent_240deg,#06b6d4_300deg,transparent_360deg)] animate-[spin_5s_linear_infinite_reverse] blur-[20px] opacity-60 mix-blend-screen" />
            
                 {/* Tertiary fast spinner for movement details */}
                 <div className="absolute -inset-[50%] bg-[conic-gradient(from_90deg,transparent_0deg,#ffffff_30deg,transparent_180deg)] animate-[spin_2s_linear_infinite] blur-[15px] opacity-30" />
            </div>

            {/* Core Mask (creates the ring effect) */}
            <div className="absolute inset-[2px] bg-[#0a0a0a] rounded-full flex items-center justify-center z-10 box-border border border-white/5">
                {/* Inner subtle glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-cyan-500/10 animate-pulse" />
                
                {/* Center dot/content */}
                <div className="w-4/5 h-4/5 rounded-full border border-white/5 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] bg-black/40 backdrop-blur-sm" />
            </div>
            
            {/* Shiny overlay on top */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
