"use client";

import React, { useState, useEffect, useRef } from "react";
import TravelMap from "./TravelMap";
import { CONFIG } from "@/lib/config";
import { ChevronRight, QrCode, Sparkles } from "lucide-react";

interface TravelIntroProps {
  onComplete: () => void;
}

export default function TravelIntro({ onComplete }: TravelIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0); // 0.0 to 1.0
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const INTRO_DURATION_MS = 2800; // 2.8 seconds cinematic experience

  useEffect(() => {
    // 1. Session Storage & Query Param Check
    const urlParams = new URLSearchParams(window.location.search);
    const forceIntro = urlParams.get("intro") === "true";
    const hasSeenIntro = sessionStorage.getItem("travelIntroShown");

    // Expose dev helper on window
    (window as any).resetIntro = () => {
      sessionStorage.removeItem("travelIntroShown");
      window.location.href = window.location.pathname + "?intro=true";
    };

    if (hasSeenIntro && !forceIntro) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // 2. Reduced Motion Check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      finishIntro();
      return;
    }

    // 3. Smooth 60 FPS RAF Animation Loop
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const p = Math.min(1, elapsed / INTRO_DURATION_MS);
      
      setProgress(p);

      if (p < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        finishIntro();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const finishIntro = () => {
    setIsFadingOut(true);
    sessionStorage.setItem("travelIntroShown", "true");
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 400); // 400ms smooth fade transition
  };

  const handleSkip = () => {
    finishIntro();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-slate-950 flex flex-col justify-between overflow-hidden transition-opacity duration-500 ${
        isFadingOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Top Header Overlay: Brand Reveal & Skip Button */}
      <div className="relative z-20 pt-6 px-6 sm:px-10 flex items-center justify-between pointer-events-auto">
        
        {/* Brand Tagline Reveal */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/50 shadow-lg shadow-amber-500/20">
            <img
              src="/hanuman-logo.jpg"
              alt="Shri Kabariya Balaji Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-white font-sans tracking-tight">
              {CONFIG.BUSINESS_NAME_HI}
            </span>
            <span className="text-[11px] text-amber-400 font-medium">
              {CONFIG.TAGLINE_HI}
            </span>
          </div>
        </div>

        {/* Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700/80 text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md active:scale-95 transition-all"
        >
          <span>Skip Intro</span>
          <ChevronRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>

      {/* Main Stylized 3D Travel Map Viewport */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <TravelMap progress={progress} />
      </div>

      {/* Bottom Floating Banner: Journey Status Bar */}
      <div className="relative z-20 pb-8 px-6 text-center pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/95 border border-amber-500/30 text-xs text-slate-200 shadow-2xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>Starting Direct Journey Across Rajasthan • India</span>
        </div>
      </div>
    </div>
  );
}
