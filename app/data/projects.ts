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
}

export const projects: Project[] = [
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
    metric: "2 GitHub Stars",
    image: "/studywise.png",
  },
  {
    name: "ThreadMind",
    description: "A powerful Discord bot designed to revolutionize conversation management and analysis in Discord servers.",
    language: "Python",
    stars: 9,
    url: "https://github.com/shafisma/threadmind",
    weburl: "https://discord.com/oauth2/authorize?client_id=1452527298124316672&scope=bot%20applications.commands&permissions=534723982656",
    outcome: "Transforms chaotic Discord threads into searchable knowledge bases.",
    role: "Backend Developer",
    tech: ["Python", "Discord.py", "Sqlite"],
    metric: "Active in 5+ Servers",
    image: "/threadmind.png",
  },
  {
    name: "NEXUS",
    description: "A chat app enabling real-time collaboration for remote teams to manage tasks visually.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/nexus",
    weburl: "https://nexus5.vercel.app/",
    outcome: "Real-time chat app with serverless backend.",
    role: "Full Stack Developer",
    tech: ["Next.js", "Sqlite", "Clerk"],
    metric: "Real-time Sync",
    image: "/nexus.png",
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
  },
];
