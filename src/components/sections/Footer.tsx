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
  
  // Add your future Calendly link here!
  const calendlyLink = "https://calendly.com/rjabdrafay"; 

  return (
    <footer id="contact" className="bg-zinc-950 text-white pt-32 pb-8 px-8 md:px-24 flex flex-col items-center relative overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-zinc-800/20 blur-[120px] rounded-t-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center border-b border-zinc-800 pb-24">
        <ScrollReveal>
          <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-12 text-center leading-none">
            LET'S <br /> COLLABORATE.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Dual Action Container */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            
            {/* Primary Action: Frictionless Email */}
            <MagneticButton>
              <a 
                href={mailtoLink}
                className="block bg-white text-zinc-950 font-mono uppercase tracking-widest text-sm px-12 py-6 rounded-full hover:bg-zinc-200 transition-colors duration-300 min-w-[250px] text-center"
              >
                Start a Project
              </a>
            </MagneticButton>

            {/* Secondary Action: Free Discovery Call */}
            <MagneticButton>
              <a 
                href="https://calendly.com/rjabdrafay"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-transparent border border-zinc-700 text-white font-mono uppercase tracking-widest text-sm px-12 py-6 rounded-full hover:border-white transition-colors duration-300 min-w-[250px] text-center"
              >
                Book Intro Call
              </a>
            </MagneticButton>

          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mt-8 text-zinc-500 font-mono text-xs uppercase tracking-widest">
        <div className="mb-4 md:mb-0">
          <p>Based in Rawalpindi, PK — Engineering for the World.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}