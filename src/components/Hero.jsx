import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ end, suffix, duration = 2.5 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;
    
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
    };
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  // Format with commas if over 999
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return <span>{formattedCount}{suffix}</span>;
}

export default function Hero() {
  const stats = [
    { label: 'Events Curated', value: 400, suffix: '+' },
    { label: 'Years Experience', value: 14, suffix: '+' },
    { label: 'Client Satisfaction', value: 100, suffix: '%' },
  ];

  return (
    <section className="relative min-h-screen w-full pt-32 lg:pt-40 flex flex-col justify-between overflow-hidden bg-transparent">

      {/* Main Content Split Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex-grow flex flex-col lg:flex-row items-center justify-between z-20 py-12 lg:py-0 gap-12 mt-12 lg:mt-0">
        
        {/* Left Side: Title Block */}
        <div className="flex-1 text-left w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold tracking-[0.2em] uppercase mb-6 theme-text-glossy"
          >
            Exclusive & Unforgettable
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-royale leading-[1.1] mb-8 theme-text-glossy"
          >
            Orchestrating <br/> 
            <span className="gloss-red-text">Opulence</span>
          </motion.h1>
        </div>

        {/* Right Side: Copy and CTAs */}
        <div className="flex-1 flex flex-col items-start lg:pl-12 w-full max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl font-light leading-relaxed mb-10 theme-text-glossy font-medium"
          >
            We curate bespoke luxury events that transcend expectations. From royal galas to private island weddings, your vision is meticulously transformed into a breathtaking masterpiece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full"
          >
            <button className="interactive-hover gloss-gold-bg text-black font-bold px-8 py-4 uppercase tracking-widest text-sm hover-sheen flex-1 text-center shadow-xl">
              View Portfolio
            </button>
            <button className="interactive-hover gloss-gold-bg text-black font-bold px-8 py-4 uppercase tracking-widest text-sm hover-sheen flex-1 text-center shadow-xl">
              Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-30 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0D0E10]/50 backdrop-blur-md w-full"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex-1 text-center relative w-full group">
                <h3 className="text-4xl md:text-5xl font-royale theme-text-glossy mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="theme-text-glossy text-xs tracking-[0.2em] uppercase font-semibold">
                  {stat.label}
                </p>
                {/* Vertical Divider */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
