"use client";

import { useEffect, useState } from "react";
import { Clock, Home, Mail } from "lucide-react";
import Link from "next/link";

export default function DevToolsBlocker({ children }: { children: React.ReactNode }) {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.code === "KeyI")) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j" || e.code === "KeyJ")) {
        e.preventDefault();
        e.stopPropagation();
      }
      
      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && (e.key === "C" || e.key === "c" || e.code === "KeyC")) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === "U" || e.key === "u" || e.code === "KeyU")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Detect DevTools
    const detectDevTools = () => {
      // Threshold for docked devtools
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        setIsDevToolsOpen(true);
      } else {
        setIsDevToolsOpen(false);
      }
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", detectDevTools);

    // Initial check and interval
    detectDevTools();
    const interval = setInterval(detectDevTools, 500);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", detectDevTools);
      clearInterval(interval);
    };
  }, []);

  if (!isDevToolsOpen) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center font-sans">
      <div className="relative w-full max-w-md p-8 text-center">
        
        {/* Clock Icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
          <Clock className="h-6 w-6 text-neutral-400" />
        </div>

        {/* Text Content */}
        <div className="mb-2 text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
          Access Restricted
        </div>
        <h1 className="mb-4 text-3xl font-black tracking-tight text-white">
          DEV TOOLS <span className="text-neutral-500 italic font-serif font-light">detected</span>
        </h1>
        <p className="mb-8 text-sm text-neutral-400 leading-relaxed">
          Curious about how this was built?
          <br />
          Let's connect and chat about it.
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            onClick={() => setIsDevToolsOpen(false)} // Allow returning if it's a false positive or they closed it
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          
          <Link
            href="mailto:contact@shafisma.me" 
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-center gap-6 text-[11px] text-neutral-600">
          <span className="hover:text-neutral-400 cursor-pointer transition-colors">Privacy</span>
          <span className="h-0.5 w-0.5 rounded-full bg-neutral-700" />
          <span className="hover:text-neutral-400 cursor-pointer transition-colors">Terms</span>
          <span className="h-0.5 w-0.5 rounded-full bg-neutral-700" />
          <span className="hover:text-neutral-400 cursor-pointer transition-colors">About</span>
        </div>
      </div>
    </div>
  );
}
