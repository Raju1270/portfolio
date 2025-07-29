"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Torus, Cylinder } from "@react-three/drei";
import * as THREE from "three";

function SkillOrb({ position, skill, color }: { 
  position: [number, number, number], 
  skill: string,
  color: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
        </mesh>
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {skill}
        </Text>
      </group>
    </Float>
  );
}

function TechRing() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const skills = [
    { name: "React", color: "#61DAFB", angle: 0 },
    { name: "Three.js", color: "#000000", angle: Math.PI / 4 },
    { name: "GSAP", color: "#88CE02", angle: Math.PI / 2 },
    { name: "Next.js", color: "#000000", angle: (3 * Math.PI) / 4 },
    { name: "TypeScript", color: "#3178C6", angle: Math.PI },
    { name: "Node.js", color: "#339933", angle: (5 * Math.PI) / 4 },
    { name: "WebGL", color: "#990000", angle: (3 * Math.PI) / 2 },
    { name: "Motion", color: "#FF0055", angle: (7 * Math.PI) / 4 },
  ];

  return (
    <group ref={ringRef}>
      {skills.map((skill, index) => {
        const radius = 4;
        const x = Math.cos(skill.angle) * radius;
        const z = Math.sin(skill.angle) * radius;
        return (
          <SkillOrb
            key={index}
            position={[x, 0, z]}
            skill={skill.name}
            color={skill.color}
          />
        );
      })}
      
      {/* Central ring */}
      <Torus args={[4, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </Torus>
    </group>
  );
}

function ExperienceTimeline() {
  const timelineRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (timelineRef.current) {
      timelineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const experiences = [
    { year: "2024", title: "Senior Dev", position: [0, 3, 0] },
    { year: "2023", title: "Full Stack", position: [0, 1, 0] },
    { year: "2022", title: "Frontend", position: [0, -1, 0] },
    { year: "2021", title: "Learning", position: [0, -3, 0] },
  ];

  return (
    <group ref={timelineRef} position={[-6, 0, 0]}>
      {/* Timeline line */}
      <Cylinder args={[0.02, 0.02, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
      </Cylinder>
      
      {experiences.map((exp, index) => (
        <Float key={index} speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={exp.position as [number, number, number]}>
            <mesh>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} />
            </mesh>
            <Text
              position={[1, 0, 0]}
              fontSize={0.2}
              color="#ffffff"
              anchorX="left"
              anchorY="middle"
            >
              {exp.year}
            </Text>
            <Text
              position={[1, -0.3, 0]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="left"
              anchorY="middle"
            >
              {exp.title}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

export function AboutScene() {
  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, 3, -3]} intensity={0.4} color="#ff6b6b" />
      <pointLight position={[5, -3, 3]} intensity={0.4} color="#4ecdc4" />

      {/* Tech Skills Ring */}
      <TechRing />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Floating background elements */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Torus args={[2, 0.1, 8, 16]} position={[6, 2, -4]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#9f7aea" transparent opacity={0.3} />
        </Torus>
      </Float>

      <Float speed={0.3} rotationIntensity={0.1} floatIntensity={0.2}>
        <Torus args={[1.5, 0.08, 6, 12]} position={[-4, -2, -2]} rotation={[0, Math.PI / 3, 0]}>
          <meshStandardMaterial color="#4fd1c7" transparent opacity={0.4} />
        </Torus>
      </Float>
    </>
  );
}
