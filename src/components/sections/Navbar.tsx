"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2 }} // Delays slightly so the preloader finishes first
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl"
    >
      <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50 shadow-2xl">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-zinc-950 font-bold text-xs tracking-tighter">RAR</span>
          </div>
          <span className="hidden md:block font-mono text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
            Architect
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-xs font-mono uppercase tracking-widest text-zinc-200 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-xs font-mono uppercase tracking-widest text-zinc-200 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Availability Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-full border border-zinc-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
            Available
          </span>
        </div>

      </nav>
    </motion.div>
  );
}