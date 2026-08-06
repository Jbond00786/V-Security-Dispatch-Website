"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#08111F]">
      
      {/* 1. SOFT VIGNETTE OVERLAY (Darkens edges for deep focus) */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 40%, #040811 100%)",
        }}
      />

      {/* 2. ANIMATED DEEP BLUE RADIAL GRADIENTS */}
      <motion.div
        className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #1E40AF 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.2, 0.1],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3. MOVING PERSPECTIVE CYBER GRID */}
      <motion.div
        className="absolute inset-0 opacity-[0.07] z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPositionY: [0, 40],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 4. MOVING LIGHT BEAMS (Command Center Laser Sweeps) */}
      <motion.div
        className="absolute top-0 left-1/4 w-[2px] h-[400px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent z-10"
        animate={{
          y: ["-100%", "250%"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-[2px] h-[500px] bg-gradient-to-b from-transparent via-blue-500/25 to-transparent z-10"
        animate={{
          y: ["-100%", "220%"],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />

      {/* 5. SUBTLE GLOWING PARTICLES */}
      <div className="absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/40 blur-[1px]"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 8) + 5}%`,
              left: `${(i * 7) + 6}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

    </div>
  );
}