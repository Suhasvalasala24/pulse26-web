"use client";
import { motion } from "framer-motion";

export default function AutoExpo() {
  return (
    <section className="relative min-h-screen w-full bg-surface border-t border-fire/20 overflow-hidden flex flex-col md:flex-row">
      
      {/* Center Divider Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-fire/50 to-transparent z-30" />
      
      {/* Absolute Center Title */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] mix-blend-overlay text-center"
        >
          Wheels &<br/>Hooves
        </motion.h2>
      </div>

      {/* Left Side: Car Rally */}
      <div className="flex-1 relative flex items-center justify-center min-h-[50vh] md:min-h-screen border-b md:border-b-0 md:border-r border-fire/10 group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,87,34,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* JUNIOR: INSERT CAR IMAGE/VIDEO HERE */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative z-20 w-3/4 aspect-video border border-dashed border-white/20 rounded-xl flex items-center justify-center text-white/30 backdrop-blur-sm"
        >
          [ Junior: Insert Sports Car Asset ]
        </motion.div>
      </div>

      {/* Right Side: Black Horse */}
      <div className="flex-1 relative flex items-center justify-center min-h-[50vh] md:min-h-screen group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,66,10,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* JUNIOR: INSERT HORSE IMAGE/VIDEO HERE */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative z-20 w-3/4 aspect-video border border-dashed border-white/20 rounded-xl flex items-center justify-center text-white/30 backdrop-blur-sm"
        >
          [ Junior: Insert Black Horse Asset ]
        </motion.div>
      </div>
    </section>
  );
}