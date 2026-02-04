export interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  outcome?: string; 
  role?: string;
  tech?: string[];
  metric?: string;
  image?: string;
  weburl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Finenzo",
    description: "Finenzo is a smart expense tracker built with Flutter that helps you manage your personal finances with ease. Track expenses, manage multiple wallets, analyze spending patterns, and export your financial data - all in one app.",
    language: "Dart",
    stars: 5,
    url: "https://github.com/shafisma/finenzo",
    outcome: "Comprehensive personal finance management on the go.",
    role: "Mobile App Developer",
    tech: ["Flutter", "Dart", "Sqflite"],
    metric: "Multi-wallet Support",
    image: "/finenzo-mockup/m1.png",
    images: ["/finenzo-mockup/m2.png", "/finenzo-mockup/m1.png", "/finenzo-mockup/m3.png"],
  },
  {
    name: "StudyWise AI",
    description: "AI-powered study enhancement tool for acing exams and mastering subjects.",
    language: "TypeScript",
    stars: 10,
    url: "https://github.com/shafisma/studywise",
    weburl: "https://studywise.ai",
    outcome: "Practical study aid for students with Virtual exams.",
    role: "Full Stack Developer",
    tech: ["Next.js", "Gemini API", "Tailwind"],
    metric: "36 GitHub Stars",
    image: "/studywise.png",
  },
  {
    name: "IT Club Website",
    description: "A modern website built for an IT club community with engaging features.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/it-club-website",
    weburl: "https://mmitc.tech/",
    outcome: "Central hub for club events and member resources.",
    role: "Lead Developer",
    tech: ["Next.js", "Framer Motion"],
    metric: "Real-time Sync",
    image: "/mmitc.png",
  },
  {
    name: "Portfolio Website",
    description:
      "A fully responsive and visually appealing portfolio website to showcase projects and skills.",
    language: "TypeScript",
    stars: 16,
    url: "https://github.com/shafisma/portfolio",
    weburl: "https://shafisma.me/",
    outcome: "Professional online presence with smooth animations.",
    role: "Lead Developer",
    tech: ["Next.js", "Framer Motion", "GSAP"],
    metric: "Best UI Design",
    image: "/pf.png",
  },
];
