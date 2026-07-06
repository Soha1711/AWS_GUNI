import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PixelLoaderProps {
  onComplete: () => void;
}

const COLORS = [
  '#a855f7', // Purple
  '#f43f5e', // Pink
  '#f97316', // Orange
  '#e2e8f0', // Light Grey
];

const PIXEL_SIZE = 16;
const PIXEL_COUNT = 36;
const LOADING_DURATION = 3500;

interface PixelData {
  id: number;
  x: string;
  y: string;
  color: string;
  delay: number;
  initialYOffset: number;
}

export const PixelLoader: React.FC<PixelLoaderProps> = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);

  // Generate scattered pixels only once on mount
  const scatteredPixels = useMemo<PixelData[]>(() => {
    const pixels: PixelData[] = [];
    for (let i = 0; i < PIXEL_COUNT; i++) {
      // Keep pixels within 5% to 95% of viewport
      const posX = 5 + Math.random() * 90;
      const posY = 5 + Math.random() * 90;
      
      pixels.push({
        id: i,
        x: `${posX}vw`,
        y: `${posY}vh`,
        color: COLORS[i % COLORS.length],
        delay: Math.random() * 0.8 + 0.2, // 200ms to 1000ms delay
        initialYOffset: Math.random() > 0.5 ? 40 : -40, // Fade in from above or below
      });
    }
    return pixels;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, LOADING_DURATION);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="pixel-loader"
          // Gradual background transparency: start at solid #060B18, fade to transparent over LOADING_DURATION
          initial={{ backgroundColor: 'rgba(6, 11, 24, 1)' }}
          animate={{ backgroundColor: 'rgba(6, 11, 24, 0)' }}
          exit={{ opacity: 0 }}
          transition={{
            backgroundColor: { duration: LOADING_DURATION / 1000, ease: 'linear' },
            opacity: { duration: 0.6, ease: 'easeOut' },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
          style={{ fontFamily: "'IBM Plex Mono', 'JetBrains Mono', monospace" }}
        >
          {/* Scattered Pixels */}
          {scatteredPixels.map((p) => (
            <motion.div
              key={`scatter-${p.id}`}
              className="absolute"
              style={{
                width: PIXEL_SIZE,
                height: PIXEL_SIZE,
                backgroundColor: p.color,
                boxShadow: `0 0 10px ${p.color}40`, // 25% glow
                left: p.x,
                top: p.y,
              }}
              initial={{ opacity: 0, scale: 0, y: p.initialYOffset }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -6, 0, 4, 0], // subtle floating
                x: [0, 4, -4, 0],    // subtle drift
                rotate: [-1, 2, -2, 1], // subtle rotation
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                // Disperse towards edges slightly
                x: (parseFloat(p.x) - 50) * 3, // move further out based on distance from center
                y: (parseFloat(p.y) - 50) * 3,
              }}
              transition={{
                opacity: { duration: 0.6, delay: p.delay },
                scale: { duration: 0.6, delay: p.delay, ease: 'easeOut' },
                // Entry y transition
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                },
                x: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                },
                rotate: {
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                },
              }}
            />
          ))}

          {/* Central Loading Indicator */}
          <motion.div
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex items-center gap-6 z-10"
          >
            {/* 4-Pixel Rotating Spinner */}
            <motion.div
              className="relative w-12 h-12"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            >
              {/* Top Pixel - Purple */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2"
                style={{
                  width: PIXEL_SIZE,
                  height: PIXEL_SIZE,
                  backgroundColor: COLORS[0],
                  boxShadow: `0 0 10px ${COLORS[0]}40`
                }}
              />
              {/* Right Pixel - Pink */}
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2"
                style={{
                  width: PIXEL_SIZE,
                  height: PIXEL_SIZE,
                  backgroundColor: COLORS[1],
                  boxShadow: `0 0 10px ${COLORS[1]}40`
                }}
              />
              {/* Bottom Pixel - Orange */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: PIXEL_SIZE,
                  height: PIXEL_SIZE,
                  backgroundColor: COLORS[2],
                  boxShadow: `0 0 10px ${COLORS[2]}40`
                }}
              />
              {/* Left Pixel - Light Grey */}
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2"
                style={{
                  width: PIXEL_SIZE,
                  height: PIXEL_SIZE,
                  backgroundColor: COLORS[3],
                  boxShadow: `0 0 10px ${COLORS[3]}40`
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <div className="text-[#F8F8F8] font-medium tracking-[0.08em] text-lg">
              Loading...
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
