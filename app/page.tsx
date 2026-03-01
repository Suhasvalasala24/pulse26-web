"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// --- COMPONENTS BUILT DIRECTLY IN THIS FILE FOR EASY COPY-PASTE ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-[66px] flex items-center justify-between transition-all duration-400 ${scrolled ? 'bg-[#0B0500]/95 border-b border-[#E8420A]/20 backdrop-blur-md' : 'bg-transparent'}`}>
      <Link href="/" className="font-['Bebas_Neue'] text-3xl tracking-[6px] text-[#FF5722] drop-shadow-[0_0_30px_rgba(232,66,10,0.6)]">
        PULSE<span className="text-[#FF8C00]">'26</span>
      </Link>
      <ul className="hidden md:flex gap-9 list-none">
        <li><Link href="/events" className="text-[11px] tracking-[3px] uppercase text-[#8A6040] hover:text-[#F5E8C8] transition-colors">Events</Link></li>
        <li><Link href="/artist" className="text-[11px] tracking-[3px] uppercase text-[#8A6040] hover:text-[#F5E8C8] transition-colors">Artist</Link></li>
        <li><Link href="/schedule" className="text-[11px] tracking-[3px] uppercase text-[#8A6040] hover:text-[#F5E8C8] transition-colors">Schedule</Link></li>
        <li><Link href="/gallery" className="text-[11px] tracking-[3px] uppercase text-[#8A6040] hover:text-[#F5E8C8] transition-colors">Gallery</Link></li>
      </ul>
      <Link href="/register" className="bg-[#E8420A] text-white px-6 py-2.5 font-['Oswald'] text-xs tracking-[3px] uppercase hover:bg-[#FF5722] hover:shadow-[0_0_24px_rgba(232,66,10,0.5)] transition-all" style={{ clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' }}>
        Register Now
      </Link>
    </nav>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    // Target date: April 4, 2026
    const target = new Date('2026-04-04T00:00:00').getTime();
    
    const tick = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      
      if (diff <= 0) {
        clearInterval(tick);
        return;
      }
      
      setTimeLeft({
        d: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        h: String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
        m: String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
        s: String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')
      });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-10 flex justify-center gap-1 md:gap-3">
      <div className="flex flex-col items-center bg-[#FF5722]/10 border border-[#FF5722]/20 py-3 px-4 min-w-[72px]">
        <div className="font-['Bebas_Neue'] text-4xl text-[#FFE600] drop-shadow-[0_0_16px_rgba(255,200,0,0.4)]">{timeLeft.d}</div>
        <div className="text-[9px] tracking-[3px] uppercase text-[#8A6040] mt-1">Days</div>
      </div>
      <div className="font-['Bebas_Neue'] text-4xl text-[#E8420A] self-center animate-pulse">:</div>
      <div className="flex flex-col items-center bg-[#FF5722]/10 border border-[#FF5722]/20 py-3 px-4 min-w-[72px]">
        <div className="font-['Bebas_Neue'] text-4xl text-[#FFE600] drop-shadow-[0_0_16px_rgba(255,200,0,0.4)]">{timeLeft.h}</div>
        <div className="text-[9px] tracking-[3px] uppercase text-[#8A6040] mt-1">Hours</div>
      </div>
      <div className="font-['Bebas_Neue'] text-4xl text-[#E8420A] self-center animate-pulse">:</div>
      <div className="flex flex-col items-center bg-[#FF5722]/10 border border-[#FF5722]/20 py-3 px-4 min-w-[72px]">
        <div className="font-['Bebas_Neue'] text-4xl text-[#FFE600] drop-shadow-[0_0_16px_rgba(255,200,0,0.4)]">{timeLeft.m}</div>
        <div className="text-[9px] tracking-[3px] uppercase text-[#8A6040] mt-1">Mins</div>
      </div>
      <div className="font-['Bebas_Neue'] text-4xl text-[#E8420A] self-center animate-pulse">:</div>
      <div className="flex flex-col items-center bg-[#FF5722]/10 border border-[#FF5722]/20 py-3 px-4 min-w-[72px]">
        <div className="font-['Bebas_Neue'] text-4xl text-[#FFE600] drop-shadow-[0_0_16px_rgba(255,200,0,0.4)]">{timeLeft.s}</div>
        <div className="text-[9px] tracking-[3px] uppercase text-[#8A6040] mt-1">Secs</div>
      </div>
    </motion.div>
  );
};

const StatCounter = ({ end, label }: { end: number, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#FF5722]/10 last:border-0 hover:-translate-y-1 transition-transform">
      <div className="font-['Bebas_Neue'] text-5xl md:text-6xl tracking-[2px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFE600] to-[#FF8C00] drop-shadow-[0_0_8px_rgba(255,200,0,0.3)]">
        {count.toLocaleString()}
      </div>
      <div className="text-[10px] tracking-[3px] uppercase text-[#8A6040] mt-1">{label}</div>
    </div>
  );
};

// --- MAIN PAGE LAYOUT ---

export default function Home() {
  return (
    <div className="bg-[#0B0500] text-[#F5E8C8] font-['Inter'] min-h-screen overflow-x-hidden selection:bg-[#E8420A] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Lighting Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_70%,rgba(232,66,10,0.2)_0%,transparent_65%),radial-gradient(ellipse_40%_30%_at_50%_100%,rgba(255,140,0,0.12)_0%,transparent_60%),linear-gradient(to_bottom,#0B0500_0%,#1A0800_50%,#0B0500_100%)]" />
        <div className="absolute inset-0 z-1 bg-[radial-gradient(circle,rgba(255,87,34,0.07)_1px,transparent_1px)] bg-[size:22px_22px]" />
        
        {/* JUNIOR: HERO BACKGROUND VIDEO INSERT */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
          {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover"><source src="/assets/hero-bg.mp4" type="video/mp4" /></video> */}
        </div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="font-['Oswald'] text-xs tracking-[7px] uppercase text-[#FF8C00] mb-2">
            GRIET Annual Cultural Fest — 2026
          </motion.p>
          
          {/* JUNIOR: REPLACE TEXT WITH YOUR MOLTEN BLOCK LOGO HERE IF DESIRED */}
          {/* <Image src="/assets/pulse-logo.jpg" alt="Pulse 26" width={500} height={200} className="mix-blend-screen" /> */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="font-['Anton'] text-[clamp(88px,18vw,210px)] leading-[0.85] tracking-[4px] text-[#FFE600] drop-shadow-[4px_4px_0_#E8420A] shadow-[#B03000]">
            PULSE
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex items-center justify-center gap-4 mt-2 w-full max-w-[300px]">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-[#FF5722]" />
            <div className="font-['Bebas_Neue'] text-[clamp(34px,5.5vw,60px)] tracking-[12px] text-[#FF8C00] drop-shadow-[0_0_24px_rgba(255,140,0,0.5)]">'26</div>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-[#FF5722]" />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.8 }} className="font-['Oswald'] text-[clamp(11px,1.4vw,15px)] tracking-[12px] uppercase text-[#F5E8C8]/50 mt-4">
            Feel The Beat
          </motion.p>

          <Countdown />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="/register" className="inline-block bg-[#FFE600] text-[#1A0800] px-10 py-4 font-['Oswald'] text-sm tracking-[3px] uppercase font-bold shadow-[4px_4px_0_#E8420A] hover:-translate-y-1 hover:shadow-[6px_6px_0_#E8420A,0_0_28px_rgba(255,230,0,0.4)] transition-all" style={{ clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}>
              Register Now
            </Link>
            <Link href="/events" className="inline-block border-2 border-[#FF5722] text-[#FF5722] px-9 py-3.5 font-['Oswald'] text-sm tracking-[3px] uppercase hover:bg-[#FF5722]/15 hover:text-[#F5E8C8] transition-all" style={{ clipPath: 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' }}>
              Explore Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INFINITE MARQUEE */}
      <div className="bg-[#E8420A] py-3 overflow-hidden border-y-2 border-[#FFE600] whitespace-nowrap flex">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }} className="flex gap-8 items-center font-['Bebas_Neue'] text-xl tracking-[5px] text-black/85">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              <span>Battle of Bands <span className="text-[#FFE600] text-sm ml-6">✦</span></span>
              <span>Battle of Beats <span className="text-[#FFE600] text-sm ml-6">✦</span></span>
              <span>Auto Expo <span className="text-[#FFE600] text-sm ml-6">✦</span></span>
              <span>DSP Live <span className="text-[#FFE600] text-sm ml-6">✦</span></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS */}
      <section className="bg-[#1C0C02] py-12 border-y border-[#FF5722]/15">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter end={10} label="+ Events" />
          <StatCounter end={2} label="Epic Days" />
          <StatCounter end={5000} label="+ Attendees" />
          <StatCounter end={1} label="Headliner" />
        </div>
      </section>

      {/* FEATURED EVENTS TEASER */}
      <section className="py-24 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(232,66,10,0.08)_0%,transparent_60%)] bg-[#130800]">
        <div className="max-w-6xl mx-auto px-6 mb-14 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="font-['Oswald'] text-[11px] tracking-[6px] uppercase text-[#FF5722] flex items-center gap-3 mb-3">
              What's Happening <div className="h-[1px] w-14 bg-[#FF5722]/20" />
            </div>
            <h2 className="font-['Anton'] text-[clamp(40px,6vw,70px)] tracking-[2px] leading-none text-[#F5E8C8]">
              FEATURED <span className="text-[#FFE600] drop-shadow-[3px_3px_0_#E8420A]">EVENTS</span>
            </h2>
          </div>
          <Link href="/events" className="text-[#FF8C00] font-['Oswald'] text-xs tracking-[3px] uppercase hover:text-[#FFE600] transition-colors border-b border-[#FF8C00]/30 pb-1">
            View All Events →
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Battle of Bands */}
          <div className="group relative h-[450px] border border-[#FF5722]/10 overflow-hidden" style={{ perspective: '1000px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0308] to-[#2A0A05] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-4 right-4 font-['Bebas_Neue'] text-6xl text-white/5 z-0">01</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="bg-[#E8420A] text-white font-['Oswald'] text-[10px] tracking-[3px] uppercase px-3 py-1 inline-block mb-3">Live Music</span>
              <h3 className="font-['Anton'] text-3xl text-white drop-shadow-[2px_2px_0_#E8420A] mb-2">Battle of Bands</h3>
              <p className="text-sm text-[#F5E8C8]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">Electric riffs and crowd energy that peaks at midnight.</p>
              <Link href="/events" className="text-[#FFE600] font-['Oswald'] text-[10px] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Compete Now →</Link>
            </div>
          </div>
          
          {/* Battle of Beats */}
          <div className="group relative h-[450px] border border-[#FF5722]/10 overflow-hidden" style={{ perspective: '1000px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0D08] to-[#1A1404] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-4 right-4 font-['Bebas_Neue'] text-6xl text-white/5 z-0">02</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="bg-[#E8420A] text-white font-['Oswald'] text-[10px] tracking-[3px] uppercase px-3 py-1 inline-block mb-3">Dance</span>
              <h3 className="font-['Anton'] text-3xl text-white drop-shadow-[2px_2px_0_#E8420A] mb-2">Battle of Beats</h3>
              <p className="text-sm text-[#F5E8C8]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">Classical to hip-hop, the floor belongs to the bold.</p>
              <Link href="/events" className="text-[#FFE600] font-['Oswald'] text-[10px] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Register Team →</Link>
            </div>
          </div>

          {/* Auto Expo */}
          <div className="group relative h-[450px] border border-[#FF5722]/10 overflow-hidden" style={{ perspective: '1000px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#080A0F] to-[#0F1825] transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-4 right-4 font-['Bebas_Neue'] text-6xl text-white/5 z-0">03</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="bg-[#FF8C00] text-white font-['Oswald'] text-[10px] tracking-[3px] uppercase px-3 py-1 inline-block mb-3">Featured</span>
              <h3 className="font-['Anton'] text-3xl text-white drop-shadow-[2px_2px_0_#E8420A] mb-2">Wheels & Hooves</h3>
              <p className="text-sm text-[#F5E8C8]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">Modified rides, vintage beasts, and equestrian grace.</p>
              <Link href="/events" className="text-[#FFE600] font-['Oswald'] text-[10px] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Explore Expo →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIST TEASER */}
      <section className="py-24 relative overflow-hidden bg-[#0B0500] border-t border-[#FF5722]/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="font-['Oswald'] text-[11px] tracking-[6px] uppercase text-[#FF5722] block mb-3">Headlining Artist</span>
            <h2 className="font-['Anton'] text-[clamp(45px,6vw,70px)] tracking-[2px] leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#FF8C00] to-[#FF5722] mb-2 drop-shadow-[0_0_15px_rgba(255,200,0,0.2)]">
              DEVI SRI<br/>PRASAD
            </h2>
            <p className="text-xs tracking-[3px] text-[#8A6040] mb-6 uppercase">Rockstar of Telugu Cinema</p>
            <p className="text-sm leading-relaxed text-[#F5E8C8]/60 max-w-[400px] mb-8">
              India's most electrifying music composer and live performer. From Tollywood chart-toppers to adrenaline-pumping concerts, DSP's Pulse '26 show promises to be the night GRIET never forgets.
            </p>
            <Link href="/artist" className="bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF8C00] px-8 py-3 font-['Oswald'] text-xs tracking-[3px] uppercase hover:bg-[#FF5722]/20 transition-all inline-block">
              View Full Lineup
            </Link>
          </div>
          <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto border border-[#FFD000]/10 bg-gradient-to-br from-[#1C0C02] to-[#2A1608] flex items-center justify-center overflow-hidden">
             {/* JUNIOR: INSERT DSP HEADSHOT/VIDEO HERE */}
             <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,200,0,0.1)_0%,transparent_70%)]" />
             <div className="font-['Bebas_Neue'] text-[120px] text-white/5 absolute top-10 pointer-events-none">DSP</div>
             <p className="text-[#8A6040] text-xs uppercase tracking-[3px] z-10 border border-dashed border-[#8A6040]/30 p-4 bg-[#0B0500]/50">[ Junior: DSP Image Asset ]</p>
          </div>
        </div>
      </section>

      {/* INFO GRID (NO EMOJIS - REPLACED WITH CLEAN SVG ICONS) */}
      <section className="py-16 bg-[#1C0C02] border-t border-[#FF5722]/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#1A0C02] border border-[#FF5722]/10 p-8 text-center hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 mx-auto mb-4 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <h4 className="font-['Oswald'] text-xs tracking-[3px] uppercase text-[#FF5722] mb-2">Venue</h4>
            <p className="text-xs text-[#8A6040] leading-relaxed">GRIET Campus, Bachupally, Hyderabad</p>
          </div>
          <div className="bg-[#1A0C02] border border-[#FF5722]/10 p-8 text-center hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 mx-auto mb-4 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
            <h4 className="font-['Oswald'] text-xs tracking-[3px] uppercase text-[#FF5722] mb-2">Entry</h4>
            <p className="text-xs text-[#8A6040] leading-relaxed">Passes online. Free for GRIET students.</p>
          </div>
          <div className="bg-[#1A0C02] border border-[#FF5722]/10 p-8 text-center hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 mx-auto mb-4 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            <h4 className="font-['Oswald'] text-xs tracking-[3px] uppercase text-[#FF5722] mb-2">Parking</h4>
            <p className="text-xs text-[#8A6040] leading-relaxed">Free on campus. Valet available.</p>
          </div>
          <div className="bg-[#1A0C02] border border-[#FF5722]/10 p-8 text-center hover:-translate-y-1 transition-transform">
            <svg className="w-8 h-8 mx-auto mb-4 text-[#FF5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
            <h4 className="font-['Oswald'] text-xs tracking-[3px] uppercase text-[#FF5722] mb-2">Social</h4>
            <p className="text-xs text-[#8A6040] leading-relaxed">Tag moments <b className="text-[#FF8C00]">#Pulse26GRIET</b></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050200] border-t border-[#FF5722]/15 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="font-['Bebas_Neue'] text-4xl tracking-[6px] text-[#FF5722] drop-shadow-[0_0_20px_rgba(232,66,10,0.4)] mb-2">PULSE</div>
            <span className="font-['Bebas_Neue'] text-xl tracking-[10px] text-[#FF8C00] block mb-4">'26</span>
            <p className="text-xs text-[#8A6040] leading-relaxed max-w-[280px]">The annual cultural extravaganza of Gokaraju Rangaraju Institute of Engineering & Technology, Hyderabad.</p>
          </div>
          <div>
            <h5 className="font-['Oswald'] text-[10px] tracking-[4px] uppercase text-[#FF5722] mb-4">Sitemap</h5>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">Events</Link></li>
              <li><Link href="/artist" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">Artist</Link></li>
              <li><Link href="/schedule" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">Schedule</Link></li>
              <li><Link href="/gallery" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-['Oswald'] text-[10px] tracking-[4px] uppercase text-[#FF5722] mb-4">Contact</h5>
            <ul className="space-y-2">
              <li><Link href="/register" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">Register Support</Link></li>
              <li><Link href="/sponsors" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">Sponsor Us</Link></li>
              <li><a href="https://griet.ac.in" target="_blank" rel="noreferrer" className="text-xs text-[#8A6040] hover:text-[#FF8C00] transition-colors">GRIET Website</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#8A6040] tracking-[1px] uppercase">© 2026 Pulse '26 — GRIET. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 border border-[#FF5722]/20 flex items-center justify-center text-[#8A6040] hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-colors text-[10px] uppercase">IG</a>
            <a href="#" className="w-8 h-8 border border-[#FF5722]/20 flex items-center justify-center text-[#8A6040] hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-colors text-[10px] uppercase">TW</a>
            <a href="#" className="w-8 h-8 border border-[#FF5722]/20 flex items-center justify-center text-[#8A6040] hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-colors text-[10px] uppercase">YT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}