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
}

export const projects: Project[] = [
  {
    name: "StudyWise AI",
    description: "AI-powered study enhancement tool for acing exams and mastering subjects.",
    language: "TypeScript",
    stars: 10,
    url: "https://github.com/shafisma/studywise",
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
    outcome: "Transforms chaotic Discord threads into searchable knowledge bases.",
    role: "Backend Developer",
    tech: ["Python", "Discord.py", "Sqlite"],
    metric: "Active in 5+ Servers",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=ThreadMind",
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
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=MatBoard",
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
