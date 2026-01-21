"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "./SplashScreen";
import DevToolsBlocker from "../ui/DevToolsBlocker";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <DevToolsBlocker>
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </DevToolsBlocker>
  );
}
