"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  width?: "fit-content" | "100%" | string; 
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "", 
  width = "100%" // <--- This is the master fix. Changed from "fit-content" to "100%"
}: ScrollRevealProps) {
  return (
    <motion.div
      style={{ width }} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}