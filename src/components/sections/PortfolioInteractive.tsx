"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techData = {
  nextjs: {
    title: "Next.js App Router",
    metric: "100",
    label: "Performance Score",
    desc: "Utilizing React Server Components and dynamic routing to ensure zero layout shift and instantaneous page loads."
  },
  framer: {
    title: "Framer Motion",
    metric: "60",
    label: "Frames Per Second",
    desc: "Hardware-accelerated animations using custom cubic-bezier easing curves to create fluid, premium spatial transitions."
  },
  tailwind: {
    title: "Tailwind CSS",
    metric: "12kb",
    label: "CSS Payload",
    desc: "Utility-first styling compiling down to absolute minimum file sizes, ensuring the browser renders the UI without blocking."
  }
};

type TechKey = keyof typeof techData;

export default function PortfolioInteractive() {
  const [active, setActive] = useState<TechKey>("nextjs");

  return (
    <div className="w-full bg-zinc-900 text-white rounded-2xl overflow-hidden relative min-h-[500px] flex flex-col md:flex-row border border-zinc-800">
      
      {/* Sidebar Navigation */}
      <div className="w-full md:w-1/3 bg-zinc-950 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col gap-4">
        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Architecture</h3>
        
        {(Object.keys(techData) as TechKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`text-left px-6 py-4 rounded-xl text-sm font-mono uppercase tracking-widest transition-all duration-300 ${
              active === key 
                ? "bg-white text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                : "bg-zinc-900 text-zinc-500 hover:text-white"
            }`}
          >
            {key.replace("js", ".js")}
          </button>
        ))}
      </div>

      {/* Dynamic Content Display */}
      <div className="w-full md:w-2/3 p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full"
          >
            <div className="flex items-end gap-4 mb-6 border-b border-zinc-800 pb-6">
              <span className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                {techData[active].metric}
              </span>
              <span className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-2">
                {techData[active].label}
              </span>
            </div>
            
            <h4 className="text-2xl font-medium tracking-tight mb-4 text-white">
              {techData[active].title}
            </h4>
            
            <p className="text-zinc-400 leading-relaxed max-w-md">
              {techData[active].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}