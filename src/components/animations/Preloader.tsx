"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Completely removes the component from the DOM after the animation finishes
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
      className="fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center pointer-events-none"
    >
      <div className="overflow-hidden">
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="block font-mono text-sm md:text-base uppercase tracking-widest text-zinc-300"
        >
          Raja Abdul Rafay © 2026
        </motion.span>
      </div>
    </motion.div>
  );
}