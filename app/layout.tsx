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
  metadataBase: new URL("https://shafisma.me"),
  title: {
    default: "Shafiuzzaman | Full‑Stack Developer Portfolio (Next.js)",
    template: "%s | Shafi's Portfolio"
  },
  description: "Explore Shafiuzzaman’s full‑stack developer portfolio: Next.js, TypeScript and Python projects. View featured work, open-source repos, and get in touch.",
  keywords: ["full-stack developer", "Next.js portfolio", "TypeScript projects", "Python developer", "open-source", "web development", "react", "software engineer"],
  authors: [{ name: "Shafiuzzaman", url: "https://shafisma.me" }],
  creator: "Shafiuzzaman",
  openGraph: {
    title: "Shafiuzzaman | Full‑Stack Developer Portfolio (Next.js)",
    description: "Explore Shafiuzzaman’s full‑stack developer portfolio featuring Next.js, TypeScript and Python projects.",
    url: "https://shafisma.me",
    siteName: "Shafiuzzaman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure you add an og-image.png to your public folder
        width: 1200,
        height: 630,
        alt: "Shafiuzzaman - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shafiuzzaman | Full‑Stack Developer Portfolio",
    description: "Full building fast, reliable software.",
    creator: "@shafigrate",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shafiuzzaman",
  "url": "https://shafisma.me",
  "sameAs": [
     "https://github.com/shafisma",
     "https://x.com/shafigrate",
     "https://www.linkedin.com/in/shafisma/" 
  ],
  "jobTitle": "Full-Stack Developer",
  "knowsAbout": ["Next.js", "React", "TypeScript", "Python", "Tailwind CSS", "Web Development"],
  "description": "Full-stack developer specializing in building fast, reliable web applications with Next.js and TypeScript."
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
