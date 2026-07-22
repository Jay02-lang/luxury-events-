import { motion } from 'framer-motion';

export default function FounderStory() {
  return (
    <section className="py-24 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with glossy frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl gloss-gold-bg transform translate-x-3 translate-y-3 -z-10 blur-[1px]" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
              alt="Founder Story" 
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/20"
            />
          </motion.div>

          {/* Right Column: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-royale leading-snug mb-8 theme-text-glossy">
              A LEGACY OF <br/> <span className="gloss-red-text">EXCELLENCE</span>
            </h2>
            <p className="text-lg font-light leading-relaxed mb-6 theme-text-glossy font-medium">
              Founded on the belief that every celebration should be a masterpiece, our agency has spent over a decade perfecting the art of luxury event management.
            </p>
            <p className="text-lg font-light leading-relaxed mb-10 theme-text-glossy font-medium">
              From intimate VIP gatherings to monumental corporate galas, our dedicated team merges avant-garde design with flawless execution. We don't just plan events; we architect unforgettable memories.
            </p>
            
            <button className="interactive-hover pb-2 border-b-2 !border-black dark:!border-white theme-text-glossy uppercase tracking-widest text-sm font-bold hover:!text-[#D4AF37] dark:hover:!text-[#D4AF37] transition-colors">
              Read Our Full Story
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
