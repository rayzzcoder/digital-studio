import ScrollReveal from "../animations/ScrollReveal";
import Link from "next/link"; 
import Image from "next/image";

const projects = [
  { id: 1, title: "The Digital Architect", category: "Portfolio", slug: "portfolio", image: "/images/portfolio.webp" },
  { id: 2, title: "Onyx Roasters", category: "E-Commerce", slug: "onyx-roasters", image: "/images/onyx.webp" },
  { id: 3, title: "Aura Spaces", category: "WebGL / Media", slug: "aura-spaces", image: "/images/aura.webp" },
]

export default function PortfolioGrid() {
  return (
    <section className="bg-zinc-950 text-white min-h-screen py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Selected Works
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-zinc-400 text-lg md:text-xl mb-16 max-w-2xl">
            A curated collection of digital experiences built for forward-thinking brands.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              {/* Wrap the entire card in a Link component */}
              <Link href={`/work/${project.slug}`} className="group block cursor-pointer">
                
                <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden rounded-lg mb-6">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>  
                
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}