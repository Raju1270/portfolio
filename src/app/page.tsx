
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HorizontalHero } from "@/components/awwwrd/horizontal-hero";
import { Scene3D } from "@/components/awwwrd/scene-3d";
import { ProjectsGrid } from "@/components/awwwrd/projects-grid";
import { AboutScene } from "@/components/awwwrd/about-scene";
import { ContactSection } from "@/components/awwwrd/contact-section";
import { PageTransition } from "@/components/awwwrd/page-transition";
import { HorizontalNavigation } from "@/components/awwwrd/horizontal-navigation";
import { LoadingScreen } from "@/components/awwwrd/loading-screen";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;
    
    if (!container || !sections) return;

    // Horizontal scroll setup
    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(sections, {
        xPercent: -75, // Scroll 75% to the left
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: "+=300%",
          anticipatePin: 1,
        }
      });

      return () => scrollTween.kill();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <LoadingScreen />
      <PageTransition />
      <HorizontalNavigation />
      
      <div ref={containerRef} className="h-screen overflow-hidden">
        <div 
          ref={sectionsRef}
          className="flex h-full w-[400vw]" // 4 sections, each 100vw
        >
          {/* Section 1: Hero with 3D */}
          <section className="w-screen h-full relative flex-shrink-0">
            <div className="absolute inset-0 z-10">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Suspense fallback={null}>
                  <Scene3D />
                </Suspense>
              </Canvas>
            </div>
            <div className="relative z-20">
              <HorizontalHero />
            </div>
          </section>

          {/* Section 2: About */}
          <section className="w-screen h-full relative flex-shrink-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
            <div className="absolute inset-0 z-10">
              <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <Suspense fallback={null}>
                  <AboutScene />
                </Suspense>
              </Canvas>
            </div>
            <div className="relative z-20 h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-8 text-center">
                <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Creative Developer
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  I craft award-winning digital experiences that push the boundaries of web technology.
                  With expertise in 3D graphics, interactive animations, and cutting-edge frameworks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Projects */}
          <section className="w-screen h-full relative flex-shrink-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
            <ProjectsGrid />
          </section>

          {/* Section 4: Contact */}
          <section className="w-screen h-full relative flex-shrink-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
            <ContactSection />
          </section>
        </div>
      </div>
    </>
  );
}
