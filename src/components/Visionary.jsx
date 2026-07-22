import { motion } from 'framer-motion';

export default function Visionary() {
  return (
    <section className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-royale text-gray-900 dark:text-white mb-8 leading-snug drop-shadow-sm">
            BRINGING YOUR <span className="gloss-gold-text">VISION</span> TO LIFE
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12">
            We specialize in crafting bespoke events that reflect your unique style and aspirations. From intimate gatherings to grand galas, our team of experts meticulously manages every detail to ensure a flawless and unforgettable experience. Let us transform your dreams into reality.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
            alt="Event Detail" 
            className="w-full h-64 md:h-96 object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
