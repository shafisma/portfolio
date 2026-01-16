"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null); // The small dot
  const followerRef = useRef<HTMLDivElement>(null); // The big ring
  const textRef = useRef<HTMLSpanElement>(null); // Text inside follower

  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Initial setup
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 1 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50, scale: 1 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    const xToFollower = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power2" });
    const yToFollower = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power2" });

    // Velocity tracking for squeeze effect
    let lastX = 0;
    let lastY = 0;
    let velX = 0;
    let velY = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Calculate velocity
      velX = e.clientX - lastX;
      velY = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      // Basic Squeeze / Rotation based on movement
      const speed = Math.sqrt(velX ** 2 + velY ** 2);
      const angle = (Math.atan2(velY, velX) * 180) / Math.PI;
      
      // Gentle squeeze effect on the follower
      const scaleX = gsap.utils.clamp(0.8, 1.2, 1 + speed * 0.005);
      const scaleY = gsap.utils.clamp(0.8, 1.2, 1 - speed * 0.005);
      
      if (!isHovering) {
        gsap.to(followerRef.current, { 
            scaleX: scaleX, 
            scaleY: scaleY, 
            rotation: angle, 
            duration: 0.5,
            overwrite: "auto"
        });
      }

      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.5, duration: 0.1, ease: "power2.out" });
      gsap.to(followerRef.current, { scale: 0.8, duration: 0.1, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.3)" });
      gsap.to(followerRef.current, { scale: isHovering ? 3 : 1, duration: 0.2, ease: "elastic.out(1, 0.3)" });
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for magnetic/text attributes
      const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      if (customText) {
         setCursorText(customText);
         setIsHovering(true);
         // Text cursor mode
         gsap.to(followerRef.current, { 
           width: "auto",
           height: "auto",
           padding: "8px 16px",
           borderRadius: "20px",
           backgroundColor: "#3b82f6", // Accent blue
           borderColor: "#3b82f6",
           mixBlendMode: "normal",
           scale: 1,
           opacity: 1,
           rotation: 0,
           duration: 0.3 
         });
         gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });

      } else if (isInteractive) {
        setCursorText("");
        setIsHovering(true);
        // Link hover mode
        gsap.to(followerRef.current, { 
          width: 60,  // Fixed size for hover
          height: 60,
          scale: 1,
          borderRadius: "50%",
          borderWidth: 0,
          backgroundColor: "#fff", 
          mixBlendMode: "difference",
          opacity: 1,
          rotation: 0,
          duration: 0.3 
        });
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });
      } else {
        setCursorText("");
        setIsHovering(false);
        // Default mode
        gsap.to(followerRef.current, { 
          width: 40, 
          height: 40,
          scale: 1,
          borderRadius: "50%",
          borderWidth: "1px",
          backgroundColor: "transparent", 
          borderColor: "rgba(255,255,255,0.5)",
          mixBlendMode: "normal",
          opacity: 0.5,
          padding: 0,
          rotation: 0,
          duration: 0.3 
        });
        gsap.to(cursorRef.current, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleLinkHover);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleLinkHover);
    };
  }, [isHovering]); // Added isHovering to dependency to update logic if needed, though most logic is in event listener

  return (
    <>
      {/* Main Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block" // Increased z-index
        style={{ boxShadow: "0 0 10px var(--accent)" }}
      />
      
      {/* Follower Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 pointer-events-none z-[9998] hidden md:flex items-center justify-center text-black text-[10px] font-bold tracking-widest uppercase overflow-hidden transition-colors"
      >
        <span ref={textRef} className={`${cursorText ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 whitespace-nowrap`}>
          {cursorText}
        </span>
      </div>
    </>
  );
}
