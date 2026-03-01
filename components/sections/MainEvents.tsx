"use client";
import { motion } from "framer-motion";

const events = [
  {
    id: "bands",
    title: "Battle of Bands",
    subtitle: "Electric Riffs. Midnight Energy.",
    align: "left",
  },
  {
    id: "beats",
    title: "Battle of Beats",
    subtitle: "The floor belongs to the bold.",
    align: "right",
  }
];

export default function MainEvents() {
  return (
    <section className="w-full bg-base flex flex-col">
      {events.map((ev, index) => (
        <div key={ev.id} className="relative h-screen w-full flex items-center overflow-hidden border-t border-fire/10">
          
          {/* JUNIOR: INSERT BACKGROUND VIDEO HERE */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-surface/50" /> {/* Fallback background */}
            {/* <video autoPlay loop muted playsInline className="object-cover w-full h-full opacity-30 mix-blend-screen">
                  <source src={`/assets/${ev.id}-bg.mp4`} type="video/mp4" />
                </video> */}
            
            {/* Ambient Red Glow */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_${ev.align === 'left' ? '70%' : '30%'}_50%,rgba(232,66,10,0.15)_0%,transparent_50%)] z-10`} />
          </div>

          <div className={`relative z-20 w-full max-w-7xl mx-auto px-6 flex ${ev.align === 'left' ? 'justify-start' : 'justify-end'}`}>
            <motion.div 
              initial={{ opacity: 0, x: ev.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="glass-panel p-10 md:p-16 max-w-xl relative overflow-hidden group"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fire-deep via-fire to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-4 tracking-tighter">
                {ev.title.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Bands' || word === 'Beats' ? 'text-transparent bg-clip-text bg-gradient-to-br from-fire to-gold drop-shadow-[0_0_15px_rgba(232,66,10,0.5)]' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-white/60 uppercase tracking-widest mb-8">{ev.subtitle}</p>
              
              {/* JUNIOR: INSERT FLOATING 3D ASSETS/IMAGES HERE (e.g., Guitar, Drums, Dancers) */}
              <div className="w-full h-32 border border-dashed border-fire/30 rounded flex items-center justify-center text-fire/50 text-sm mb-8 bg-fire/5">
                [ Junior: Drop Transparent PNGs Here ]
              </div>

              <button className="text-fire-glow font-bold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2">
                Explore Rules <span className="text-xl">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}