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

        {/* Right Side: Glowing Orb */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mt-8 md:mt-0">
            {/* Core Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-[50px] rounded-full" />
            
            {/* The Ring */}
            <div className="absolute inset-0 rounded-full border-[1px] border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center">
                 <div className="w-[90%] h-[90%] rounded-full border-[1px] border-l-blue-500 border-t-purple-500 border-r-transparent border-b-transparent opacity-50 rotate-45" />
            </div>

            {/* Inner Ring */}
             <div className="absolute inset-4 rounded-full border border-white/5" />
        </div>
      </div>
    </section>
  );
}
