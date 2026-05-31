import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import OnyxInteractive from "@/components/sections/OnyxInteractive"; 
import AuraInteractive from "@/components/sections/AuraInteractive";
import PortfolioInteractive from "@/components/sections/PortfolioInteractive";

const projectData = {

  "portfolio": {
    title: "The Digital Architect",
    category: "Portfolio Architecture",
    description: "A high-performance personal digital studio. Engineered to establish premium brand authority through fluid motion design, asynchronous routing, and interactive state management.",
    role: "Full-Stack Engineer",
    timeline: "Ongoing",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "React"]
  },

  "onyx-roasters": {
    title: "Onyx Roasters",
    category: "E-Commerce Experience",
    description: "A hyper-premium, minimalist e-commerce platform for an artisan, small-batch coffee roaster. Built to maximize conversion through fluid state transitions and immersive brand storytelling.",
    role: "Full-Stack Developer",
    timeline: "4 Weeks",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Zustand"]
  },
  "aura-spaces": {
    title: "Aura Spaces",
    category: "Interactive Portfolio",
    description: "A highly visual, media-heavy digital environment for a contemporary architectural firm, focusing on WebGL interactions and flawless image optimization.",
    role: "Front-End Architect",
    timeline: "3 Weeks",
    tech: ["React", "GSAP", "Three.js", "Lenis Scroll"]
  }
};

// 1. Make the function async and update the params type to be a Promise
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params before trying to read the slug
  const resolvedParams = await params;
  
  // @ts-ignore - Ignoring typing for this quick data lookup
  const project = projectData[resolvedParams.slug];

  if (!project) {
    notFound(); 
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link href="/#work" className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-16">
          ← Back to Home
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{project.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Project Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-8 font-mono text-sm uppercase tracking-widest border-l border-zinc-800 pl-8">
            <ScrollReveal delay={0.2}>
              <div className="text-zinc-500 mb-2">Role</div>
              <div className="text-zinc-200">{project.role}</div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-zinc-500 mb-2">Timeline</div>
              <div className="text-zinc-200">{project.timeline}</div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-zinc-500 mb-2">Technologies</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="bg-zinc-900 px-3 py-1 rounded-full text-zinc-300 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Interactive Component Display */}
        <ScrollReveal delay={0.5}>
          {resolvedParams.slug === "portfolio" && (
            <PortfolioInteractive />
          )}

          {resolvedParams.slug === "onyx-roasters" && (
            <OnyxInteractive />
          )}
          
          {resolvedParams.slug === "aura-spaces" && (
            <AuraInteractive />
          )}
        </ScrollReveal>

      </div>
    </div>
  );
}