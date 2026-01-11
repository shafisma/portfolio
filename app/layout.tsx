import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import CustomCursor from "./components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shafiuzzaman | Full‑Stack Developer Portfolio (Next.js)",
  description: "Explore Shafiuzzaman’s full‑stack developer portfolio featuring Next.js, TypeScript and Python projects. View featured work, open-source repos, and get in touch.",
  keywords: ["full-stack developer", "Next.js portfolio", "TypeScript projects", "Python developer", "open-source"],
  openGraph: {
    title: "Shafiuzzaman | Full‑Stack Developer Portfolio (Next.js)",
    description: "Explore Shafiuzzaman’s full‑stack developer portfolio featuring Next.js, TypeScript and Python projects.",
    url: "https://shafi-portfolio.vercel.app", // Placeholder URL
    siteName: "Shafi's Portfolio",
    locale: "en_US",
    type: "website",
  },
};

import ClientLayout from "./components/layout/ClientLayout";
import { AnimatedBackground, SmoothScroll } from "./components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased cursor-none bg-transparent text-white`}
      >
        <ClientLayout>
          <SmoothScroll />
          <AnimatedBackground />
          <CustomCursor />
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
