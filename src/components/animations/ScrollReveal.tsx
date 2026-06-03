"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// We are adding 'width' to the allowed TypeScript interface
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  width?: "fit-content" | "100%" | string; 
}

// We destructure 'width' and give it a default value so it doesn't break older components
export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "", 
  width = "fit-content" 
}: ScrollRevealProps) {
  return (
    <motion.div
      style={{ width }} // This securely applies the inline width to the animated container
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