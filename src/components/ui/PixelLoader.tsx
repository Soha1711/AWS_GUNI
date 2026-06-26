import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PixelLoaderProps {
  onComplete: () => void;
}

export const PixelLoader: React.FC<PixelLoaderProps> = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2000); // 2 seconds loading
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="pixel-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060814]"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8">
              <motion.div
                className="absolute top-0 left-0 w-3 h-3 bg-[#a855f7]"
                animate={{
                  x: [0, 20, 20, 0, 0],
                  y: [0, 0, 20, 20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-3 h-3 bg-[#e879f9]"
                animate={{
                  x: [0, -20, -20, 0, 0],
                  y: [0, 0, -20, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            <span className="text-slate-300 font-mono text-xl tracking-wider">
              Loading...
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
