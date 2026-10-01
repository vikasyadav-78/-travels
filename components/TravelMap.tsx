"use client";

import React from "react";
import { Car, MapPin, ShieldCheck, Navigation, Sparkles } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface TravelMapProps {
  progress: number; // 0 to 1
}

export default function TravelMap({ progress }: TravelMapProps) {
  const percentage = Math.round(progress * 100);

  // Milestones along the road
  const milestones = [
    { name: "Jaipur (HQ)", pos: 10 },
    { name: "Ajmer", pos: 35 },
    { name: "Khatu Shyam", pos: 60 },
    { name: "Delhi", pos: 88 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Highway Night Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/realistic-cab.jpg"
          alt="Night Highway Background"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.2] blur-[2px] scale-105"
        />

        {/* Dynamic Road Lane Streaks Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950/90" />
      </div>

      {/* Center Cinematic Container */}
      <div className="relative z-20 max-w-2xl w-full mx-4 space-y-6">
        
        {/* Glassmorphism Header HUD */}
        <div className="bg-slate-950/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border-2 border-amber-500/50 shadow-2xl text-white text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-extrabold tracking-wider uppercase shadow-lg">
            <Car className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Live Highway Cab Journey • 24x7 Active</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl sm:text-4xl font-black text-white font-sans tracking-tight">
              {CONFIG.BUSINESS_NAME_HI}
            </h2>
            <p className="text-xs sm:text-sm text-amber-400 font-bold tracking-wide">
              {CONFIG.BUSINESS_NAME_EN} • {CONFIG.LOCATION}
            </p>
          </div>

          {/* REAL MOVING CAR ON THE HIGHWAY ROAD visual viewport */}
          <div className="mt-6 bg-slate-900/90 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-6 relative overflow-hidden shadow-inner">
            
            {/* Highway Road Asphalt Track */}
            <div className="relative h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center px-4">
              
              {/* Moving Lane Dashes */}
              <div
                className="absolute inset-0 flex items-center justify-between opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #f59e0b 50%, transparent 50%)",
                  backgroundSize: "40px 4px",
                  backgroundRepeat: "repeat-x",
                  backgroundPosition: `${progress * -400}px center`,
                }}
              />

              {/* Milestone Markers */}
              {milestones.map((m) => (
                <div
                  key={m.name}
                  className="absolute flex flex-col items-center z-10 transition-all"
                  style={{ left: `${m.pos}%` }}
                >
                  <div
                    className={`w-2 h-2 rounded-full mb-1 ${
                      progress * 100 >= m.pos
                        ? "bg-amber-400 ring-4 ring-amber-500/30 scale-125"
                        : "bg-slate-700"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-bold ${
                      progress * 100 >= m.pos ? "text-amber-300" : "text-slate-500"
                    }`}
                  >
                    {m.name}
                  </span>
                </div>
              ))}

              {/* REAL MOVING CAR ON ROAD */}
              <div
                className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center transition-all duration-75 pointer-events-none"
                style={{ left: `calc(${Math.min(90, Math.max(5, progress * 88))}% - 28px)` }}
              >
                {/* Headlight Beam Cone */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-28 h-12 bg-gradient-to-r from-amber-300/60 via-amber-400/20 to-transparent blur-md rounded-r-full pointer-events-none" />

                {/* Real Moving Cab Card Visual */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 px-3 py-1.5 rounded-xl shadow-xl border border-amber-300 flex items-center gap-1.5 animate-bounce">
                  <Car className="w-5 h-5 fill-slate-950 stroke-[2.5]" />
                  <span className="text-[11px] font-black tracking-wider uppercase whitespace-nowrap">
                    CAB RJ-14
                  </span>
                </div>
              </div>

            </div>

            {/* Live Progress Bar & Speed Status */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                <span>Highway Speed: <strong>80 KM/H</strong></span>
              </span>
              <span className="text-amber-400 font-mono font-black text-sm">
                {percentage}% Completed
              </span>
            </div>

            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-full transition-all duration-75 shadow-md shadow-amber-500/50"
                style={{ width: `${percentage}%` }}
              />
            </div>

          </div>

          {/* Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-slate-300 text-xs font-semibold">
            <div className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Driver Profile</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
            <div className="flex items-center gap-1 text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>Maruti Dzire & Ertiga AC Cabs</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
