"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function ScrollReveal({ children, width = "100%", delay = 0 }: ScrollRevealProps) {
  return (
    <div style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        // 'once: true' ensures the animation doesn't annoyingly replay if they scroll up and down
        // 'margin: "-50px"' triggers the animation slightly after it enters the screen
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.22, 1, 0.36, 1] // The premium agency easing curve
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}