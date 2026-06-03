"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";

// We map out the projects so the component stays clean
const projects = [
  {
    title: "VibePlayer Engine",
    role: "Full-Stack Architecture",
    description: "A seamless, database-backed streaming application engineered for high-performance audio playback and fluid UI interactions.",
    image: "/images/project-vibe.webp", 
  },
  {
    title: "Clinical Scheduling Node",
    role: "Backend & Systems Design",
    description: "A secure, comprehensive appointment management architecture featuring full CRUD operations and relational database tracking.",
    image: "/images/project-medical.webp", 
  }
];

export default function Work() {
  return (
    <section id="work" className="bg-zinc-950 text-white py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-24 border-b border-zinc-800 pb-8">
            Selected Architecture.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// The Parallax Card Component
function ProjectCard({ project, index }: { project: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    // Switched from Flexbox to a strict 12-column Grid
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center group cursor-none">
      
      {/* The Image Container strictly takes up 7 columns out of 12 */}
      <div 
        ref={containerRef}
        className={`relative w-full aspect-video overflow-hidden rounded-xl border border-zinc-800 md:col-span-7 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700" />
      </div>

      {/* The Text Container strictly takes up the remaining 5 columns */}
      <div className={`md:col-span-5 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
        <ScrollReveal delay={0.2}>
          <div className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-4">
            {project.role}
          </div>
          <h3 className="text-3xl font-bold tracking-tight mb-6">
            {project.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <button className="flex items-center gap-4 text-sm font-mono uppercase tracking-widest hover:text-emerald-400 transition-colors group/btn">
            <span className="w-8 h-[1px] bg-zinc-600 group-hover/btn:bg-emerald-400 group-hover/btn:w-12 transition-all duration-300" />
            Inspect Architecture
          </button>
        </ScrollReveal>
      </div>
      
    </div>
  );
}