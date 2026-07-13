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
      if (window.scrollY > 80) {
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

  // Scroll lock for mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'glass-nav py-4 shadow-lg shadow-black/10 backdrop-blur-xl bg-black/40'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo Brand (Hidden initially on Home page, appears on scroll. Not rendered on other pages) */}
            <Link 
              to="/" 
              className={`flex items-center gap-3 group transition-all duration-500 transform ${
                location.pathname === '/'
                  ? (!scrolled && !isOpen 
                      ? 'opacity-0 -translate-x-4 pointer-events-none' 
                      : 'opacity-100 translate-x-0 pointer-events-auto')
                  : 'hidden'
              }`}
            >
              <Logo size={32} className="group-hover:scale-110 transition-transform duration-300 shrink-0" />

              <div className="hidden sm:flex flex-col border-r border-white/20 pr-4 shrink-0">
                <span className="text-white font-bold text-sm md:text-base font-heading tracking-wide group-hover:text-[#a855f7] transition-colors duration-300">
                  AWS Student Builder Group
                </span>
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase">
                  Ganpat University
                </span>
              </div>
              
              <img src="/guni-logo.png" alt="Ganpat University" className="h-8 md:h-10 object-contain ml-2 shrink-0 hidden sm:block" />
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center transition-all duration-500 gap-10 ${
              location.pathname !== '/' ? 'w-full justify-center' : ''
            }`}>
              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`relative text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#a855f7] rounded-full"
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
                className="inline-flex items-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#a855f7] hover:bg-purple-600 rounded-full shadow-lg shadow-[#a855f7]/25 hover:shadow-[#a855f7]/45 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Join Hub
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer z-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl lg:hidden flex flex-col pt-24 pb-8 px-6"
          >
            <div className="flex-1 flex flex-col justify-center space-y-6">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-3xl font-bold tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-500 hover:text-[#a855f7] hover:translate-x-2'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="block h-1 w-12 bg-[#a855f7] mt-2 rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-8 border-t border-white/10"
            >
              <a
                href="https://www.meetup.com/aws-sbg-at-ganpat-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 text-base font-bold uppercase tracking-wider text-white bg-[#a855f7] hover:bg-purple-600 rounded-full shadow-lg shadow-[#a855f7]/25"
              >
                Join Community Hub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
