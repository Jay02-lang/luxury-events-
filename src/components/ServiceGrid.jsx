import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServiceGrid() {
  const services = [
    {
      title: 'Luxury Weddings',
      desc: 'Bespoke celebrations tailored to your unique love story with uncompromising attention to detail.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      features: ['Venue Curation', 'Royal Decor', 'VIP Concierge'],
      span: 'lg:row-span-2',
      height: 'h-[600px] lg:h-[800px]'
    },
    {
      title: 'Royal Galas',
      desc: 'Unforgettable evenings of elegance, entertainment, and profound impact.',
      img: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=2070&auto=format&fit=crop',
      features: ['Entertainment', 'Red Carpet', 'Gourmet Catering'],
      span: 'lg:col-span-1',
      height: 'h-[500px]'
    },
    {
      title: 'Corporate Summits',
      desc: 'High-end professional gatherings that inspire and connect industry leaders.',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
      features: ['Keynote Staging', 'Executive Transport', 'Global Venues'],
      span: 'lg:col-span-1',
      height: 'h-[500px]'
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-white/30 dark:bg-black/30 border-y border-gray-200/50 dark:border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-royale mb-6"
            >
              Mastering The Art <br/> Of <span className="gloss-red-text">Celebration</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 gloss-gold-bg origin-left mb-6"
          />
        </div>

        {/* 2x2 Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/20 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer ${service.span} ${service.height} hover-sheen`}
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
              
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                <h3 className="text-3xl lg:text-4xl font-royale text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 drop-shadow-md">
                  {service.title}
                </h3>
                
                <div className="overflow-hidden">
                  <p className="text-gray-200 text-base font-light leading-relaxed mb-6 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>

                <div className="overflow-hidden">
                  <ul className="space-y-3 mb-8 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-200 tracking-wider">
                        <Check size={18} className="text-[#D4AF37]" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gloss-Lacquer Bottom Action Tab */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                   <button className="w-full gloss-gold-bg text-black py-4 uppercase tracking-widest text-xs font-bold rounded-sm interactive-hover shadow-xl">
                     Explore {service.title.split(' ')[1] || service.title}
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
