"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function BackgroundVideo({ src }: { src: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      {/* Background Video Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="object-cover w-full h-full opacity-40 mix-blend-screen"
        >
          {/* JUNIOR: Ensure video files are in public/assets/ */}
          <source src={src} type="video/mp4" />
        </video>
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050000]/80 to-[#050000] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,66,10,0.1)_0%,transparent_70%)] z-10" />
      </div>

      {/* Audio Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-8 right-8 z-50 glass-panel px-4 py-3 rounded-full flex items-center gap-3 hover:border-[#FF5722]/50 transition-colors group cursor-none"
      >
        <div className="flex items-end gap-[2px] h-4">
          <motion.div animate={{ height: isMuted ? "4px" : ["4px", "12px", "4px"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-[#FF8C00] rounded-t-sm" />
          <motion.div animate={{ height: isMuted ? "4px" : ["4px", "16px", "4px"] }} transition={{ repeat: Infinity, duration: 1.1 }} className="w-1 bg-[#FF5722] rounded-t-sm" />
          <motion.div animate={{ height: isMuted ? "4px" : ["4px", "8px", "4px"] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-[#E8420A] rounded-t-sm" />
        </div>
        <span className="text-xs font-['Oswald'] tracking-[2px] uppercase text-white/70 group-hover:text-white">
          {isMuted ? "Unmute Promo" : "Mute Promo"}
        </span>
      </motion.button>
    </>
  );
}