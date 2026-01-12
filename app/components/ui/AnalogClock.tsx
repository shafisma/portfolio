"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function AnalogClock() {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = now.getHours() + minutes / 60;

      // Rotate the containers, not the hands themselves
      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${seconds * 6}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutes * 6}deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hours * 15}deg)`;
      }

      requestAnimationFrame(updateClock);
    };

    const animationId = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[6px] border-[#1a1a1a] ring-1 ring-white/10 group select-none">
      
      {/* Clock Face Image */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <Image 
          src="/clockDial.avif" 
          alt="Clock Dial" 
          fill
          className="object-cover opacity-90"
        />
      </div>

      {/* Hands Container - Centered Overlay */}
      <div className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none">
            
            {/* Center Pin Cap */}
            <div className="absolute z-[60] w-2.5 h-2.5 bg-[#e5e5e5] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)] border border-gray-400" />

            {/* Hour Hand Container */}
            <div 
              ref={hourRef} 
              className="absolute top-1/2 left-1/2 z-30 w-0 h-0"
            >
                {/* Visual Hour Hand - Positioned above pivot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[70px] bg-white rounded-md shadow-lg border border-gray-300 pb-4">
                     {/* Lume Fill */}
                     <div className="absolute inset-x-[3px] top-[4px] bottom-3 bg-[#cceecc] opacity-90 rounded-sm" />
                </div>
            </div>

            {/* Minute Hand Container */}
            <div 
              ref={minuteRef} 
              className="absolute top-1/2 left-1/2 z-40 w-0 h-0"
            >
                 {/* Visual Minute Hand */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-[100px] bg-white rounded-md shadow-lg border border-gray-300 pb-4">
                     {/* Lume Fill */}
                     <div className="absolute inset-x-[3px] top-[4px] bottom-3 bg-[#cceecc] opacity-90 rounded-sm" />
                 </div>
            </div>

            {/* Second Hand Container */}
            <div 
              ref={secondRef} 
              className="absolute top-1/2 left-1/2 z-50 w-0 h-0"
            >
                {/* Visual Second Hand */}
                <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 w-[1.5px] h-[125px] pointer-events-none">
                    {/* Main Needle */}
                    <div className="absolute bottom-[25px] left-0 right-0 top-0 bg-orange-600 shadow-sm" />
                    {/* Tail */}
                    <div className="absolute bottom-0 left-[-0.25px] right-[-0.25px] h-[25px] bg-orange-600" />
                    {/* Counterbalance Circle */}
                    <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full border-[1.5px] border-orange-600 bg-black" />
                </div>
            </div>
      </div>
    </div>
  );
}
