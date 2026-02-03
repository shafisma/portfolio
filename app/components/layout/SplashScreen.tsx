"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      // 1. Card entry
      await animate(
        "#card", 
        { y: 0, opacity: 1 }, 
        { duration: 0.3, ease: "easeOut" }
      );

      // 2. Pulse dot (simulating load time)
      await animate(
        "#dot",
        { scale: 1.5, opacity: 0.6 },
        { duration: 0.15, ease: "easeInOut", repeat: 1, repeatType: "reverse" }
      );

      // 3. Container exit
      await animate(
        scope.current, 
        { opacity: 0 }, 
        { duration: 0.3 }
      );
      
      onFinish();
    };

    sequence();
  }, [animate, scope, onFinish]);

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 backdrop-blur-xl"
    >
      <motion.div 
        id="card"
        initial={{ y: 20, opacity: 0 }}
        className="bg-white rounded-md px-6 py-3 flex items-center gap-3 shadow-2xl shadow-white/5"
      >
        <div 
          id="dot"
          className="w-2 h-2 rounded-full bg-indigo-500"
        />
        <span className="text-zinc-900 font-medium tracking-tight text-lg">
          Loading
        </span>
      </motion.div>
    </div>
  );
}
