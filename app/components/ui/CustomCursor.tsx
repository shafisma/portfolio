"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const cursorSize = 16; // w-4 h-4

  useEffect(() => {
    // Initial setup to center based on size
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    const xToFollower = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      gsap.to(followerRef.current, { scale: 1.5, opacity: 0.5, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.1 });
      gsap.to(followerRef.current, { scale: 1, opacity: 1, duration: 0.1 });
    };

    // Hover effect for links and buttons
    const onMouseEnterLink = () => {
      gsap.to(cursorRef.current, { scale: 0, duration: 0.2 });
      gsap.to(followerRef.current, { 
        scale: 3, 
        mixBlendMode: "difference", 
        backgroundColor: "white",
        duration: 0.2 
      });
    };
    
    const onMouseLeaveLink = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
      gsap.to(followerRef.current, { 
        scale: 1, 
        mixBlendMode: "difference", 
        backgroundColor: "transparent",
        duration: 0.2 
      });
    };

    // Add event listeners for hover detection efficiently
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.closest('button') || target.closest('[role="button"]');
      
      if (isLink) {
        onMouseEnterLink();
        target.addEventListener('mouseleave', onMouseLeaveLink, { once: true });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    // Use capture to catch events early or use mouseover broadly
    window.addEventListener("mouseover", handleLinkHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleLinkHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9998] mix-blend-difference hidden md:block"
      />
    </>
  );
}
