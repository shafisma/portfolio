"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// --- Aurora Gradient ---
export const AuroraButton = () => {
    return (
        <button className="relative px-8 py-3 rounded-lg overflow-hidden group bg-gray-900">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-[length:200%_200%] opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:bg-right" />
            <span className="relative z-10 text-white font-semibold">AURORA</span>
        </button>
    );
};

// --- Follow Cursor Glow ---
export const GlowCursorButton = () => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = btnRef.current!.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    };

    return (
        <motion.button
            ref={btnRef}
            className="relative px-8 py-3 bg-gray-900 rounded-lg overflow-hidden group text-gray-300 hover:text-white transition-colors"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            150px circle at ${x}px ${y}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `
                }}
            />
             <motion.div
                className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${x}px ${y}px,
                            rgba(255,255,255,0.05),
                            transparent 40%
                        )
                    `
                }}
            />
            <span className="relative text-sm font-medium">HOVER ME</span>
        </motion.button>
    );
};

// --- Neon Tube ---
export const NeonButton = () => {
    return (
        <button 
            className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded bg-transparent font-bold hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.5),inset_0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 group"
            style={{ textShadow: "0 0 5px rgba(236,72,153, 0.5)" }}
        >
             <span className="group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all">NEON</span>
        </button>
    );
};

// --- Light Beam Sweep ---
export const LightSweepButton = () => {
    return (
        <button className="relative px-8 py-3 bg-zinc-800 text-zinc-400 font-bold rounded overflow-hidden group">
            <span className="relative z-10">SHINE</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-[shine_1s_infinite]" 
                 style={{ animation: 'none' }} />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </button>
    );
};
