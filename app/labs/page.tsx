"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar, Footer } from "../components/layout";

export default function LabsPage() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (titleRef.current) {
        tl.from(titleRef.current, {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            skewY: 5,
        });
    }

    if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
            y: 30,
            autoAlpha: 0,
            duration: 1,
        }, "-=0.6");
    }
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="pt-20">
        <section ref={containerRef} className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden">
             <div className="text-center max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
                <h1 ref={titleRef} className="text-8xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black mb-6 sm:mb-8 tracking-tighter leading-[0.95] sm:leading-[0.9] text-white">
                  LABS
                  <span className="block capitalize mt-2 text-xl tracking-[0.3em] sm:text-2xl md:text-2xl font-medium text-[#6A6A6B]">
                    EXPERIMENTAL PLAYGROUND
                  </span>
                </h1>
                <div ref={subtitleRef} className="flex flex-col items-center gap-6 mb-8 sm:mb-12 px-2">
                  <span className="font-serif italic md:text-4xl lg:text-6xl sm:text-4xl text-white">where ideas come alive.</span>
                </div>
              </div>
        </section>

        {/* Experiments Grid */}
        <section className="container mx-auto px-4 sm:px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {/* Buttons Card */}
                 <Link href="/labs/buttons" className="group relative block h-96 bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Buttons</h3>
                                <p className="text-zinc-500 font-medium tracking-wide text-sm">INTERACTION LIBRARY</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-indigo-600 transition-all duration-500">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                A curated collection of 25+ experimental button interactions including liquid metal, glitch effects, and cinematic transitions.
                            </p>
                            <div className="flex gap-2 text-xs font-mono text-zinc-600 group-hover:text-indigo-400/70 transition-colors">
                                <span>#REACT</span>
                                <span>#GSAP</span>
                                <span>#TAILWIND</span>
                            </div>
                        </div>
                    </div>

                    {/* Preview or Abstract representation */}
                    <div className="absolute inset-0 z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]" />
                    </div>
                 </Link>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
