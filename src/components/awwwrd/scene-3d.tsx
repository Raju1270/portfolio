"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Text, useMatcapTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

function FloatingGeometry({ position, geometry }: { position: [number, number, number], geometry: "sphere" | "box" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [matcap] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry === "sphere" ? (
          <sphereGeometry args={[0.8, 32, 32]} />
        ) : (
          <boxGeometry args={[1.5, 1.5, 1.5]} />
        )}
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  useEffect(() => {
    if (pointsRef.current) {
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      pointsRef.current.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    }
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.6} />
    </points>
  );
}

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 8,
      duration: 2,
      ease: "power2.out",
    });
  }, [camera]);

  return null;
}

export function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#ff6b6b" />

      {/* Camera Controller */}
      <CameraController />

      {/* Particle Field */}
      <ParticleField />

      {/* Floating Geometries */}
      <FloatingGeometry position={[-3, 1, 0]} geometry="sphere" />
      <FloatingGeometry position={[3, -1, -2]} geometry="box" />
      <FloatingGeometry position={[0, 2, -3]} geometry="sphere" />
      <FloatingGeometry position={[-2, -2, 1]} geometry="box" />

      {/* Central 3D Text */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[0, 0, 0]}
          fontSize={1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          CREATIVE
        </Text>
      </Float>

      {/* Orbit Controls for interaction */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}
