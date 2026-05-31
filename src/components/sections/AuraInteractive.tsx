"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AuraInteractive() {
  const [position, setPosition] = useState(50); // Start at 50%
  const containerRef = useRef<HTMLDivElement>(null);

  // onPointerMove handles BOTH mouse movements on desktop and touches on mobile flawlessly
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate position relative to the container
    const x = e.clientX - rect.left;
    // Keep the percentage locked between 0 and 100
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Label Header */}
      <div className="w-full flex justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 px-4">
        <span>Site: Berlin Penthouse</span>
        <span>Interaction: Media Slider</span>
      </div>

      {/* Interactive Container */}
      <div 
        ref={containerRef}
        onPointerMove={handlePointerMove}
        className="relative w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden cursor-ew-resize group select-none touch-none"
      >
        
        {/* ==========================================
            IMAGE 1: THE "AFTER" STATE (Base Layer)
            Using a premium warm gradient to simulate a finished interior
        ========================================== */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-end pr-12">
           <span className="text-stone-700 font-mono tracking-widest text-xl opacity-50">FINAL RENDER</span>
        </div>

        {/* ==========================================
            IMAGE 2: THE "BEFORE" STATE (Top Layer)
            Using clip-path to dynamically reveal the layer underneath
        ========================================== */}
        <div 
          className="absolute inset-0 w-full h-full bg-blue-900 flex items-center pl-12 border-r border-white/50 shadow-[10px_0_50px_rgba(0,0,0,0.5)]"
          style={{ 
            clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
            // Creating a CSS Blueprint Grid effect
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        >
          <span className="text-blue-400 font-mono tracking-widest text-xl opacity-50">BLUEPRINT</span>
        </div>

        {/* ==========================================
            THE SLIDER HANDLE
            Follows the exact percentage of the state
        ========================================== */}
        <motion.div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] flex items-center justify-center z-10"
          style={{ left: `${position}%` }}
        >
          {/* Pill Badge */}
          <div className="bg-white text-zinc-950 font-mono text-[10px] uppercase tracking-widest px-3 py-2 rounded-full absolute transition-transform duration-300 group-hover:scale-110 whitespace-nowrap">
            Drag
          </div>
        </motion.div>

      </div>

      {/* Instructions */}
      <p className="mt-6 text-sm text-zinc-500 font-light text-center max-w-md">
        Move your cursor across the image to dynamically render the spatial transformation. Built with React State and CSS Clip-Path to maintain 60FPS.
      </p>

    </div>
  );
}