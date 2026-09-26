"use client";

import React from "react";
import AnimatedRoute from "./AnimatedRoute";
import AnimatedCar from "./AnimatedCar";

interface TravelMapProps {
  progress: number; // 0 to 1
}

export default function TravelMap({ progress }: TravelMapProps) {
  // SVG Route Path coordinates for Jaipur -> Ajmer -> Udaipur -> Rajasthan -> Delhi Highway
  const mainRoutePath =
    "M 180 340 C 260 290, 320 310, 420 230 C 500 160, 580 180, 680 140 C 760 110, 840 130, 920 90";

  // Cities mapping with relative SVG coordinates
  const cities = [
    { name: "Jaipur (HQ)", x: 420, y: 230, main: true },
    { name: "Delhi", x: 920, y: 90, main: true },
    { name: "Ajmer", x: 320, y: 310, main: false },
    { name: "Udaipur", x: 180, y: 340, main: false },
    { name: "Jodhpur", x: 220, y: 240, main: false },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e3a8a_0%,#030712_70%)] opacity-80 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* SVG Map Container */}
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full max-w-6xl max-h-[85vh] object-contain relative z-10 filter drop-shadow-2xl"
      >
        <defs>
          {/* Subtle Map Fill Gradient */}
          <linearGradient id="mapFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.6" />
          </linearGradient>

          {/* City Glow Filter */}
          <filter id="glowPin" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* India Map Silhouette Backdrop */}
        <path
          d="M 120 420 C 80 350, 100 220, 200 120 C 350 50, 600 30, 850 60 C 950 150, 940 300, 850 420 C 700 480, 300 480, 120 420 Z"
          fill="url(#mapFill)"
          stroke="#1e3a8a"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.4"
        />

        {/* Rajasthan Highlight Boundary Region */}
        <path
          d="M 140 370 C 130 300, 180 200, 280 180 C 400 160, 480 200, 520 280 C 500 380, 340 400, 140 370 Z"
          fill="#d97706"
          fillOpacity="0.08"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className="animate-pulse"
        />

        {/* Region Tag */}
        <text
          x="280"
          y="280"
          fill="#f59e0b"
          fontSize="14"
          fontWeight="bold"
          letterSpacing="4"
          opacity="0.5"
          className="uppercase tracking-widest font-mono select-none"
        >
          Rajasthan • India
        </text>

        {/* Glowing Saffron Route Path */}
        <AnimatedRoute pathD={mainRoutePath} />

        {/* City Marker Nodes */}
        {cities.map((city, idx) => (
          <g key={idx} transform={`translate(${city.x}, ${city.y})`}>
            {/* Outer Pulse */}
            <circle
              r={city.main ? "12" : "8"}
              fill={city.main ? "#f59e0b" : "#38bdf8"}
              opacity="0.3"
              className="animate-ping"
            />
            {/* Inner Core */}
            <circle
              r={city.main ? "6" : "4"}
              fill={city.main ? "#fbbf24" : "#38bdf8"}
              stroke="#0f172a"
              strokeWidth="2"
              filter="url(#glowPin)"
            />
            {/* Label */}
            <text
              y={city.main ? "-14" : "18"}
              x="0"
              textAnchor="middle"
              fill={city.main ? "#fef08a" : "#94a3b8"}
              fontSize={city.main ? "13" : "11"}
              fontWeight={city.main ? "bold" : "600"}
              className="font-sans select-none drop-shadow-md"
            >
              {city.name}
            </text>
          </g>
        ))}

        {/* Foreign CSS Object-Path Moving Vehicle along SVG Route */}
        <foreignObject
          x="-30"
          y="-15"
          width="60"
          height="30"
          className="overflow-visible pointer-events-none"
          style={{
            offsetPath: `path("${mainRoutePath}")`,
            offsetDistance: `${Math.min(100, Math.max(0, progress * 100))}%`,
            offsetRotate: "auto",
            transition: "offset-distance 0.05s linear",
          }}
        >
          <AnimatedCar />
        </foreignObject>
      </svg>
    </div>
  );
}
