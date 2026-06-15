import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-350 ${
          scrolled
            ? 'glass-nav py-3 shadow-lg shadow-black/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <Logo size={28} className="group-hover:scale-105 transition-transform duration-300" />

              <div className="flex flex-col">
                <span className="text-white font-bold text-sm sm:text-base font-heading tracking-wide group-hover:text-[#a855f7] transition-colors duration-300">
                  AWS Student Builder Group
                </span>
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase">
                  Ganpat University
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-350 ${
                        isActive
                          ? 'text-[#a855f7] text-glow'
                          : 'text-slate-300 hover:text-[#a855f7]'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#a855f7] rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Action Button */}
              <a
                href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#a855f7] hover:bg-purple-600 rounded-full shadow-lg shadow-[#a855f7]/25 hover:shadow-[#a855f7]/45 transition-all duration-300"
              >
        
                Join Hub
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors duration-300 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Expand transition) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-[65px] left-0 right-0 z-35 md:hidden glass-nav border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-full text-base font-semibold tracking-wider uppercase transition-all ${
                      isActive
                        ? 'text-white bg-[#a855f7] shadow-md shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                        : 'text-slate-300 hover:text-[#a855f7] hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#a855f7] hover:bg-purple-600 rounded-full shadow-lg shadow-[#a855f7]/25"
                >
                  Join Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
