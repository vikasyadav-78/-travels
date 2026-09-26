"use client";

import React from "react";

interface AnimatedRouteProps {
  pathD: string;
}

export default function AnimatedRoute({ pathD }: AnimatedRouteProps) {
  return (
    <g className="overflow-visible">
      {/* Background Outer Ambient Glow Line */}
      <path
        d={pathD}
        fill="none"
        stroke="#f59e0b"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.25"
        className="filter blur-md"
      />

      {/* Secondary Saffron Neon Glow Stroke */}
      <path
        d={pathD}
        fill="none"
        stroke="#d97706"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
        className="filter blur-sm"
      />

      {/* Main Animated Glowing Route Path */}
      <path
        d={pathD}
        fill="none"
        stroke="#fbbf24"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        className="animate-draw-route"
      />

      {/* Pulsing Road Waypoint Dots */}
      <path
        d={pathD}
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeDasharray="4 16"
        strokeLinecap="round"
        opacity="0.8"
      />
    </g>
  );
}
