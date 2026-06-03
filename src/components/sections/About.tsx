import ScrollReveal from "../animations/ScrollReveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 text-white py-32 px-8 md:px-24">
      {/* 1. We switch to CSS Grid for stricter width control */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* 2. The Cinematic Portrait (Takes up 5 columns out of 12) */}
        <div className="md:col-span-5 w-full flex justify-center md:justify-start">
          <ScrollReveal width="100%">
            {/* 3. Changed max-w-sm to max-w-md to allow the image to grow larger */}
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <Image 
                src="/images/me.webp" 
                fill 
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Raja Abdul Rafay | Digital Architect" 
              />
              
              {/* Status Badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Accepting New Clients
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 4. The Bio (Takes up the remaining 7 columns) */}
        <div className="md:col-span-7 w-full">
          <ScrollReveal delay={0.2} width="100%">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              The Human Behind <br className="hidden lg:block"/> the Code.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} width="100%">
            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-6">
              I approach digital architecture with the same relentless discipline I apply to high-pace bowling and rigorous physical conditioning. Whether I am hitting 140 kmph on the pitch or optimizing a Next.js component to run at a flawless 60 frames per second, my focus is entirely on absolute performance.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} width="100%">
            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-12">
              I am an Information Technology engineer who bridges the gap between secure, complex system architecture and fluid, high-end visual design. I build digital experiences for brands that refuse to settle for average.
            </p>
          </ScrollReveal>

          {/* Signature / Detail */}
          <ScrollReveal delay={0.5} width="100%">
            <div className="font-serif italic text-3xl lg:text-4xl text-zinc-300">
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