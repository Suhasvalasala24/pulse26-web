"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

const eventList = [
  { id: "01", title: "Battle of Bands", tag: "Live Music", desc: "Electric riffs and crowd energy that peaks at midnight." },
  { id: "02", title: "Battle of Beats", tag: "Dance", desc: "Classical to hip-hop, the floor belongs to the bold." },
  { id: "03", title: "Wheels & Hooves", tag: "Auto Expo", desc: "Modified rides, vintage beasts, and equestrian grace." }
];

export default function EventsPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col pt-32 pb-20 px-6">
      {/* JUNIOR: Put events-specific promo video here */}
      <BackgroundVideo src="/assets/events-promo.mp4" />

      {/* Navigation Return */}
      <Link href="/" className="absolute top-8 left-8 z-50 text-[#FF5722] font-['Oswald'] tracking-[3px] uppercase text-xs hover:text-[#FFE600] transition-colors flex items-center gap-2">
        <span>←</span> Return Base
      </Link>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#FF5722] to-transparent mb-6" />
          <h1 className="font-['Anton'] text-6xl md:text-8xl tracking-[2px] text-white drop-shadow-[0_0_20px_rgba(232,66,10,0.4)]">
            THE <span className="text-[#FFE600]">EVENTS</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventList.map((ev, i) => (
            <motion.div 
              key={ev.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-panel p-8 h-[500px] flex flex-col justify-end relative group overflow-hidden border-[#FF5722]/20 hover:border-[#FF5722] transition-colors cursor-none"
            >
              {/* Event specific background hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-[#050000]/60 to-transparent z-10" />
              
              <div className="absolute top-6 right-6 font-['Bebas_Neue'] text-6xl text-white/10 z-0 transition-transform duration-500 group-hover:scale-110">{ev.id}</div>
              
              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-[#E8420A] text-white font-['Oswald'] text-[10px] tracking-[3px] uppercase px-3 py-1 inline-block mb-4">{ev.tag}</span>
                <h2 className="font-['Anton'] text-4xl text-white mb-3 tracking-wide">{ev.title}</h2>
                <p className="text-sm text-[#F5E8C8]/60 mb-6 font-['Inter'] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{ev.desc}</p>
                <button className="text-[#FFE600] font-['Oswald'] text-[11px] tracking-[3px] uppercase border-b border-[#FFE600]/30 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Register Core →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}