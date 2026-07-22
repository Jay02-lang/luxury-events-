import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-20 pb-10 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-royale font-bold tracking-widest gloss-gold-text mb-6">
            LUMIÈRE
          </h2>
          <p className="text-gray-800 dark:text-gray-400 font-light max-w-sm mb-8 leading-relaxed">
            Curating exquisite experiences and redefining luxury events across the globe. Your vision, our masterpiece.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center gloss-gold-bg rounded-full text-black interactive-hover font-bold text-xs uppercase tracking-wider">
              IG
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center gloss-gold-bg rounded-full text-black interactive-hover font-bold text-xs uppercase tracking-wider">
              X
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center gloss-gold-bg rounded-full text-black interactive-hover font-bold text-xs uppercase tracking-wider">
              IN
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-royale text-xl mb-6 tracking-wide">Inquiries</h4>
          <ul className="space-y-4 text-gray-800 dark:text-gray-400 font-light">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Plan an Event</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Venues</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Partnerships</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-royale text-xl mb-6 tracking-wide">Contact</h4>
          <ul className="space-y-4 text-gray-800 dark:text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#D4AF37]" />
              hello@lumiere-events.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#D4AF37]" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#D4AF37] mt-1" />
              <span>1250 Avenue of the Americas<br/>New York, NY 10020</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-800 dark:text-gray-500 tracking-wider">
        <p>&copy; {new Date().getFullYear()} Lumière Event Management. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
