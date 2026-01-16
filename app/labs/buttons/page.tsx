"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import * as Visual from "@/app/components/labs/buttons/VisualButtons";
import * as Morph from "@/app/components/labs/buttons/TransformingButtons";
import * as Cinematic from "@/app/components/labs/buttons/CinematicButtons";
import * as Typo from "@/app/components/labs/buttons/TypographyButtons";
import * as Color from "@/app/components/labs/buttons/ColorLightButtons";
import * as State from "@/app/components/labs/buttons/StatefulButtons";

const categories = [
  {
    title: "Visual / Experimental",
    items: [
      { name: "Liquid Metal", component: <Visual.LiquidMetalButton /> },
      { name: "Glass Refraction", component: <Visual.GlassButton /> },
      { name: "Noise Glitch", component: <Visual.GlitchButton /> },
      { name: "Space Bending", component: <Visual.SpaceBendingButton /> },
      { name: "Heat Wave", component: <Visual.HeatWaveButton /> },
    ],
  },
  {
    title: "Transforming / Morphing",
    items: [
      { name: "Shape Shifter", component: <Morph.ShapeShiftButton /> },
      { name: "Text to Icon", component: <Morph.TextToIconButton /> },
      { name: "Collapse to Dot", component: <Morph.CollapseButton /> },
      { name: "Particle Assemble", component: <Morph.ParticleButton /> },
    ],
  },
  {
    title: "Cinematic / Storytelling",
    items: [
      { name: "Portal Opening", component: <Cinematic.PortalButton /> },
      { name: "Reality Tear", component: <Cinematic.RealityTearButton /> },
      { name: "Reveal Consequences", component: <Cinematic.ConsequencesButton /> },
      { name: "Zoom Through", component: <Cinematic.ZoomButton /> },
    ],
  },
  {
    title: "Typography Focused",
    items: [
      { name: "Text Scramble", component: <Typo.ScrambleButton /> },
      { name: "Letter Escape", component: <Typo.LetterEscapeButton /> },
      { name: "Orbiting Text", component: <Typo.OrbitButton /> },
      { name: "Variable Font", component: <Typo.VariableFontButton /> },
    ],
  },
  {
    title: "Color / Light",
    items: [
      { name: "Aurora Gradient", component: <Color.AuroraButton /> },
      { name: "Cursor Glow", component: <Color.GlowCursorButton /> },
      { name: "Neon Tube", component: <Color.NeonButton /> },
      { name: "Light Sweep", component: <Color.LightSweepButton /> },
    ],
  },
  {
    title: "Stateful / UX-Driven",
    items: [
      { name: "Hold to Confirm", component: <State.HoldConfirmButton /> },
      { name: "Multi Stage", component: <State.MultiStageButton /> },
      { name: "Undo Aware", component: <State.UndoButton /> },
      { name: "Fail Aware", component: <State.FailButton /> },
    ],
  },
];

export default function ButtonsLabPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="flex items-center gap-4 mb-12">
            <Link href="/labs" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Experimental Buttons</h1>
                <p className="text-gray-400 mt-2">A collection of interaction ideas and visual effects.</p>
            </div>
        </header>

        {/* Categories */}
        {categories.map((category, idx) => (
            <section key={idx} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-200 border-l-4 border-indigo-500 pl-4">
                    {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center justify-center gap-6 min-h-[200px] hover:border-zinc-700 transition-colors">
                           <div className="absolute top-4 left-4 text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                {idx + 1}.{itemIdx + 1}
                           </div>
                           <div className="flex-1 flex items-center justify-center w-full">
                                {item.component}
                           </div>
                           <p className="text-sm font-medium text-zinc-500">{item.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        ))}

      </div>
    </div>
  );
}
