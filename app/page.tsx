"use client";

import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  AboutSection,
  MarqueeSection,
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
      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <MarqueeSection />
                  <ProjectsSection />
        <div className="container mx-auto px-4 sm:px-8 py-24 space-y-24">

          <GithubSection />
          <SkillsSection />
          <ContactSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
