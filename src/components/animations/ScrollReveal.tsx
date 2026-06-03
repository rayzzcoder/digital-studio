"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// 1. We add className as an optional string prop
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string; 
}

// 2. We destructure className and give it a default empty string
export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      // 3. We inject the custom className here
      className={className}
    >
      {children}
    </motion.div>
  );
}