"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleTransition = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 800);
    };

    // Listen for custom transition events
    window.addEventListener('pageTransition', handleTransition);
    return () => window.removeEventListener('pageTransition', handleTransition);
  }, []);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Sliding panels */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 w-full h-screen bg-black z-40"
              style={{ clipPath: `polygon(${i * 20}% 0%, ${(i + 1) * 20}% 0%, ${(i + 1) * 20}% 100%, ${i * 20}% 100%)` }}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          ))}
          
          {/* Center reveal */}
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(100% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="text-white text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="text-6xl font-bold mb-4">✦</div>
              <div className="text-xl">Transitioning...</div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
