import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import type { GalleryItem } from '../data/mockData';
import { Lightbox } from '../components/ui/Lightbox';


export const Gallery: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS;

  // Navigation helpers for Lightbox slider
  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex > 0) {
      setLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      // Loop to last
      setLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex < filteredItems.length - 1) {
      setLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      // Loop to first
      setLightboxItem(filteredItems[0]);
    }
  };

  return (
    <div className="relative pt-24 pb-16 font-sans">
      {/* Background stardust */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-[#a855f7]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-[#d946ef]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Community Gallery
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base">
          Browse visual logs from our offline workshops, coding hacks, expert speaker talks, and GNU campus gatherings.
        </p>
      </section>

      {/* Masonry Layout grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 glass border border-white/5 rounded-2xl max-w-md mx-auto space-y-4">
            <Compass className="w-12 h-12 text-[#a855f7] mx-auto animate-spin-slow" />
            <h3 className="text-lg font-bold text-white font-heading">No Media Located</h3>
            <p className="text-xs text-slate-400 font-sans">
              We haven't uploaded images yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.4)",
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(168, 85, 247, 0.15)",
                  }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group cursor-zoom-in shadow-lg transition-all duration-300"
                >
                  {/* Image container */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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
