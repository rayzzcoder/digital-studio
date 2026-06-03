import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Expertise from "@/components/sections/Expertise";
import About from "@/components/sections/About";
import GlobalGreeting from "@/components/animations/GlobalGreeting";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. THE HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20">
        <div className="max-w-7xl mx-auto w-full z-10">
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-6">
              DIGITAL <br />
              <span className="text-zinc-600">ARCHITECT.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
          <GlobalGreeting />
            <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl font-light mb-12">
            I'm Raja Abdul Rafay. I engineer high-performance, visually immersive web experiences for global brands that demand excellence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <a 
              href="#work" 
              className="inline-block border border-zinc-700 hover:border-zinc-300 text-zinc-300 hover:text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-mono transition-all duration-300"
            >
              Explore Work ↓
            </a>
          </ScrollReveal>

        </div>
        
        {/* Premium Ambient Glow Effect */}
        <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      </section>

      {/* 2. THE SHOWROOM GRID */}
      <div id="work">
        <PortfolioGrid />
      </div>

      {/* 3. THE CAPABILITY MATRIX */}
      <Expertise />

      <Work />

      {/* 4. About Me */}
      <About />

    </div>
  );
}