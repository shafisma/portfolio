"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null); // The small dot
  const followerRef = useRef<HTMLDivElement>(null); // The big ring
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Initial setup
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 1 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50, scale: 1 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    const xToFollower = gsap.quickTo(followerRef.current, "x", { duration: 0.5, ease: "power2" });
    const yToFollower = gsap.quickTo(followerRef.current, "y", { duration: 0.5, ease: "power2" });

    const onMouseMove = (e: MouseEvent) => {
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
      gsap.to(followerRef.current, { scale: isHovering ? 2 : 1, duration: 0.2, ease: "elastic.out(1, 0.3)" });
    };

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for clickable elements
      const isLink = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      if (isLink) {
        setIsHovering(true);
        // Animate follower to expand and maybe blend
        gsap.to(followerRef.current, { 
          scale: 3, 
          borderWidth: 0,
          backgroundColor: "#fff", 
          mixBlendMode: "difference",
          opacity: 1,
          duration: 0.3 
        });
        // Hide small cursor inside
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });
      } else {
        setIsHovering(false);
        // Reset properties
        gsap.to(followerRef.current, { 
          scale: 1, 
          borderWidth: "1px",
          backgroundColor: "transparent", 
          mixBlendMode: "normal",
          opacity: 0.5,
          duration: 0.3 
        });
        gsap.to(cursorRef.current, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", handleLinkHover); // Use mouseover to detect entering elements

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleLinkHover);
    };
  }, []);

  // Update effect when hovering changes to ensure consistency if state desyncs (optional backup)
  useEffect(() => {
     if (isHovering && followerRef.current) {
        gsap.to(followerRef.current, { scale: 3, borderWidth: 0, backgroundColor: "#fff", mixBlendMode: "difference", opacity: 1, duration: 0.3 });
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });
     } else if (!isHovering && followerRef.current) {
        gsap.to(followerRef.current, { scale: 1, borderWidth: "1px", backgroundColor: "transparent", mixBlendMode: "normal", opacity: 0.5, duration: 0.3 });
        gsap.to(cursorRef.current, { opacity: 1, duration: 0.2 });
     }
  }, [isHovering]);

  return (
    <>
      {/* Main Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ boxShadow: "0 0 10px var(--accent)" }}
      />
      
      {/* Follower Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/50 pointer-events-none z-[9998] hidden md:block transition-colors"
      />
    </>
  );
}
