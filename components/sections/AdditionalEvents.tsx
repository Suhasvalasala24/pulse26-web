"use client";
import { motion } from "framer-motion";

const miniEvents = [
  { id: "pooja", title: "Pooja Ceremony", delay: 0.1 },
  { id: "flashmob-campus", title: "Campus Flashmob", delay: 0.2 },
  { id: "flashmob-mall", title: "Mall Flashmob", delay: 0.3 },
  { id: "stalls", title: "Food & Stalls", delay: 0.4 },
  { id: "auction", title: "Live Auction", delay: 0.5 },
];

export default function AdditionalEvents() {
  return (
    <section className="w-full py-32 bg-base relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-fire-glow mb-16 text-center">
          Beyond The Stage
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniEvents.map((ev) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: ev.delay }}
              className="glass-panel h-64 relative group cursor-none flex items-end p-6 hover:border-fire-glow/50 transition-colors"
            >
              {/* JUNIOR: BACKGROUND IMAGE FOR EACH EVENT GOES HERE */}
              <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity z-0 flex items-center justify-center text-white/10 text-sm">
                [ Junior: BG Image ]
              </div>
              
              <div className="relative z-10 w-full">
                <div className="w-8 h-[2px] bg-fire mb-4 transform origin-left transition-transform group-hover:scale-x-150" />
                <h3 className="text-xl font-bold uppercase text-white tracking-wider">{ev.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}