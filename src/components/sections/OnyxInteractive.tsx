"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OnyxInteractive() {
  const [step, setStep] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  // The Quiz Flow
  const handleSelection = () => {
    if (step < 2) setStep(step + 1);
  };

  const addToCart = () => {
    setCartItems([...cartItems, "Ethiopian Yirgacheffe - Light Roast"]);
    setCartOpen(true);
  };

  return (
    <div className="w-full bg-[#E5E0D8] text-zinc-900 rounded-2xl overflow-hidden relative min-h-[500px] flex items-center justify-center font-sans">
      
      {/* Header / Cart Toggle */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-black/10">
        <span className="font-bold tracking-tighter text-xl uppercase">Onyx.</span>
        <button 
          onClick={() => setCartOpen(true)}
          className="text-sm font-mono uppercase tracking-widest hover:opacity-50 transition-opacity"
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {/* Quiz Container */}
      <div className="max-w-md w-full p-8 text-center mt-12">
        <AnimatePresence mode="wait">
          
          {/* STEP 0: Start */}
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h3 className="text-3xl font-medium mb-4">Find Your Perfect Pour.</h3>
              <p className="text-black/60 mb-8">Answer two questions to discover your ideal small-batch roast.</p>
              <button onClick={handleSelection} className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                Begin Quiz
              </button>
            </motion.div>
          )}

          {/* STEP 1: Question */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <h3 className="text-2xl font-medium mb-8">How do you take your coffee?</h3>
              <div className="flex flex-col gap-3">
                <button onClick={handleSelection} className="border border-black/20 py-4 rounded-xl hover:border-black transition-colors">Black & Bright</button>
                <button onClick={handleSelection} className="border border-black/20 py-4 rounded-xl hover:border-black transition-colors">With a splash of milk</button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Result & Add to Cart */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <span className="text-xs font-mono uppercase tracking-widest text-black/50 mb-2 block">Your Match</span>
              <h3 className="text-3xl font-medium mb-2">Ethiopian Yirgacheffe</h3>
              <p className="text-black/60 mb-8 text-sm">Notes of Jasmine, Bergamot, and Honey. A vibrant, light roast perfect for black coffee drinkers.</p>
              <button onClick={addToCart} className="bg-zinc-900 text-white px-8 py-3 w-full rounded-full text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                Add to Cart - $24
              </button>
              <button onClick={() => setStep(0)} className="mt-4 text-xs font-mono uppercase tracking-widest text-black/40 hover:text-black">
                Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slide-out Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"
            />
            {/* Cart Panel */}
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full md:w-96 h-full bg-white z-20 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-black/10 flex justify-between items-center">
                <h4 className="font-medium text-lg">Your Cart</h4>
                <button onClick={() => setCartOpen(false)} className="text-xl leading-none">&times;</button>
              </div>
              
              <div className="p-6 flex-grow overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-black/50 text-sm">Your cart is empty.</p>
                ) : (
                  cartItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-center mb-4 text-sm font-medium">
                      <span>{item}</span>
                      <span>$24</span>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-black/10">
                  <button className="bg-zinc-900 text-white px-8 py-4 w-full text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}