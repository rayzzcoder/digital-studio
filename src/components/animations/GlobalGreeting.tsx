"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello.",      // English
  "Hallo.",      // German
  "Bonjour.",    // French
  "Hola.",       // Spanish
  "Ciao.",       // Italian
];

export default function GlobalGreeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2500); // Changes every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-hidden h-[1.2em] relative">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 70, 
            damping: 15,
            mass: 0.8
          }}
          className="text-zinc-400"
        >
          {greetings[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}