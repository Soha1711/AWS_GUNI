import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Tag, Calendar, Eye, Compass } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import type { GalleryItem } from '../data/mockData';
import { Lightbox } from '../components/ui/Lightbox';


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  }
};

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'workshop' | 'hackathon' | 'speaker' | 'community'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'hackathon', name: 'Hackathons' },
    { id: 'speaker', name: 'Speakers' },
    { id: 'community', name: 'Community' }
  ] as const;

  const filteredItems = useMemo(
    () =>
      GALLERY_ITEMS.filter((item) => {
        return activeCategory === 'all' || item.category === activeCategory;
      }),
    [activeCategory]
  );

  // Navigation helpers for Lightbox slider
  const handlePrev = useCallback(() => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex > 0) {
      setLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      // Loop to last
      setLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  }, [filteredItems, lightboxItem]);

  const handleNext = useCallback(() => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex < filteredItems.length - 1) {
      setLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      // Loop to first
      setLightboxItem(filteredItems[0]);
    }
  }, [filteredItems, lightboxItem]);

  return (
    <div className="relative pt-24 pb-16 font-sans">
      {/* Background stardust */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-[#ff9900]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Community Gallery
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Browse visual logs from our offline workshops, coding hacks, expert speaker talks, and GUNI campus gatherings.
        </p>
      </section>

      {/* Categories Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#ff9900]/10 border-[#ff9900] text-[#ff9900] shadow-[0_0_12px_rgba(255,153,0,0.12)]'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Layout grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 glass border border-white/5 rounded-2xl max-w-md mx-auto space-y-4">
            <Compass className="w-12 h-12 text-[#ff9900] mx-auto animate-spin-slow" />
            <h3 className="text-lg font-bold text-white font-heading">No Media Located</h3>
            <p className="text-xs text-slate-400 font-sans">
              We haven&apos;t uploaded images matching this category yet. Check back soon!
            </p>
          </div>
        ) : (
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  variants={cardVariants}
                  layout
                  className="animate-float"
                  style={{
                    animationDelay: `${idx * 0.2}s`,
                    animationDuration: `${5 + (idx % 3)}s`
                  }}
                  key={item.id}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      borderColor: "rgba(0, 245, 255, 0.4)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 245, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setLightboxItem(item)}
                    className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group cursor-zoom-in shadow-lg transition-colors duration-300 aspect-[4/3] w-full"
                  >
                    {/* Image container */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />

                    {/* Dark hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                    {/* Hidden Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-3 pointer-events-none">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#ff9900] uppercase font-bold">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3 text-[#ff9900]" />
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-white font-bold font-heading text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                      
                      <span className="text-[10px] font-semibold text-blue-400 flex items-center gap-1 uppercase tracking-wider">
                        <Eye className="w-3.5 h-3.5" /> Inspect Frame
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Lightbox Modal overlay */}
      <Lightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
