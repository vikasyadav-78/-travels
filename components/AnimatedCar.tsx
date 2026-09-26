"use client";

import React from "react";

export default function AnimatedCar() {
  return (
    <div className="relative w-12 h-6 flex items-center justify-center filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]">
      {/* Front Headlights Beam Effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-8 bg-gradient-to-r from-amber-400/80 via-amber-300/30 to-transparent blur-sm rounded-r-full pointer-events-none transform translate-x-12" />

      {/* Underbody Road Shadow Glow */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-3 bg-amber-500/40 rounded-full blur-md" />

      {/* Detailed Top-Down / 3/4 Perspective Sedan Car SVG */}
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full text-slate-900 overflow-visible"
        aria-label="Moving Cab Vehicle"
      >
        <defs>
          {/* Metallic Body Gradient */}
          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="40%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Roof Glass Gradient */}
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Outer Shadow */}
        <ellipse cx="50" cy="42" rx="42" ry="6" fill="#000000" opacity="0.6" filter="blur(2px)" />

        {/* Main Aerodynamic Car Body */}
        <path
          d="M 5 28 C 5 20, 15 15, 28 14 L 40 10 C 50 8, 70 8, 80 14 L 92 20 C 97 23, 97 30, 92 34 L 80 38 C 70 42, 50 42, 40 40 L 28 36 C 15 35, 5 32, 5 28 Z"
          fill="url(#carBodyGrad)"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />

        {/* Car Cabin Roof Glass */}
        <path
          d="M 32 16 L 45 12 C 55 11, 68 11, 74 16 L 78 22 C 78 26, 74 30, 68 31 L 45 31 C 35 30, 32 26, 32 22 Z"
          fill="url(#glassGrad)"
          stroke="#0284c7"
          strokeWidth="1"
        />

        {/* Headlights Light Bulbs */}
        <circle cx="94" cy="21" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #fbbf24)" />
        <circle cx="94" cy="31" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #fbbf24)" />

        {/* Taillights */}
        <rect x="4" y="22" width="3" height="4" rx="1" fill="#ef4444" filter="drop-shadow(0 0 3px #ef4444)" />
        <rect x="4" y="28" width="3" height="4" rx="1" fill="#ef4444" filter="drop-shadow(0 0 3px #ef4444)" />

        {/* Wheels */}
        <rect x="22" y="10" width="12" height="4" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        <rect x="22" y="38" width="12" height="4" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        <rect x="68" y="10" width="12" height="4" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
        <rect x="68" y="38" width="12" height="4" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
      </svg>
    </div>
  );
}
