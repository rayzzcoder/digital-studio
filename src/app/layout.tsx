import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer"; 
import Preloader from "@/components/animations/Preloader";
import CustomCursor from "@/components/animations/CustomCursor";
import TerminalEasterEgg from "@/components/ui/TerminalEasterEgg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raja Abdul Rafay | Digital Architect",
  description: "Crafting high-performance digital experiences for forward-thinking brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased md:cursor-none`}>
        <CustomCursor />
        <TerminalEasterEgg />
        <Preloader />
        <Navbar />
        {/* Added flex layout to push the footer to the bottom */}
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}