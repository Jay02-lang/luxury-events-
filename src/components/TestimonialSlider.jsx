import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function TestimonialSlider() {
  const testimonials = [
    {
      text: "Lumière orchestrated an evening of unparalleled elegance. Every detail was executed with absolute perfection.",
      author: "Eleanor Sterling",
      role: "Bride",
      rating: 5
    },
    {
      text: "The sheer professionalism and visionary approach made our annual summit the most talked-about event of the year.",
      author: "Jameson Blackwood",
      role: "CEO, Horizon Ventures",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#121316] text-black dark:text-white relative overflow-hidden">
      {/* Glossy Red accent background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B0000] rounded-full blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 text-center">
        
        <div className="relative max-w-4xl mx-auto p-10">
          <Quote className="absolute top-0 left-0 text-[#D4AF37] opacity-10 -translate-x-1/4 -translate-y-1/4 pointer-events-none" size={200} />
          <Quote className="absolute bottom-0 right-0 text-[#D4AF37] opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none rotate-180" size={200} />

          <div className="h-72 flex flex-col justify-center relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-royale leading-relaxed mb-10 text-black dark:text-white">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <p className="font-royale text-2xl gloss-gold-text tracking-wide mb-2">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm tracking-[0.2em] text-gray-800 dark:text-gray-400 uppercase">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-6 mt-16 relative z-20">
            <button 
              onClick={prev} 
              className="p-4 border border-gray-300 dark:border-gray-600 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors interactive-hover bg-white dark:bg-[#121316]"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next} 
              className="p-4 border border-gray-300 dark:border-gray-600 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors interactive-hover bg-white dark:bg-[#121316]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
