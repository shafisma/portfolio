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
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* 1. Profile Card */}
          <div className="md:col-span-1 min-h-[400px] rounded-3xl bg-[#111] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-4xl font-serif italic mb-2 tracking-wide">Shafi<span className="text-gray-400 not-italic font-sans font-bold">uzzaman</span></h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                <FiMapPin className="w-4 h-4" />
                <span>DHAKA, BD • {currentTime}</span>
              </div>
            </div>
            
            {/* Image Placeholder - simulating the polaroids */}
            <div className="flex-1 relative min-h-[200px] w-full mt-4 mb-4 perspective-1000">
             <div className="absolute left-0 bottom-0 w-24 h-32 bg-gray-800 rounded-lg border-4 border-white transform -rotate-12 hover:rotate-0 transition-all duration-300 z-10 overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50"></div>
              </div>
              <div className="absolute left-1/2 bottom-4 w-28 h-36 bg-gray-700 rounded-lg border-4 border-white transform -translate-x-1/2 rotate-3 hover:rotate-0 hover:z-20 transition-all duration-300 z-10 overflow-hidden shadow-xl">
                 <div className="w-full h-full bg-gradient-to-tr from-orange-400 to-pink-500 opacity-50"></div>
              </div>
              <div className="absolute right-0 bottom-2 w-24 h-32 bg-gray-800 rounded-lg border-4 border-white transform rotate-12 hover:rotate-0 transition-all duration-300 z-0 overflow-hidden shadow-lg">
                 <div className="w-full h-full bg-gradient-to-bl from-green-400 to-cyan-500 opacity-50"></div>
              </div>
            </div>

            <div className="flex gap-4 relative z-10">
              <a href="https://github.com/shafisma" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiGithub size={20} /></a>
              <a href="https://x.com/shafigrate" aria-label="X (Twitter) Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiX size={20} /></a>
            </div>
          </div>

          {/* 2. Philosophy Card */}
          <div 
            ref={philosophyRef}
            onMouseMove={handlePhilosophyMouseMove}
            onMouseLeave={handlePhilosophyLeave}
            className="md:col-span-2 min-h-[400px] rounded-3xl bg-[#111] border border-white/10 p-8 md:p-12 relative overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 cursor-none"
          >
            <div className="absolute top-8 right-8 flex gap-2">
              {['Motion', 'Type', 'Feedback', 'Craft'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mt-12 relative z-10 pointer-events-none">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-mono mb-4">
                <span className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">▶</span>
                DETAIL-DRIVEN UI
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-2">Interfaces</h2>
              <h2 className="text-5xl md:text-7xl font-serif italic text-gray-400 mb-8">you can feel.</h2>
              
              <div className="flex flex-col gap-1 max-w-sm ml-auto text-right">
                <h4 className="text-white font-bold">Micro-interactions</h4>
                <p className="text-gray-500 text-sm">Subtle movement that confirms intent — never distracting.</p>
              </div>
            </div>
            
             {/* Interactive Dial/Knob Graphic */}
            <div className="absolute bottom-[-140px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/5 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] rounded-full border border-white/10 flex items-center justify-center relative">
                 {/* Ticks */}
                 {[...Array(60)].map((_, i) => (
                   <div 
                    key={i} 
                    className={`absolute w-0.5 h-3 bg-white/20 origin-bottom`}
                    style={{ 
                      top: '0', 
                      left: '50%', 
                      transformOrigin: '50% 200px',
                      transform: `rotate(${i * 6}deg)` 
                    }}
                  />
                 ))}
                 
                 <div ref={dialRef} className="w-[300px] h-[300px] rounded-full border-[2px] border-white/10 flex items-center justify-center relative bg-[#111] shadow-2xl">
                    <div className="absolute h-[140px] w-2 bg-gradient-to-t from-orange-500 to-red-500 top-[10px] left-1/2 transform -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]"></div>
                    <div className="w-8 h-8 rounded-full bg-white/90 z-20 shadow-lg border-4 border-[#111]"></div>
                 </div>
              </div>
            </div>
          </div>


          {/* 4. Global Timezone Card */}
          <div className="md:col-span-3 min-h-[300px] rounded-3xl bg-[#080808] border border-white/10 p-8 overflow-hidden relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1 space-y-4 z-10">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Available Globally</span>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Adaptable across <br/><span className="text-gray-500">time zones</span></h3>
              
              <div className="flex flex-wrap gap-2 mt-4">
                 <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm flex items-center gap-2">
                   <span className="text-xs">GB</span> UK
                 </div>
                 <div className="px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm flex items-center gap-2">
                   <span className="text-xs">BD</span> Bangladesh
                 </div>
                 <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm flex items-center gap-2">
                   <span className="text-xs">US</span> USA
                 </div>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-gray-500">
                <FiMapPin />
                <span className="text-white font-medium">REMOTE</span>
                <span>•</span>
                <span>Bangladesh</span>
              </div>
            </div>

            {/* Dotted Map Visualization */}
            <div className="flex-1 w-full h-full relative opacity-50 contrast-125 min-h-[250px]">
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
