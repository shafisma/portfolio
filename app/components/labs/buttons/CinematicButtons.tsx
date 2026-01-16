"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Portal Opening ---
export const PortalButton = () => {
  return (
    <button className="relative w-40 h-12 group">
        <div className="absolute inset-0 bg-purple-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        <div className="absolute inset-0 border-2 border-purple-500 rounded-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out" />
        <div className="relative z-10 w-full h-full bg-black border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-purple-300 transition-colors">
            ENTER PORTAL
        </div>
        
        {/* Swirling ring effect could go here */}
    </button>
  );
};

// --- Reality Tear ---
export const RealityTearButton = () => {
    return (
        <button className="relative px-8 py-3 bg-gray-900 text-white overflow-hidden group">
            <span className="relative z-10">TEAR REALITY</span>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-out border-b border-white/50" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-white/50" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-100 delay-300" />
        </button>
    );
};

// --- Reveal Consequences ---
export const ConsequencesButton = () => {
    return (
        <div className="relative group p-4">
            <button className="relative z-10 px-6 py-2 bg-red-600 text-white font-bold rounded shadow-lg group-hover:translate-y-[-2px] transition-transform">
                DON'T PUSH
            </button>
            <div className="absolute top-full left-0 w-full pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-red-400 text-center">
                System will self-destruct...
            </div>
        </div>
    );
};

// --- Zoom Through ---
export const ZoomButton = () => {
    return (
        <motion.button 
            whileHover={{ scale: 1.5, rotate: 5 }} 
            whileTap={{ scale: 20, opacity: 0 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg"
        >
            ZOOM
        </motion.button>
    );
}
