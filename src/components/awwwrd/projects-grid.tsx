"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";

const projects = [
  {
    id: 1,
    title: "Neomorphic Dashboard",
    category: "UI/UX Design",
    description: "Award-winning dashboard with glassmorphism effects",
    tech: ["React", "Three.js", "GSAP"],
    color: "from-purple-600 to-pink-600",
    image: "/pic.png"
  },
  {
    id: 2,
    title: "3D Portfolio Site",
    category: "Web Development",
    description: "Interactive 3D experience with WebGL",
    tech: ["Next.js", "Three.js", "WebGL"],
    color: "from-blue-600 to-cyan-600",
    image: "/pic.png"
  },
  {
    id: 3,
    title: "Motion Graphics",
    category: "Animation",
    description: "Fluid animations with advanced physics",
    tech: ["GSAP", "Motion", "CSS"],
    color: "from-green-600 to-emerald-600",
    image: "/pic.png"
  },
  {
    id: 4,
    title: "AR Experience",
    category: "Augmented Reality",
    description: "Immersive AR web application",
    tech: ["WebXR", "Three.js", "A-Frame"],
    color: "from-orange-600 to-red-600",
    image: "/pic.png"
  },
  {
    id: 5,
    title: "Data Visualization",
    category: "Interactive Design",
    description: "Complex data brought to life",
    tech: ["D3.js", "SVG", "Canvas"],
    color: "from-indigo-600 to-purple-600",
    image: "/pic.png"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "Full Stack",
    description: "Modern shopping experience",
    tech: ["Next.js", "Stripe", "Prisma"],
    color: "from-teal-600 to-blue-600",
    image: "/pic.png"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        rotationY: 5,
        rotationX: 5,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-opacity group-hover:opacity-30`} />
      
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-white/60 text-4xl">⚡</div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <motion.div
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-4 h-4 border border-white/60 border-l-0 border-b-0 rotate-45" />
          </motion.div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 group-hover:bg-clip-text transition-all">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
        }}
      />
    </motion.div>
  );
}

export function ProjectsGrid() {
  return (
    <div className="relative h-full flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Work
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase innovation, creativity, and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
