"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { cn } from "../../lib/utils"; // Assuming you have a utils file for merging classes
import { IconType } from "react-icons";

// 1. Button glow that slowly fades after click
export const GlowButton = ({ 
  children, 
  className, 
  onClick, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    // Create a flash effect
    gsap.fromTo(buttonRef.current, 
      { boxShadow: "0 0 0 0px rgba(255, 255, 255, 0.7)" }, 
      { 
        boxShadow: "0 0 0 20px rgba(255, 255, 255, 0)", 
        duration: 0.8, 
        ease: "power2.out" 
      }
    );

    onClick?.(e);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-transform active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// 2. Card slightly tilts toward cursor
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number;
}

export const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  ({ children, className, intensity = 15, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);

    // Sync forwarded ref with internal ref
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(internalRef.current);
      } else {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = internalRef.current;
      }
    }, [ref]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!internalRef.current) return;

      const rect = internalRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      gsap.to(internalRef.current, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });

      props.onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!internalRef.current) return;
      gsap.to(internalRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });

      props.onMouseLeave?.(e);
    };

    return (
      <div
        ref={internalRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("transition-colors", className)}
        style={{ transformStyle: "preserve-3d" }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TiltCard.displayName = "TiltCard";

// 3. Icon fills from outline → solid on hover
export const FillingIcon = ({
  icon: Icon,
  className,
  size = 24
}: {
  icon: IconType; // Or any SVG component type
  className?: string;
  size?: number;
}) => {
  return (
    <div className={cn("group relative inline-flex items-center justify-center", className)}>
       {/* Outline version (stroke only, no fill) */}
       <Icon 
         size={size} 
         className="absolute transition-opacity duration-300 group-hover:opacity-0" 
         style={{ strokeWidth: 2, fill: "transparent", stroke: "currentColor" }} 
       />
       {/* Solid version (filled) */}
       <Icon 
         size={size} 
         className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
         style={{ fill: "currentColor", stroke: "none" }}
       />
       {/* Placeholder to keep space */}
       <Icon size={size} className="invisible" />
    </div>
  );
};
// Specialized version if you have separate Outline and Solid components (better for most icon sets)
export const MorphingIcon = ({
  outlineIcon: Outline,
  solidIcon: Solid,
  className,
  size = 24
}: {
  outlineIcon: React.ElementType;
  solidIcon: React.ElementType;
  className?: string;
  size?: number;
}) => {
  return (
    <div className={cn("group relative inline-block", className)} style={{ width: size, height: size }}>
      <Outline 
        size={size} 
        className="absolute inset-0 transition-all duration-300 ease-out group-hover:scale-75 group-hover:opacity-0" 
      />
      <Solid 
        size={size} 
        className="absolute inset-0 scale-75 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" 
      />
    </div>
  );
};


// 4. Toggle switch with elastic snap
export const ElasticSwitch = ({
  checked,
  onChange,
  className,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}) => {
  const handleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (handleRef.current) {
      gsap.to(handleRef.current, {
        x: checked ? 24 : 0, // Adjust based on width
        duration: 0.5,
        ease: "elastic.out(1, 0.6)",
      });
    }
  }, [checked]);

  return (
    <div
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-8 w-14 cursor-pointer rounded-full border-2 transition-colors duration-300",
        checked ? "border-green-500 bg-green-500/20" : "border-gray-600 bg-transparent",
        className
      )}
    >
      <div
        ref={handleRef}
        className={cn(
          "absolute top-1 left-1 h-5 w-5 rounded-full shadow-sm",
          checked ? "bg-green-400" : "bg-gray-400"
        )}
      />
    </div>
  );
};


// 5. Checkbox tick draws itself
export const DrawingCheckbox = ({
  checked,
  onChange,
  className,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={cn(
        "group relative flex h-6 w-6 cursor-pointer items-center justify-center rounded border transition-all duration-300",
        checked ? "border-blue-500 bg-blue-500" : "border-gray-500 bg-transparent hover:border-gray-400",
        className
      )}
    >
      <svg
        className="h-4 w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          d="M5 13l4 4L19 7"
          className="transition-all duration-500 ease-out"
          style={{
            strokeDasharray: 24,
            strokeDashoffset: checked ? 0 : 24,
          }}
        />
      </svg>
    </div>
  );
};


// 6. Input field border softly breathes when focused
export const BreathingInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative group">
      <input
        className={cn(
          "peer w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white outline-none transition-all placeholder:text-gray-500 focus:border-blue-500",
          className
        )}
        {...props}
      />
      {/* Breathing glow effect */}
      <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-lg opacity-0 transition-opacity duration-300 peer-focus:opacity-100 peer-focus:animate-pulse-slow bg-blue-500/50 blur-md" />
    </div>
  );
};
