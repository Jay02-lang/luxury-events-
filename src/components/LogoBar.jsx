import { motion } from 'framer-motion';

export default function LogoBar() {
  const logos = [
    { name: 'Vogue', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vogue_logo.svg/2560px-Vogue_logo.svg.png' },
    { name: 'Forbes', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/2560px-Forbes_logo.svg.png' },
    { name: 'Four Seasons', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Four_Seasons_Hotels_and_Resorts_logo.svg/1200px-Four_Seasons_Hotels_and_Resorts_logo.svg.png' },
    { name: 'Rolex', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Rolex_logo.svg/2048px-Rolex_logo.svg.png' }
  ];

  return (
    <div className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-12 md:p-16 rounded-3xl shadow-2xl relative"
        >
          {/* Subtle gold glow behind logos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-[#D4AF37] rounded-full blur-[120px] opacity-10 pointer-events-none" />

          <h3 className="text-center text-2xl md:text-3xl font-royale tracking-widest theme-text-glossy uppercase mb-12 font-bold drop-shadow-sm">
            Trusted By The Elite
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-500">
            {logos.map((logo, index) => (
              <motion.h4 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="text-2xl md:text-4xl font-royale font-bold theme-text-glossy interactive-hover cursor-none"
              >
                {logo.name}
              </motion.h4>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
