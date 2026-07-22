import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop", title: "Royal Weddings" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop", title: "Gala Dinners" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", title: "VIP Access" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop", title: "Private Islands" },
  { src: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=800&auto=format&fit=crop", title: "Award Shows" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop", title: "Corporate Summits" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop", title: "Fashion Weeks" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", title: "Exclusive Retreats" }
];

export default function CylinderCarousel() {
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const containerRef = useRef(null);

  // Auto rotation
  useAnimationFrame((t, delta) => {
    if (!isDragging.current) {
      // Rotate slowly automatically
      rotation.set(rotation.get() - (delta / 1000) * 15);
    }
  });

  // Manual drag handling
  useEffect(() => {
    const handlePointerDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX || (e.touches && e.touches[0].clientX);
    };

    const handlePointerMove = (e) => {
      if (!isDragging.current) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX);
      if (currentX === undefined) return;
      
      const diff = currentX - startX.current;
      rotation.set(rotation.get() + diff * 0.4);
      startX.current = currentX;
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousedown', handlePointerDown);
      element.addEventListener('touchstart', handlePointerDown, { passive: true });
    }
    
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      if (element) {
        element.removeEventListener('mousedown', handlePointerDown);
        element.removeEventListener('touchstart', handlePointerDown);
      }
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [rotation]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[900px]">
      
      <div className="absolute top-10 text-center w-full z-10 pointer-events-none mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-royale mb-4 tracking-widest theme-text-glossy">
          UNFORGETTABLE <span className="gloss-red-text">MOMENTS</span>
        </h2>
        <p className="theme-text-glossy uppercase tracking-[0.3em] text-xs">
          Drag to Scroll Gallery
        </p>
      </div>

      {/* Perspective wrapper */}
      <div 
        ref={containerRef}
        style={{ perspective: "1500px" }} 
        className="w-full flex justify-center mt-32 cursor-grab active:cursor-grabbing touch-pan-y"
      >
        <motion.div 
          className="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px]"
          style={{ transformStyle: "preserve-3d", rotateY: rotation }}
        >
          {images.map((item, index) => {
            const angle = (index / images.length) * 360;
            // The translateZ pushes the cards outward to form the cylinder
            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] select-none pointer-events-none"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(450px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover opacity-90" draggable="false" />
                
                {/* Title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white font-royale text-3xl tracking-wider drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 gloss-gold-bg mt-4" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
