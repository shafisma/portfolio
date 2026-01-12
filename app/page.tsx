"use client";

import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  GithubSection,
  CTASection,
} from "./components/sections";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="relative z-10 p-4 sm:p-8 space-y-24 container mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GithubSection />
        <SkillsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
