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
  title: "Shafi | Developer Portfolio",
  description: "Hi, I'm Shafi! A passionate developer exploring new technologies and solving real-world problems with software.",
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
