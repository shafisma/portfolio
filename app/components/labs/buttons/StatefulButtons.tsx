"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Trash2, RotateCcw, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// --- Hold to Confirm ---
export const HoldConfirmButton = () => {
    const [completed, setCompleted] = useState(false);
    const controls = useAnimation();

    const start = () => {
        controls.start({ 
            width: "100%", 
            transition: { duration: 1.5, ease: "linear" } 
        }).then(() => setCompleted(true));
    }

    const stop = () => {
         // If we release before completion, reset
         // This logic is tricky with framer motion promise, in real app need a ref to track completion
         // For simplicity here, we rely on Visual feedback mainly
         controls.stop();
         if(!completed) controls.start({ width: "0%" });
    };

    return (
        <button 
            className="relative px-8 py-3 bg-indigo-900 text-white font-bold rounded overflow-hidden select-none"
            onMouseDown={start}
            onMouseUp={stop}
            onMouseLeave={stop}
            onTouchStart={start}
            onTouchEnd={stop}
        >
            <div className="relative z-10 flex items-center gap-2">
                {completed ? <CheckCircle className="w-5 h-5"/> : null}
                {completed ? "CONFIRMED" : "HOLD TO CONFIRM"}
            </div>
            <motion.div 
                className="absolute top-0 left-0 h-full bg-indigo-500 z-0"
                initial={{ width: "0%" }}
                animate={controls}
            />
        </button>
    );
};

// --- Multi Stage ---
export const MultiStageButton = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleClick = () => {
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 2000);
        }, 1500);
    };

    return (
        <button 
            className={`
                px-8 py-3 rounded-full font-bold text-white transition-all duration-300 min-w-[140px] flex justify-center items-center
                ${status === 'idle' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                ${status === 'loading' ? 'bg-blue-400' : ''}
                ${status === 'success' ? 'bg-green-500' : ''}
            `}
            onClick={handleClick}
            disabled={status !== 'idle'}
        >
            {status === 'idle' && "SUBMIT"}
            {status === 'loading' && <Loader2 className="animate-spin" />}
            {status === 'success' && "DONE"}
        </button>
    );
};

// --- Undo Aware ---
export const UndoButton = () => {
    const [deleted, setDeleted] = useState(false);

    return (
        <div className="flex items-center gap-4 h-12">
            {!deleted ? (
                <motion.button 
                    layout
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="flex items-center gap-2 px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    onClick={() => setDeleted(true)}
                >
                    <Trash2 className="w-4 h-4" /> Delete
                </motion.button>
            ) : (
                <motion.button 
                    layout
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-lg"
                    onClick={() => setDeleted(false)}
                >
                    <RotateCcw className="w-4 h-4" /> Undo
                </motion.button>
            )}
        </div>
    );
};

// --- Fail Aware ---
export const FailButton = () => {
    const [state, setState] = useState<'idle' | 'error'>('idle');

    const handleClick = () => {
        setState('error');
        setTimeout(() => setState('idle'), 1000);
    };

    return (
        <motion.button
            className={`px-8 py-3 rounded text-white font-bold transition-colors ${state === 'error' ? 'bg-red-600' : 'bg-gray-600 hover:bg-gray-700'}`}
            onClick={handleClick}
            animate={state === 'error' ? { x: [-5, 5, -5, 5, 0] } : {}}
            transition={{ duration: 0.4 }}
        >
            {state === 'error' ? (
                <span className="flex items-center gap-2"><AlertCircle className="w-4 h-4" /> FAILED</span>
            ) : (
                "TRY ACTION"
            )}
        </motion.button>
    );
};
