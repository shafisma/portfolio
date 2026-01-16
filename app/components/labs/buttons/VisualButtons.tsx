"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// --- Liquid Metal Button ---
export const LiquidMetalButton = () => {
  return (
    <button className="relative group px-8 py-4 bg-gray-900 text-white font-bold rounded-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 group-hover:scale-110 transition-transform duration-500 ease-out" />
      <div className="absolute inset-0 opacity-50 filter blur-[20px] mix-blend-color-dodge">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
      </div>
      <span className="relative z-10 mix-blend-overlay">LIQUID</span>
      
      {/* Liquid blob effect simulated with CSS filters would go here (requires SVG filters in global CSS commonly) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
    </button>
  );
};

// --- Glass Button with real-ish refraction ---
export const GlassButton = () => {
  return (
    <div className="relative group">
        {/* Glow behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
        <button className="relative px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden">
            <span className="relative z-10 text-white font-semibold tracking-wide drop-shadow-md">GLASS</span>
            {/* Manual shine impl with transition */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </button>
    </div>
  );
};

// --- Noise Glitch Button ---
export const GlitchButton = () => {
  return (
    <button className="relative px-8 py-3 bg-black text-neon-green border border-green-500/50 font-mono tracking-wider overflow-hidden group hover:bg-green-900/10 transition-colors">
      <span className="relative z-10 group-hover:animate-pulse">GLITCH</span>
      
      {/* Glitch layers */}
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-green-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-75 mix-blend-screen" aria-hidden="true">
        GLITCH
      </span>
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-75 mix-blend-screen" aria-hidden="true">
        GLITCH
      </span>
    </button>
  );
};

// --- Space Bending Button ---
export const SpaceBendingButton = () => {
  return (
    <button className="relative group p-1 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 group-hover:blur-md transition-all duration-300" />
      <div className="relative px-8 py-3 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 shadow-2xl overflow-hidden">
         {/* Displacement trick using radial gradients moving */}
         <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-[2] group-hover:scale-100 duration-700" />
         <span className="relative z-10 text-white">WARP DRIVE</span>
      </div>
    </button>
  );
};

// --- Heat Wave ---
export const HeatWaveButton = () => {
  return (
    <button className="relative px-8 py-3 bg-orange-600 text-white font-bold rounded-lg overflow-hidden group hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] transition-shadow duration-300">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">HEAT</span>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 group-hover:h-full group-hover:opacity-0 transition-all duration-500 ease-in-out mix-blend-overlay" />
    </button>
  );
};
