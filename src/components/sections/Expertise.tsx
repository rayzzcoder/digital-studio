import ScrollReveal from "../animations/ScrollReveal";

export default function Expertise() {
  return (
    <section id="expertise" className="bg-zinc-950 text-zinc-50 py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">
            The Capability Matrix.
          </h2>
        </ScrollReveal>

        {/* The Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Front-End (Wide) */}
          <ScrollReveal delay={0.1} width="100%">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-500 md:col-span-2">
              <div>
                <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">01 / The Interface</span>
                <h3 className="text-3xl font-medium tracking-tight mt-4 mb-4">Immersive Front-End</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  Delivering lightning-fast, visually explosive web experiences. Utilizing modern rendering architectures to ensure 60FPS animations without sacrificing SEO or performance metrics.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-zinc-300">
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Next.js</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">React</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Tailwind CSS</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Framer Motion</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Backend (Square) */}
          <ScrollReveal delay={0.2} width="100%">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-500">
              <div>
                <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">02 / The Engine</span>
                <h3 className="text-3xl font-medium tracking-tight mt-4 mb-4">Scalable Architecture</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Building robust, scalable backends and seamless data automation pipelines that power complex web applications behind the scenes.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-zinc-300">
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Node.js</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">MongoDB</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">PHP / MySQL</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Security (Square) */}
          <ScrollReveal delay={0.3} width="100%">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-500">
              <div>
                <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">03 / The Shield</span>
                <h3 className="text-3xl font-medium tracking-tight mt-4 mb-4">Security & Integrity</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Implementing strict security protocols, vulnerability monitoring, and network-level awareness to ensure digital assets remain impenetrable.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-zinc-300">
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Network Admin</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Cryptography</span>
                <span className="bg-zinc-800 px-4 py-2 rounded-full">Intrusion Detection</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Strategy (Wide) */}
          <ScrollReveal delay={0.4} width="100%">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-500 md:col-span-2">
              <div>
                <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">04 / The Outcome</span>
                <h3 className="text-3xl font-medium tracking-tight mt-4 mb-4">Business Transformation</h3>
                <p className="text-zinc-400 leading-relaxed max-w-lg">
                  Beyond just writing code, I bridge the gap between technical execution and business goals. Whether it is modernizing a legacy system or launching a zero-to-one product, the focus is always on creating tangible digital value.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}