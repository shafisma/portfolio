"use client";

import { useState } from "react";
import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "./components/sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen text-foreground font-[family-name:var(--font-geist-sans)]">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10 p-4 sm:p-8 space-y-24 container mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
