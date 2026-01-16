"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Text Scramble ---
export const ScrambleButton = () => {
    const originalText = "DECRYPT";
    const [text, setText] = useState(originalText);
    const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    const scramble = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setText(originalText
                .split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)]
                })
                .join("")
            );
            
            if(iterations >= originalText.length) clearInterval(interval);
            iterations += 1/3;
        }, 30);
    };

    return (
        <button 
            onMouseEnter={scramble} 
            className="px-8 py-3 bg-slate-800 text-neon-blue font-mono border border-slate-600 rounded hover:bg-slate-700 transition-colors w-32"
        >
            {text}
        </button>
    );
};

// --- Letter Escape ---
export const LetterEscapeButton = () => {
    const text = "CATCH ME";
    return (
        <button className="px-8 py-3 bg-white text-black font-bold text-xl uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 flex overflow-hidden">
            {text.split("").map((char, i) => (
                <span 
                    key={i} 
                    className="inline-block transition-transform duration-300 hover:translate-y-[-10px] hover:rotate-12 hover:text-yellow-400"
                    style={{ transitionDelay: `${i * 50}ms` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </button>
    );
};

// --- Orbiting Text ---
export const OrbitButton = () => {
    return (
        <button className="relative w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold group">
            <span className="relative z-10">CORE</span>
            <div className="absolute inset-0 rounded-full border border-dashed border-white/30 animate-[spin_10s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite]" />
            <div className="absolute w-full h-full animate-[spin_8s_linear_infinite_reverse]">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-blue-300">SATELLITE</span>
            </div>
        </button>
    );
};

// --- Variable Font Weight ---
export const VariableFontButton = () => {
    return (
        <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded transition-colors group">
            <span className="text-xl font-light group-hover:font-black transition-all duration-300 ease-in-out">
                EXPAND
            </span>
        </button>
    );
};
