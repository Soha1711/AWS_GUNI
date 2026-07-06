import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Compass, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import type { GalleryItem } from '../data/mockData';
import { Lightbox } from '../components/ui/Lightbox';

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  N: number;
  scrollYProgress: any;
  radiusX: number;
  radiusY: number;
  cardWidth: number;
  cardHeight: number;
  isActive: boolean;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  item,
  index,
  N,
  scrollYProgress,
  radiusX,
  radiusY,
  cardWidth,
  cardHeight,
  isActive,
  onClick
}) => {
  // Rotate 1.2 times (432 degrees) over the scroll track for a slower, premium spin
  const angle = useTransform(
    scrollYProgress,
    [0, 1],
    [index * (360 / N), index * (360 / N) + 360 * 1.2]
  );

  const rad = useTransform(angle, a => (a * Math.PI) / 180);
  const translateX = useTransform(rad, r => Math.sin(r) * radiusX);
  const translateY = useTransform(rad, r => Math.cos(r) * radiusY);

  // Cards in front are opaque, background cards fade out significantly to reduce clutter
  const opacity = useTransform(angle, a => {
    const cos = Math.cos((a * Math.PI) / 180);
    return 0.15 + (cos + 1) * 0.425; // ranges from 0.15 to 1.0
  });

  // Scale depth effect: smaller in the back, larger in the front
  const scale = useTransform(angle, a => {
    const cos = Math.cos((a * Math.PI) / 180);
    return 0.72 + (cos + 1) * 0.14; // ranges from 0.72 to 1.0
  });

  // Layering
  const zIndex = useTransform(angle, a => {
    const cos = Math.cos((a * Math.PI) / 180);
    return Math.round((cos + 1) * 10);
  });

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: cardWidth,
        height: cardHeight,
        x: translateX,
        y: translateY,
        opacity: opacity,
        scale: scale,
        zIndex: zIndex,
        pointerEvents: 'auto'
      }}
      className={`rounded-xl overflow-hidden border bg-slate-950/90 backdrop-blur-md transition-colors duration-500 shadow-2xl flex flex-col group cursor-zoom-in ${
        isActive 
          ? 'border-[#a855f7]/60 shadow-[0_0_40px_rgba(168,85,247,0.2)]' 
          : 'border-white/10'
      }`}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover select-none transition-all duration-700 ${
            isActive ? 'opacity-90 group-hover:opacity-100 group-hover:scale-105' : 'opacity-40 hover:opacity-70'
          }`}
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 pointer-events-none" />

        {/* Subtle details overlay inside the active card itself */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent border-t border-white/5"
            >
              <span className="text-[7.5px] font-mono text-[#a855f7] uppercase tracking-wider block">
                {item.category}
              </span>
              <h4 className="text-[10px] font-bold text-white truncate mt-0.5 leading-tight">
                {item.title}
              </h4>
              <p className="text-[7.5px] text-slate-400 mt-0.5 font-mono">
                {item.date}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover zoom icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="p-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Gallery: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const filteredItems = GALLERY_ITEMS;
  const N = filteredItems.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalDegrees = latest * 360 * 1.2;
    let minDistance = Infinity;
    let closestIndex = 0;
    for (let i = 0; i < N; i++) {
      const cardAngle = (i * (360 / N) + totalDegrees) % 360;
      const dist = Math.min(cardAngle, 360 - cardAngle);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  });

  // Navigation helpers for Lightbox slider
  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex > 0) {
      setLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      setLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex < filteredItems.length - 1) {
      setLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      setLightboxItem(filteredItems[0]);
    }
  };

  // Sleeker dimensions with more breathing room
  const radiusX = isMobile ? 120 : 430;
  const radiusY = isMobile ? 80 : 150;
  const cardWidth = isMobile ? 110 : 230;
  const cardHeight = isMobile ? 70 : 145;

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-[#050713]">
      {/* Sticky viewport content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-between pt-24 pb-8 select-none">
        
        {/* Background glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#d946ef]/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Central heading - subtle and elegant */}
        <div className="absolute flex flex-col items-center justify-center text-center pointer-events-none px-4 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[8px] font-mono text-[#a855f7] uppercase tracking-widest mb-1 opacity-60">
            AWS SBG Ganpat University
          </span>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight max-w-sm sm:max-w-md md:max-w-lg leading-tight uppercase">
            A Glimpse from the community
          </h2>
        </div>

        {/* Ellipse Orbiting Gallery */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 glass border border-white/5 rounded-2xl max-w-md mx-auto space-y-4 z-20 my-auto">
            <Compass className="w-12 h-12 text-[#a855f7] mx-auto animate-spin-slow" />
            <h3 className="text-lg font-bold text-white font-heading">No Media Located</h3>
            <p className="text-xs text-slate-400 font-sans">
              We haven't uploaded images yet. Check back soon!
            </p>
          </div>
        ) : (
          <div 
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="z-10 mt-8 mb-4"
          >
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                N={N}
                scrollYProgress={scrollYProgress}
                radiusX={radiusX}
                radiusY={radiusY}
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                isActive={activeIndex === index}
                onClick={() => setLightboxItem(item)}
              />
            ))}
          </div>
        )}

        {/* Bottom scroll guide */}
        <div className="w-full flex flex-col items-center gap-1.5 z-20 shrink-0 pointer-events-none pb-4">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-7 border border-white/20 rounded-full flex justify-center pt-0.5"
          >
            <div className="w-1 h-1 bg-[#a855f7] rounded-full" />
          </motion.div>
          <span className="text-[8px] uppercase tracking-widest text-slate-500 font-mono">
            Scroll Down to Spin Deck
          </span>
        </div>

      </div>

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
