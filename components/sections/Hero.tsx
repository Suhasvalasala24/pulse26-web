"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function HeatWaveBlob() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8A1100"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        emissive="#E8420A"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050000]">
      {/* Three.js Heat Wave Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#FFD000" />
          <HeatWaveBlob />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-[#050000] z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        {/* User's Exact Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[300px] h-[150px] md:w-[600px] md:h-[300px] mb-8 drop-shadow-[0_0_40px_rgba(255,87,34,0.6)]"
        >
          <Image 
            src="/assets/pulse-logo.jpg" 
            alt="Pulse 26 Official Logo" 
            fill
            className="object-contain mix-blend-screen"
            priority
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-5xl font-['Anton'] tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-[#FFD000] mb-12 drop-shadow-[0_0_15px_rgba(232,66,10,0.4)]"
        >
          Feel The Beat
        </motion.h2>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative px-10 py-4 bg-transparent border border-[#FF5722]/50 text-white font-['Oswald'] tracking-[4px] uppercase overflow-hidden group backdrop-blur-md"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Register Now
          </span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#8A1100] via-[#FF5722] to-[#FFE600] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
        </motion.button>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#E8420A] to-transparent" />
      </motion.div>
    </section>
  );
}