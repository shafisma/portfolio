export interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
}

export const projects: Project[] = [
  {
    name: "ThreadMind",
    description:
      "A powerful Discord bot designed to revolutionize conversation management and analysis in Discord servers.",
    language: "Python",
    stars: 9,
    url: "https://github.com/shafisma/threadmind",
  },
  {
    name: "Quiz Generator",
    description:
      "An interactive quiz generator application for creating and taking quizzes.",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/shafisma/quiz-generator",
  },
  {
    name: "TextShine AI",
    description:
      "AI-powered text enhancement tool for improving and polishing written content.",
    language: "TypeScript",
    stars: 10,
    url: "https://github.com/shafisma/textshine-ai",
  },
  {
    name: "MatBoard",
    description:
      "A collaborative board application for organizing and managing tasks.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/MatBoard",
  },
  {
    name: "IT Club Website",
    description:
      "A modern website built for an IT club community with engaging features.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/it-club-website",
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
