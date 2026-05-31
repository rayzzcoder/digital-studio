import ScrollReveal from "../animations/ScrollReveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 text-white py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* The Cinematic Portrait */}
        <div className="w-full md:w-1/2">
          <ScrollReveal>
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800 group">
              <Image 
                src="/images/me.webp" 
                alt="Portrait"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Status Badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Accepting New Clients
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The Bio */}
        <div className="w-full md:w-1/2">
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              The Human Behind the Code.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I approach digital architecture with the same relentless discipline I apply to high-pace bowling and rigorous physical conditioning. Whether I am hitting 140 kmph on the pitch or optimizing a Next.js component to run at a flawless 60 frames per second, my focus is entirely on absolute performance.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              I am an Information Technology engineer who bridges the gap between secure, complex system architecture and fluid, high-end visual design. I build digital experiences for brands that refuse to settle for average.
            </p>
          </ScrollReveal>

          {/* Signature / Detail */}
          <ScrollReveal delay={0.5}>
            <div className="font-serif italic text-3xl text-zinc-300">
              Raja Abdul Rafay
            </div>
            <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest mt-2">
              Lead Engineer & Architect
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}