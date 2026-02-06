"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/app/data/projects";

const Clock = ({ timeZone, label }: { timeZone: string; label: string }) => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return <div className="w-10 h-10 bg-white/10 rounded-lg animate-pulse" />;

  const getHands = (d: Date, tz: string) => {
    try {
      const dateString = d.toLocaleString("en-US", { timeZone: tz });
      const dateInTz = new Date(dateString);
      const h = dateInTz.getHours();
      const m = dateInTz.getMinutes();
      const s = dateInTz.getSeconds();
      return {
        h: (h % 12) * 30 + m * 0.5,
        m: m * 6,
        s: s * 6,
      };
    } catch (e) {
      return { h: 0, m: 0, s: 0 };
    }
  };

  const { h, m, s } = getHands(time, timeZone);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-md sm:rounded-lg shadow-sm">
        {/* Markers */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[5px] text-gray-400 font-mono">12</div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[5px] text-gray-400 font-mono">6</div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[5px] text-gray-400 font-mono">9</div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 text-[5px] text-gray-400 font-mono">3</div>

        {/* Hands */}
        <div
          className="absolute top-1/2 left-1/2 w-[1.5px] h-2.5 sm:h-3 bg-black origin-bottom rounded-full"
          style={{ transform: `translateX(-50%) rotate(${h}deg) translateY(-100%)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[1px] h-3.5 sm:h-4 bg-black origin-bottom rounded-full"
          style={{ transform: `translateX(-50%) rotate(${m}deg) translateY(-100%)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[0.5px] h-3.5 sm:h-4 bg-red-500 origin-bottom rounded-full"
          style={{ transform: `translateX(-50%) rotate(${s}deg) translateY(-100%)` }}
        />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-black rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="text-[10px] font-bold tracking-widest uppercase">{label}</span>
    </div>
  );
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-[#FF4D29] text-white pt-16 sm:pt-24 pb-8 overflow-hidden font-sans selection:bg-white selection:text-[#FF4D29]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {/* Column 1: Brand & Newsletter */}
          <div className="flex flex-col gap-8 max-w-sm">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">shafisma</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Building software that actually works. Focused on interfaces you can feel.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="newsletter-email" className="text-sm font-medium">
                Subscribe to newsletter:
              </label>
              <div className="flex relative">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your email..."
                  className="w-full bg-white/20 border-0 rounded-lg px-4 py-3 placeholder-white/60 text-sm focus:ring-2 focus:ring-white outline-none transition-all hover:bg-white/30"
                />
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-1.5 rounded-md hover:bg-white text-[#FF4D29] hover:text-[#FF4D29] transition-colors"
                  aria-label="Subscribe"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
              </div>
            </div>

            <div className="flex gap-6 mt-2">
              <Clock label="IND" timeZone="Asia/Kolkata" />
              <Clock label="UK" timeZone="Europe/London" />
              <Clock label="NY" timeZone="America/New_York" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold tracking-wider uppercase opacity-80">Navigation</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><Link href="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
                <li><Link href="/#about" className="hover:opacity-70 transition-opacity">About</Link></li>
                <li><Link href="/#projects" className="hover:opacity-70 transition-opacity">Projects</Link></li>
                <li><Link href="/labs" className="hover:opacity-70 transition-opacity">Labs</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold tracking-wider uppercase opacity-80">Projects</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                {projects.slice(0, 5).map((p) => (
                  <li key={p.name}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold tracking-wider uppercase opacity-80">Socials</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><a href="https://github.com/shafisma" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a></li>
                <li><a href="https://x.com/shafigrate" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">X (Twitter)</a></li>
                <li><a href="https://linkedin.com/in/shafisma" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a></li>
                <li><a href="https://instagram.com/shafisma" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Instagram</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold tracking-wider uppercase opacity-80">Resources</h3>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><a href="#" className="hover:opacity-70 transition-opacity">Resume</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Contact</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Uses</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-white/20">
            <div className="flex flex-col gap-2 text-xs font-medium opacity-80">
                <p>© {currentYear} Shafi. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                </div>
            </div>

            <div className="flex gap-3">
                 <a 
                    href="https://linkedin.com/in/shafisma" 
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-[#FF4D29] hover:bg-black hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.542V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
                <a 
                    href="https://instagram.com" 
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md text-[#FF4D29] hover:bg-black hover:text-white transition-all"
                    aria-label="Instagram"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            </div>
        </div>

        {/* Big Text */}
        <div className="relative mt-12 select-none overflow-hidden">
             <h1 className="text-[17vw] leading-[0.8] font-bold tracking-tighter text-center translate-y-[2vw]">
                shafisma
             </h1>
             
             {/* Sticker Badge */}
            <div className="absolute right-0 sm:right-[15%] top-0 sm:top-10 rotate-12">
                <div className="bg-[#00D375] text-black w-32 h-20 sm:w-48 sm:h-28 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center p-2 transform transition-transform hover:scale-110 hover:rotate-6 cursor-pointer border border-black/10">
                    <div className="text-center font-bold leading-tight">
                        <span className="block text-[10px] sm:text-xs text-white uppercase tracking-wider mb-1">Passionate</span>
                        <span className="block text-lg sm:text-2xl font-black">DEVELOPER</span>
                         <span className="block text-[8px] sm:text-[10px] text-black/60 mt-1">Open Source & Web</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
