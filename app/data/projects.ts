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
}

export const projects: Project[] = [
  {
    name: "TextShine AI",
    description: "AI-powered text enhancement tool for improving and polishing written content.",
    language: "TypeScript",
    stars: 10,
    url: "https://github.com/shafisma/textshine-ai",
    outcome: "Instantly polishes messy drafts into professional copy.",
    role: "Full Stack Developer",
    tech: ["Next.js", "OpenAI API", "Tailwind"],
    metric: "10+ GitHub Stars",
  },
  {
    name: "ThreadMind",
    description: "A powerful Discord bot designed to revolutionize conversation management and analysis in Discord servers.",
    language: "Python",
    stars: 9,
    url: "https://github.com/shafisma/threadmind",
    outcome: "Transforms chaotic Discord threads into searchable knowledge bases.",
    role: "Backend Developer",
    tech: ["Python", "Discord.py", "MongoDB"],
    metric: "Active in 5+ Servers",
  },
  {
    name: "MatBoard",
    description: "A collaborative board application for organizing and managing tasks.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/MatBoard",
    outcome: "Real-time collaboration for remote teams to manage tasks visually.",
    role: "Full Stack Developer",
    tech: ["Next.js", "Convex", "Clerk"],
    metric: "Real-time Sync",
  },
  {
    name: "Quiz Generator",
    description: "An interactive quiz generator application for creating and taking quizzes.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/shafisma/quiz-generator",
    outcome: "Simplifies quiz creation for educators and students.",
    role: "Frontend Developer",
    tech: ["React", "TypeScript"],
  },
  {
    name: "IT Club Website",
    description: "A modern website built for an IT club community with engaging features.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/it-club-website",
    outcome: "Central hub for club events and member resources.",
    role: "Lead Developer",
    tech: ["Next.js", "Framer Motion"],
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
