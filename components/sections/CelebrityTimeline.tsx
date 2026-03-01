"use client";
import { motion } from "framer-motion";

export default function CelebrityTimeline() {
  return (
    <section className="w-full py-32 bg-surface relative overflow-hidden flex flex-col items-center">
      <h2 className="text-outline text-5xl md:text-7xl font-black uppercase text-center mb-24 z-10 relative">
        The <span className="text-fire-glow text-glow">Legacy</span>
      </h2>

      <div className="relative w-full max-w-3xl px-6">
        {/* Glowing Vertical Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fire-deep via-fire-glow to-gold opacity-30 transform md:-translate-x-1/2" />

        {/* 2023 Event */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-24 group">
          <div className="hidden md:block w-5/12 text-right pr-8">
            <h3 className="text-2xl font-bold text-white/50 uppercase tracking-widest">Previous Era</h3>
          </div>
          
          {/* Glowing Dot */}
          <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full border border-fire/40 bg-base flex items-center justify-center transform md:-translate-x-1/2 z-10">
            <div className="w-4 h-4 rounded-full bg-white/30" />
          </div>

          <div className="w-full md:w-5/12 pl-20 md:pl-8">
            <h4 className="text-fire-glow font-bold text-3xl font-mono mb-2">2023</h4>
            <div className="glass-panel p-6">
              <p className="text-lg text-white font-bold uppercase">S. Thaman</p>
              <p className="text-lg text-white font-bold uppercase">Sivamani</p>
              <p className="text-lg text-white font-bold uppercase">DJ Perch</p>
            </div>
          </div>
        </div>

        {/* 2026 Event */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
          <div className="w-full md:w-5/12 pl-20 md:pl-0 md:pr-8 md:text-right order-2 md:order-1 mt-6 md:mt-0">
            <h4 className="text-gold font-bold text-4xl font-mono mb-2 text-glow">2026</h4>
            <div className="glass-panel p-6 border-gold/30">
              <span className="text-xs uppercase tracking-[0.3em] text-fire">Headliner</span>
              <p className="text-3xl text-white font-black uppercase mt-2">Devi Sri Prasad</p>
              <p className="text-sm text-white/50 uppercase tracking-widest mt-1">Live Concert</p>
            </div>
          </div>
          
          {/* Glowing Dot Active */}
          <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full border border-gold bg-base flex items-center justify-center transform md:-translate-x-1/2 z-10 box-glow order-1 md:order-2">
            <div className="w-6 h-6 rounded-full bg-gold animate-pulse" />
          </div>

          <div className="hidden md:block w-5/12 pl-8 order-3">
             <h3 className="text-2xl font-bold text-white uppercase tracking-widest">The Future</h3>
          </div>
        </div>

      </div>
    </section>
  );
}