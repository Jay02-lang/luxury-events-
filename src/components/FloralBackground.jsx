import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloralBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Parallax effect: shift slightly opposite to mouse movement
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * -50,
        y: (e.clientY / window.innerHeight - 0.5) * -50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          x: { type: "spring", stiffness: 40, damping: 20 },
          y: { type: "spring", stiffness: 40, damping: 20 },
          scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 35, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute inset-[-10%] w-[120%] h-[120%] opacity-[0.15] dark:opacity-10 bg-floral"
      />
    </div>
  );
}
