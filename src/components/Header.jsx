import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Weddings', href: '#' },
    { name: 'Galas', href: '#' },
    { name: 'Corporate', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent h-20 flex items-center",
        isScrolled 
          ? "bg-white/70 dark:bg-[#0D0E10]/70 backdrop-blur-xl shadow-sm border-gray-200/50 dark:border-white/10" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-1 flex items-center">
          <a href="#" className="interactive-hover">
            <h1 className="text-2xl font-royale font-bold tracking-widest gloss-gold-text">
              LUMIÈRE
            </h1>
          </a>
        </div>

        {/* Desktop Nav - Center */}
        <nav className="hidden md:flex items-center justify-center gap-10 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase hover:text-[#D4AF37] transition-colors interactive-hover"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA - Right */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleTheme} className="p-2 border border-gray-400 dark:border-[#D4AF37] rounded-full text-black dark:text-[#D4AF37] hover:bg-black hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-black transition-colors cursor-none">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="interactive-hover gloss-gold-bg px-6 py-2.5 text-xs font-bold text-black tracking-[0.2em] uppercase cursor-none">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 md:hidden bg-white/95 dark:bg-[#0D0E10]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-royale tracking-widest uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full gloss-black-bg text-white px-8 py-3 rounded-sm tracking-wider text-sm uppercase mt-4">
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
