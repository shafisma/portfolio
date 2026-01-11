import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiInstagram 
} from "react-icons/si";
import { FiGlobe, FiMapPin, FiMail, FiCopy, FiExternalLink, FiClock } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DottedMap } from "@/app/components/ui/dotted-map";
import gsap from "gsap";

export function AboutSection() {
  const [isCopied, setIsCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const philosophyRef = useRef<HTMLDivElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePhilosophyMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dialRef.current || !philosophyRef.current) return;
    
    const rect = philosophyRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    
    gsap.to(dialRef.current, {
      rotation: angle + 90,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  const handlePhilosophyLeave = () => {
    if (!dialRef.current) return;
    gsap.to(dialRef.current, {
      rotation: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)"
    });
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("uzzamanshafi511@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="sr-only">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* 1. Profile Card */}
          <div className="md:col-span-1 min-h-[350px] md:min-h-[400px] rounded-3xl bg-[#111] border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif italic mb-2 tracking-wide">Shafi<span className="text-gray-400 not-italic font-sans font-bold">uzzaman</span></h3>
              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                <FiMapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span>DHAKA, BD • {currentTime}</span>
              </div>
            </div>
            

            <div className="flex gap-4 relative z-10">
              <a href="https://github.com/shafisma" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiGithub size={20} /></a>
              <a href="https://x.com/Shafigrate" aria-label="X (Twitter) Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiX size={20} /></a>
            </div>
          </div>

          {/* 2. About Me Text Card */}
          <div className="md:col-span-2 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 md:p-10 flex flex-col justify-center gap-6">
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Who I am</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  I’m Shafi, a passionate developer digging deep into complex problems and solving them with software. My mission is to <a href="#projects" className="text-white hover:underline decoration-orange-500 underline-offset-4 transition-all">build tools</a> that empower people and businesses to achieve their goals. I approach every project with a focus on <a href="https://www.nngroup.com/articles/empathy-user/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">user empathy</a>, <a href="https://aws.amazon.com/what-is/scalability/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">scalability</a>, and <a href="https://web.dev/learn/performance" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">performance</a>.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  I specialize in full-stack development with a heavy focus on the frontend ecosystem—specifically <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline decoration-green-500 underline-offset-4 transition-all">Next.js</a>, <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline decoration-blue-500 underline-offset-4 transition-all">TypeScript</a>, and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline decoration-cyan-500 underline-offset-4 transition-all">Tailwind</a>. I love crafting interfaces that feel instant and alive.
                </p>
             </div>

             <div className="flex flex-wrap gap-3 mt-2">
                {["TypeScript", "Next.js", "Python", "Tailwind", "Open Source", "Async-first"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
             </div>
          </div>

          {/* 3. Philosophy Card (Interfaces you can feel) */}
          <div 
            id="philosophy"
            ref={philosophyRef}
            onMouseMove={handlePhilosophyMouseMove}
            onMouseLeave={handlePhilosophyLeave}
            className="md:col-span-3 min-h-[300px] md:min-h-[350px] rounded-3xl bg-[#111] border border-white/10 p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/20 transition-colors duration-500 cursor-auto md:cursor-none"
          >
            {/* Text Side */}
            <div className="relative z-10 flex-1 space-y-6">
               <div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm font-mono mb-2 md:mb-4">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-600 flex items-center justify-center">▶</span>
                    DESIGN PHILOSOPHY
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight"><a href="https://lawsofux.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-purple-500 underline-offset-4 transition-all">Interfaces</a> <span className="font-serif italic text-gray-400">you can feel.</span></h2>
               </div>
               
               <p className="text-gray-400 text-sm md:text-base max-w-lg">
                  I believe in software that communicates through movement. Every interaction should provide immediate, meaningful feedback.
               </p>

               <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"/>Hover states that inform</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"/>Loading feedback that reassures</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"/>Intent confirmation</li>
               </ul>
            </div>

            {/* Graphic Side (Dial) */}
            <div className="relative w-full md:w-[400px] h-[300px] flex items-center justify-center pointer-events-none">
                <div className="scale-75 md:scale-100 relative">
                  <div className="w-[300px] h-[300px] rounded-full border border-white/10 flex items-center justify-center relative">
                    {[...Array(60)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`absolute w-0.5 h-3 bg-white/20 origin-bottom`}
                        style={{ 
                          top: '0', 
                          left: '50%', 
                          transformOrigin: '50% 150px',
                          transform: `rotate(${i * 6}deg)` 
                        }}
                      />
                    ))}
                    
                    <div ref={dialRef} className="w-[200px] h-[200px] rounded-full border-[2px] border-white/10 flex items-center justify-center relative bg-[#111] shadow-2xl">
                        <div className="absolute h-[90px] w-2 bg-gradient-to-t from-orange-500 to-red-500 top-[10px] left-1/2 transform -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]"></div>
                        <div className="w-6 h-6 rounded-full bg-white/90 z-20 shadow-lg border-4 border-[#111]"></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>


          {/* 4. Global Timezone Card */}
          <div className="md:col-span-3 min-h-[250px] rounded-3xl bg-[#080808] border border-white/10 p-6 md:p-8 overflow-hidden relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 space-y-4 z-10 w-full">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Available Globally</span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">Adaptable across <br/><span className="text-gray-500">time zones</span></h3>
              <p className="text-gray-400 text-sm max-w-sm">
                I work <a href="https://doist.com/blog/async-communication/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white border-b border-gray-600 hover:border-white transition-colors">async-first</a> and am comfortable collaborating with teams in US, UK, and European time zones. 24-48h turnaround on <a href="#contact" className="text-gray-300 hover:text-white border-b border-gray-600 hover:border-white transition-colors">communications</a>.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                 <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/5">
                    <FiClock className="text-orange-500" />
                    <span>EST / PST / GMT Friendly</span>
                 </div>
              </div>
            </div>

            {/* Dotted Map Visualization */}
            <div className="flex-1 w-full h-[200px] relative opacity-50 contrast-125">
               <div className="absolute inset-0 mask-radial-gradient">
                 <DottedMap 
                   dotColor="#555"
                   markerColor="#F97316"
                   markers={[
                     { lat: 51.5074, lng: -0.1278, size: 0.6 }, // London
                     { lat: 23.8103, lng: 90.4125, size: 0.8 }, // Dhaka (User Location)
                     { lat: 40.7128, lng: -74.0060, size: 0.6 }, // New York
                     { lat: 37.7749, lng: -122.4194, size: 0.6 } // San Francisco
                   ]}
                 />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
