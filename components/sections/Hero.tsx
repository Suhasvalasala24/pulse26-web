"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-base">
      
      {/* Animated Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-fire/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] bg-red-900/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000" />

      {/* Main Content Parallax */}
      <motion.div style={{ y: yBg, opacity: opacityText }} className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        
        {/* Replace this div with an <img src="/pulse-logo.jpg" /> once you move the image to the public folder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full max-w-2xl mb-8"
        >
          {/* PLACEHOLDER FOR LOGO - WE WILL SWAP THIS FOR YOUR ACTUAL IMAGE LATER */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-fire-glow via-fire to-fire-deep drop-shadow-[0_0_30px_rgba(232,66,10,0.5)]">
            PULSE<span className="text-white">'26</span>
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-4xl font-bold tracking-[0.4em] uppercase text-white/90 text-glow mb-12"
        >
          Feel The Beat
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className="glass-panel px-10 py-5 rounded-full font-bold tracking-widest uppercase overflow-hidden group relative transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Register Now
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-fire-deep via-fire to-fire-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          </button>
        </motion.div>
      </motion.div>

      {/* Funky Background Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4vw_4vw] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fire to-transparent" />
      </motion.div>
    </section>
  );
}