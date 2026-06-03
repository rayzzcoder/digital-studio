"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const secretCode = "nids";
  
  useEffect(() => {
    let typedKeys = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      typedKeys += e.key.toLowerCase();
      // Keep only the last 4 characters
      if (typedKeys.length > secretCode.length) {
        typedKeys = typedKeys.slice(-secretCode.length);
      }
      
      if (typedKeys === secretCode) {
        setIsOpen(true);
        startLogStream();
      }

      // Close terminal on Escape key
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const startLogStream = () => {
    const mockLogs = [
      "[SYSTEM] Initializing Deep Packet Inspection module...",
      "[ALERT] Suspicious ARP broadcast detected on interface eth0",
      "[NIDS] Flagging MAC address spoofing attempt. Source: 00:1A:2B:3C:4D:5E",
      "[SCAPY] Intercepting malformed TCP packets. Dropping payload...",
      "[NETWORK] Rerouting traffic through secure tunnel.",
      "[SUCCESS] Threat mitigated. Returning to standby mode."
    ];

    setLogs([]); // Reset logs
    
    mockLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, index * 1200); // Streams a new line every 1.2 seconds
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed top-0 left-0 w-full md:w-[600px] md:left-1/2 md:-translate-x-1/2 h-[400px] bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-b-xl shadow-2xl z-[99999] p-6 font-mono overflow-hidden"
        >
          <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-4">
            <span className="text-emerald-500 text-xs tracking-widest">root@rar-architect:~</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white text-xs uppercase"
            >
              [CLOSE]
            </button>
          </div>
          <div className="flex flex-col gap-2 text-xs md:text-sm text-emerald-400">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {log}
              </motion.div>
            ))}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-emerald-400 mt-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}