"use client";

import { useState } from "react";
import { Navbar, Footer, AnimatedBackground } from "./components/layout";
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
    <div className="min-h-screen bg-[#030712] text-white font-[family-name:var(--font-geist-sans)] noise">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
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
