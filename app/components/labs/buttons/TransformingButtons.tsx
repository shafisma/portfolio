"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send, X, ArrowRight } from "lucide-react";

// --- Shape Shifter ---
export const ShapeShiftButton = () => {
    const [state, setState] = useState<'square' | 'circle' | 'pill'>('square');
  
    return (
      <motion.button
        layout
        className="bg-blue-600 text-white font-medium flex items-center justify-center overflow-hidden"
        style={{
             borderRadius: state === 'circle' ? '50%' : state === 'pill' ? '9999px' : '8px',
             width: state === 'circle' ? '60px' : state === 'pill' ? '140px' : '100px',
             height: '60px'
        }}
        onClick={() => setState(s => s === 'square' ? 'pill' : s === 'pill' ? 'circle' : 'square')}
      >
        <AnimatePresence mode="wait">
            {state === 'square' && <motion.span key="sq" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>Square</motion.span>}
            {state === 'pill' && <motion.span key="pi" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>To Circle</motion.span>}
            {state === 'circle' && <motion.div key="ci" initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}><Check /></motion.div>}
        </AnimatePresence>
      </motion.button>
    );
};

// --- Text to Icon ---
export const TextToIconButton = () => {
    const [sent, setSent] = useState(false);

    return (
        <motion.button
            layout
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-colors ${sent ? 'bg-green-500' : 'bg-indigo-600'}`}
            onClick={() => { setSent(!sent); }}
        >
             <AnimatePresence mode="popLayout" initial={false}>
                {!sent ? (
                    <motion.span 
                        key="text" 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 20 }}
                        className="flex items-center gap-2"
                    >
                        Send Message <ArrowRight className="w-4 h-4" />
                    </motion.span>
                ) : (
                    <motion.span 
                        key="icon" 
                        initial={{ opacity: 0, scale: 0.5 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.5 }}
                    >
                        <Send className="w-5 h-5" />
                    </motion.span>
                )}
             </AnimatePresence>
        </motion.button>
    );
};

// --- Collapse to Dot ---
export const CollapseButton = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="h-[50px] flex items-center justify-center">
            <motion.button
                layout
                className="bg-red-500 text-white font-bold rounded-full overflow-hidden"
                animate={{
                    width: collapsed ? 10 : 150,
                    height: collapsed ? 10 : 50,
                    opacity: collapsed ? 0.5 : 1
                }}
                onClick={() => setCollapsed(!collapsed)}
            >
                {!collapsed && <motion.span layoutId="text">COLLAPSE</motion.span>}
            </motion.button>
        </div>
    );
};

// --- Particle Assemble (Simulated) ---
export const ParticleButton = () => {
    return (
        <button className="relative px-8 py-3 bg-transparent text-white border border-white/20 hover:border-transparent transition-colors group">
            {/* Particles container */}
            <div className="absolute inset-0 flex flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <span key={i} className="w-1/5 h-1/4 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-500" style={{ transitionDelay: `${i * 20}ms` }} />
                ))}
            </div>
            <span className="relative z-10 group-hover:text-transparent transition-colors duration-300">ASSEMBLE</span>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 z-20 delay-500 transition-opacity">READY</span>
        </button>
    );
}
