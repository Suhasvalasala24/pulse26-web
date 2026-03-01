"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-fire-glow rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6, scale: isHovering ? 0 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9998] flex items-center justify-center backdrop-blur-sm"
        animate={{ 
          x: mousePosition.x - (isHovering ? 40 : 20), 
          y: mousePosition.y - (isHovering ? 40 : 20),
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          borderColor: isHovering ? 'rgba(255, 87, 34, 0.8)' : 'rgba(255, 87, 34, 0.3)',
          backgroundColor: isHovering ? 'rgba(232, 66, 10, 0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.6 }}
      />
    </>
  );
}