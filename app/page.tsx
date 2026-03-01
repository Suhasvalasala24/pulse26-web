"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. FULLSCREEN MENU COMPONENT (Moved here to fix the import error) ---
const FullscreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const navLinks = [
    { num: "01", name: "HOME", path: "/" },
    { num: "02", name: "EVENTS", path: "/events" },
    { num: "03", name: "SPONSORS", path: "/sponsors" },
    { num: "04", name: "GALLERY", path: "/gallery" },
    { num: "05", name: "SCHEDULE", path: "/schedule" },
    { num: "06", name: "TEAM", path: "/team" },
  ];

  return (
    <>
      {/* Hamburger Icon */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[60] flex flex-col gap-2 p-2 mix-blend-difference cursor-none hover:scale-110 transition-transform"
      >
        <div className="w-8 h-[3px] bg-white" />
        <div className="w-8 h-[3px] bg-white" />
        <div className="w-8 h-[3px] bg-white" />
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-[#E8420A] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 z-50 text-white hover:rotate-90 transition-transform duration-300 cursor-none"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {/* Left Side: Links */}
            <div className="flex-1 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-center px-8 md:px-24">
              {navLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-6 py-2 cursor-none"
                >
                  <span className="font-['Oswald'] text-sm text-white/50">{link.num}</span>
                  <span className="font-['Anton'] text-5xl md:text-7xl text-white group-hover:text-[#FFE600] group-hover:translate-x-4 transition-all duration-300 drop-shadow-[3px_3px_0_#8A1100]">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Side: Socials */}
            <div className="flex-1 flex items-center justify-center p-12">
              <div className="flex gap-4">
                {['IG', 'YT', 'X', 'FB'].map((social, i) => (
                  <a key={i} href="#" className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-bold hover:bg-white hover:text-[#E8420A] transition-colors cursor-none">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- 2. PEARL STYLE BLOCKY COUNTDOWN ---
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00' });

  useEffect(() => {
    const target = new Date('2026-04-04T00:00:00').getTime();
    const tick = setInterval(() => {
      const diff = target - new Date().getTime();
      if (diff <= 0) { clearInterval(tick); return; }
      setTimeLeft({
        d: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        h: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        m: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
      });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className="absolute bottom-8 right-8 flex gap-3 z-30">
      {[
        { label: 'DAYS', value: timeLeft.d },
        { label: 'HOURS', value: timeLeft.h },
        { label: 'MINS', value: timeLeft.m },
      ].map((time, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-white text-black font-['Anton'] text-4xl w-16 h-16 flex items-center justify-center border-4 border-black shadow-[4px_4px_0_#E8420A]">
            {time.value}
          </div>
          <span className="font-['Oswald'] text-[10px] tracking-[2px] uppercase text-white mt-2 font-bold shadow-black drop-shadow-md">
            {time.label}
          </span>
        </div>
      ))}
    </div>
  );
};

// --- 3. MAIN PAGE LAYOUT ---
export default function Home() {
  const [loading, setLoading] = useState(true);

  // Preloader Logic
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#050000] text-white overflow-x-hidden">
      
      {/* THE PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="preloader"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#050000] flex flex-col items-center justify-center"
          >
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
              <Image src="/assets/pulse-logo.jpg" alt="Pulse Logo" width={300} height={150} className="mix-blend-screen" priority />
            </motion.div>
            <p className="mt-8 font-['Oswald'] tracking-[6px] text-[#FF5722] uppercase text-sm animate-pulse">
              Entering the Beat...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <FullscreenMenu />

      {/* TOP LEFT CTA */}
      <Link href="/register" className="absolute top-8 left-8 z-50 bg-[#E8420A] text-white font-['Oswald'] font-bold tracking-[2px] uppercase px-8 py-3 border-4 border-black shadow-[6px_6px_0_#FFE600] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#FFE600] transition-all cursor-none">
        REGISTER NOW
      </Link>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full border-b-[8px] border-[#FFE600] overflow-hidden">
        {/* JUNIOR: Hero Background Image/Video */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(5,0,0,0)_50%,#050000_100%),url('https://via.placeholder.com/1920x1080/050000/111111?text=City+Background')] bg-cover bg-center" />
        </div>

        {/* Floating Cityscape / Mascots */}
        <div className="absolute bottom-0 left-10 z-10 w-[400px] h-[300px] bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center text-white/50 text-sm font-['Oswald']">
          [JUNIOR: Insert Character Silhouettes]
        </div>

        {/* Center Right Logo Area */}
        <div className="absolute top-[25%] right-10 md:right-32 z-20 flex flex-col items-end">
          <div className="relative w-[300px] h-[150px] md:w-[450px] md:h-[200px] drop-shadow-[0_0_20px_#E8420A]">
            <Image src="/assets/pulse-logo.jpg" alt="Pulse'26" fill className="object-contain mix-blend-screen" priority />
          </div>
          <div className="bg-[#FFE600] text-black font-['Anton'] text-xl px-4 py-1 mt-[-10px] border-2 border-black shadow-[3px_3px_0_#E8420A]">
            04TH APRIL
          </div>
        </div>

        <Countdown />
      </section>

      {/* ABOUT SECTION */}
      <section className="relative w-full py-24 px-8 md:px-24 flex flex-col md:flex-row items-center gap-16 bg-[#050000]">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[400px] aspect-square bg-white/5 border-4 border-[#FF5722] shadow-[10px_10px_0_#FFE600] flex items-center justify-center text-white/50 font-['Oswald'] text-sm tracking-widest text-center p-4">
            [JUNIOR: Insert Mascot Graphic PNG]
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="font-['Oswald'] text-[#E8420A] tracking-[4px] uppercase border-l-4 border-[#FFE600] pl-4">What is</span>
          <h2 className="font-['Anton'] text-7xl md:text-9xl text-[#FFE600] mt-2 mb-6 drop-shadow-[4px_4px_0_#E8420A]">
            PULSE ?
          </h2>
          <p className="font-['Oswald'] text-lg text-white/80 leading-relaxed uppercase tracking-wider">
            Pulse is the flagship annual cultural festival of GRIET, Hyderabad. It channels the chaos, color, and energy of rhythm where stories collide, heroes rise, and every moment feels larger than life.
          </p>
        </div>
      </section>

      {/* THEME SECTION */}
      <section className="relative w-full py-24 px-8 md:px-24 flex flex-col md:flex-row-reverse items-center gap-16 bg-[#0a0202] border-t-2 border-[#E8420A]/30">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[400px] aspect-square bg-[#E8420A]/10 border-4 border-[#FFE600] shadow-[-10px_10px_0_#E8420A] flex items-center justify-center text-white/50 font-['Oswald'] text-sm tracking-widest text-center p-4">
            [JUNIOR: Insert Theme Graphic PNG]
          </div>
        </div>
        <div className="w-full md:w-1/2 text-right">
          <span className="font-['Oswald'] text-[#FFE600] tracking-[4px] uppercase border-r-4 border-[#E8420A] pr-4">What is the</span>
          <h2 className="font-['Anton'] text-7xl md:text-9xl text-[#E8420A] mt-2 mb-6 drop-shadow-[4px_4px_0_#8A1100]">
            THEME ?
          </h2>
          <p className="font-['Oswald'] text-lg text-white/80 leading-relaxed uppercase tracking-wider text-right">
            This year's theme is "FEEL THE BEAT". It breaks out of the panels and into reality, bringing fire, energy, and an adrenaline-pumping experience to the stage.
          </p>
        </div>
      </section>

    </main>
  );
}