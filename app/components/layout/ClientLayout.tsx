"use client";

import { useState, useEffect } from "react";
// import { SplashScreen } from "./SplashScreen"; // Remove heavy splash screen logic for performance

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false); // Disable loading state

  return (
    <>
      <div className={`transition-opacity duration-700 opacity-100`}>
        {children}
      </div>
    </>
  );
}
