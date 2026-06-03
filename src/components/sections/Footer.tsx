"use client";

import MagneticButton from "../ui/MagneticButton";
import ScrollReveal from "../animations/ScrollReveal";

export default function Footer() {
  const email = "rjabdrafay@gmail.com"; 
  const subject = "Project Inquiry: High-End Web Architecture";
  const body = 
    "Hi Raja,%0D%0A%0D%0A" +
    "I just went through your portfolio and I am very interested in collaborating. We are looking to elevate our digital presence and need a high-performance web experience.%0D%0A%0D%0A" +
    "Could we schedule a quick chat to discuss our goals and your availability?%0D%0A%0D%0A" +
    "Best regards,%0D%0A" +
    "[Your Name / Company]";

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  const calendlyLink = "https://calendly.com/rjabdrafay"; 

  return (
    <footer id="contact" className="bg-zinc-950 text-white relative overflow-hidden pt-32 pb-8 px-6 md:px-12 border-t border-zinc-900">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] bg-emerald-500/5 blur-[120px] rounded-t-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[40vh]">
        
        {/* Top Section: The Stacked Layout */}
        <div className="flex flex-col gap-10 md:gap-16 mb-24">
          
          <ScrollReveal>
            {/* Using fluid viewport width (vw) ensures the text dynamically shrinks on smaller laptops so it never overflows */}
            <h2 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8rem] font-bold tracking-tighter leading-[0.85] m-0">
              LET'S<br/>
              <span className="text-zinc-700 hover:text-white transition-colors duration-700">COLLABORATE.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 w-full">
            <MagneticButton>
              <a 
                href={mailtoLink}
                className="block w-full sm:w-[260px] bg-white text-zinc-950 font-mono uppercase tracking-widest text-xs px-8 py-5 rounded-full hover:bg-emerald-400 transition-colors duration-500 text-center font-bold"
              >
                Start a Project
              </a>
            </MagneticButton>

            <MagneticButton>
              <a 
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full sm:w-[260px] bg-transparent border border-zinc-800 text-zinc-300 font-mono uppercase tracking-widest text-xs px-8 py-5 rounded-full hover:border-zinc-500 hover:text-white transition-colors duration-500 text-center"
              >
                Book Intro Call
              </a>
            </MagneticButton>
          </ScrollReveal>
          
        </div>

        {/* Bottom Section: The System Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t border-zinc-800/50 pt-8 items-end">
          
          {/* Left: Global Location & Status */}
          <div className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-zinc-600">Operating System</span>
            <span className="text-zinc-400">Rawalpindi, PK (UTC+5)</span>
            <span className="mt-2 text-emerald-500 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Available for remote work
            </span>
          </div>

          {/* Center: The CLI Hint */}
          <div className="flex md:justify-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-700 hover:text-emerald-400 transition-colors duration-500 cursor-none">
              System_Node_Active. [Type 'nids']
            </span>
          </div>

          {/* Right: Social Architecture */}
          <div className="flex flex-wrap gap-6 md:justify-end font-mono text-[10px] uppercase tracking-widest">
            <a href="https://www.linkedin.com/in/raja-abdul-rafay-5a84902a8/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/rayzzcoder" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300">GitHub</a>
            <a href="https://www.instagram.com/rafay.irl/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors duration-300">Instagram</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}