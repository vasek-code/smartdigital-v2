
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/Show logic - smoother threshold
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Scrolling DOWN
        } else {
          setIsVisible(true); // Scrolling UP
        }
      } else {
        setIsVisible(true); // Always visible at top
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ 
          y: isVisible ? 20 : -100, 
          x: "-50%",
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-1/2 z-50 w-[90%] max-w-[500px]"
      >
        {/* 
           UPDATED STYLE: 
           - bg-white/5 (Very transparent, barely visible tint)
           - backdrop-blur-2xl (Heavy blur for legibility)
           - border-white/10 (Subtle edge)
        */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
            Smart<span className="text-primary">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle (CTA Start button removed) */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              className="text-white p-1 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                key={link.label} 
                href={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-medium text-white hover:text-primary"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="mt-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
                <X />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
