import { ReactNode } from "react";
import { skills } from "@/app/data/skills";
import { 
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss3, SiNextdotjs, SiReact, 
  SiTailwindcss, SiFramer, SiSanity, SiContentful, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiPrisma, SiPnpm, SiBun, SiGit, SiGithub, SiVercel, 
  SiAmazon, SiDocker, SiExpo, SiClerk, SiLinux, SiRust, SiFlutter, SiBlender, 
  SiAdobeillustrator, SiGodotengine, SiZod
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi"; // For Zustand (Bear)

const skillIcons: Record<string, ReactNode> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Python: <SiPython />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  NextJS: <SiNextdotjs />,
  ReactJS: <SiReact />,
  "Tailwind CSS": <SiTailwindcss />,
  Motion: <SiFramer />,
  Sanity: <SiSanity />,
  Contentful: <SiContentful />,
  NodeJS: <SiNodedotjs />,
  ExpressJS: <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Prisma: <SiPrisma />,
  Zustand: <GiBearFace />,
  Zod: <SiZod />,
  pnpm: <SiPnpm />,
  Bun: <SiBun />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Vercel: <SiVercel />,
  AWS: <SiAmazon />,
  Docker: <SiDocker />,
  Expo: <SiExpo />,
  Clerk: <SiClerk />,
  Linux: <SiLinux />,
  Rust: <SiRust />,
  Flutter: <SiFlutter />,
  Blender: <SiBlender />,
  Illustrator: <SiAdobeillustrator />,
  Godot: <SiGodotengine />,
};

const skillColors: Record<string, { bg: string; text: string; color: string }> = {
  JavaScript: { bg: "bg-[#F7DF1E]/10", text: "text-[#F7DF1E]", color: "#F7DF1E" },
  TypeScript: { bg: "bg-[#3178C6]/10", text: "text-[#3178C6]", color: "#3178C6" },
  Python: { bg: "bg-[#FFE873]/10", text: "text-[#FFE873]", color: "#FFE873" },
  HTML: { bg: "bg-[#E34F26]/10", text: "text-[#E34F26]", color: "#E34F26" },
  CSS: { bg: "bg-[#1572B6]/10", text: "text-[#1572B6]", color: "#1572B6" },
  NextJS: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  ReactJS: { bg: "bg-[#61DAFB]/10", text: "text-[#61DAFB]", color: "#61DAFB" },
  "Tailwind CSS": { bg: "bg-[#38B2AC]/10", text: "text-[#38B2AC]", color: "#38B2AC" },
  Motion: { bg: "bg-[#0055FF]/10", text: "text-[#0055FF]", color: "#0055FF" },
  Sanity: { bg: "bg-[#F03E2F]/10", text: "text-[#F03E2F]", color: "#F03E2F" },
  Contentful: { bg: "bg-[#2478CC]/10", text: "text-[#2478CC]", color: "#2478CC" },
  NodeJS: { bg: "bg-[#339933]/10", text: "text-[#339933]", color: "#339933" },
  ExpressJS: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  PostgreSQL: { bg: "bg-[#336791]/10", text: "text-[#336791]", color: "#336791" },
  MongoDB: { bg: "bg-[#47A248]/10", text: "text-[#47A248]", color: "#47A248" },
  Prisma: { bg: "bg-[#2D3748]/10", text: "text-white", color: "#ffffff" },
  Zustand: { bg: "bg-[#443E38]/10", text: "text-[#F6C778]", color: "#443E38" }, // Using brownish for bear
  Zod: { bg: "bg-[#3068B7]/10", text: "text-[#3068B7]", color: "#3068B7" },
  pnpm: { bg: "bg-[#F69220]/10", text: "text-[#F69220]", color: "#F69220" },
  Bun: { bg: "bg-[#FBF0DF]/10", text: "text-[#FBF0DF]", color: "#FBF0DF" },
  Git: { bg: "bg-[#F05032]/10", text: "text-[#F05032]", color: "#F05032" },
  GitHub: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  Vercel: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  AWS: { bg: "bg-[#FF9900]/10", text: "text-[#FF9900]", color: "#FF9900" },
  Docker: { bg: "bg-[#2496ED]/10", text: "text-[#2496ED]", color: "#2496ED" },
  Expo: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  Clerk: { bg: "bg-[#6C47FF]/10", text: "text-[#6C47FF]", color: "#6C47FF" },
  Linux: { bg: "bg-[#FCC624]/10", text: "text-[#FCC624]", color: "#FCC624" },
  Rust: { bg: "bg-[#000000]/10", text: "text-white", color: "#ffffff" },
  Flutter: { bg: "bg-[#02569B]/10", text: "text-[#02569B]", color: "#02569B" },
  Blender: { bg: "bg-[#E87D0D]/10", text: "text-[#E87D0D]", color: "#E87D0D" },
  Illustrator: { bg: "bg-[#FF9A00]/10", text: "text-[#FF9A00]", color: "#FF9A00" },
  Godot: { bg: "bg-[#478CBF]/10", text: "text-[#478CBF]", color: "#478CBF" },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-white/10 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
            My Skills
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            The Magic <span className="font-serif italic bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text pr-2">Behind</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap md:justify-center lg:justify-center sm:justify-start gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            const colors = skillColors[skill.name] || { bg: "bg-gray-800", text: "text-white", color: "#fff" };
            const icon = skillIcons[skill.name] || <span className="font-bold">?</span>;
            
            return (
              <div
                key={skill.name}
                className={`group flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border border-white/5 hover:border-white/20 bg-[#111] hover:bg-[#1a1a1a] transition-all duration-300 cursor-default shadow-lg shadow-black/50`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div 
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-xl`}
                  style={{ color: colors.color }}
                >
                  {icon}
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
