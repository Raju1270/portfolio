"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";

const sections = [
  { name: "Home", id: 0 },
  { name: "About", id: 1 },
  { name: "Work", id: 2 },
  { name: "Contact", id: 3 },
];

export function HorizontalNavigation() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3000); // Show after loading
  }, []);

  const scrollToSection = (sectionId: number) => {
    // Trigger page transition
    window.dispatchEvent(new CustomEvent('pageTransition'));
    
    setTimeout(() => {
      const progress = sectionId / 3; // 0 to 1
      gsap.to(window, {
        scrollTo: { y: progress * window.innerHeight * 3 },
        duration: 1.5,
        ease: "power2.inOut",
      });
      setActiveSection(sectionId);
    }, 400);
  };

  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-30"
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <motion.div
            className="text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            RM
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            {sections.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index <= activeSection ? "bg-white" : "bg-white/30"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
