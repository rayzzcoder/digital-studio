import Link from "next/link";

export default function Navbar() {
  return (
    // fixed, z-50 keeps it on top. mix-blend-difference inverts colors dynamically.
    <header className="fixed top-0 w-full z-50 mix-blend-difference px-8 md:px-24 py-8 pointer-events-none">
      <nav className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* Your Logo / Name */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          RAJA ABDUL RAFAY<span className="font-serif italic text-zinc-400">©</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest text-zinc-400 hidden md:flex">
          <Link href="#work" className="hover:text-white transition-colors duration-300">
            Work
          </Link>
          <Link href="#expertise" className="hover:text-white transition-colors duration-300">
            Expertise
          </Link>
          <Link href="#about" className="hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </div>
        
      </nav>
    </header>
  );
}