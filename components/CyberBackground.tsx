"use client";

import React from "react";

export default function CyberBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. GLOWING RADIAL GRADIENT BACKDROP */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* 2. PERSPECTIVE 3D CYBER GRID */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(46, 107, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46, 107, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)"
        }}
      />

      {/* 3. RADAR SCAN LINE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-[15%] w-full animate-[scan_8s_ease-in-out_infinite]" />

      {/* 4. SLOWLY FLOATING DUST PARTICLES */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/40 blur-[1px] animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 8) + 5}%`,
              left: `${(i * 7) + 3}%`,
              animationDuration: `${(i % 4) + 3}s`,
            }}
          />
        ))}
      </div>

      {/* 5. VIGNETTE DEPTH EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A1224_90%)]" />
    </div>
  );
}