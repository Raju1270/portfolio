"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";

export function HorizontalHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 }); // After loading screen

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  const handleExplore = () => {
    gsap.to(window, {
      scrollTo: { y: window.innerHeight },
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center text-white z-20">
      <div className="text-center max-w-4xl px-8">
        <motion.h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          style={{ opacity: 0 }}
        >
          <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            RAJU
          </span>
          <span className="block text-5xl md:text-7xl mt-2 text-white/90">
            MAURYA
          </span>
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
          style={{ opacity: 0 }}
        >
          Creative Developer & Digital Artist
          <br />
          <span className="text-lg text-white/60">
            Crafting award-winning digital experiences
          </span>
        </motion.p>

        <motion.div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ opacity: 0 }}
        >
          <motion.button
            onClick={handleExplore}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-medium hover:border-white/60 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <motion.p
            className="text-white/60 text-sm mt-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
