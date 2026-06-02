import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StarryLoadingProps {
  onComplete: () => void;
}

export const StarryLoading: React.FC<StarryLoadingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Tick progress from 0 to 100 over 2.4 seconds
    const duration = 2400;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Wait for fadeout animation
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Constellation stars outlining the new CPU chip logo
  const logoStars = [
    // Outer Square Corners (0-3)
    { x: 90, y: 30 },
    { x: 170, y: 30 },
    { x: 170, y: 110 },
    { x: 90, y: 110 },
    
    // Inner Square Corners (4-7)
    { x: 110, y: 50 },
    { x: 150, y: 50 },
    { x: 150, y: 90 },
    { x: 110, y: 90 },

    // Top Prongs (8-13)
    { x: 100, y: 30 }, { x: 100, y: 10 },
    { x: 130, y: 30 }, { x: 130, y: 10 },
    { x: 160, y: 30 }, { x: 160, y: 10 },

    // Bottom Prongs (14-19)
    { x: 100, y: 110 }, { x: 100, y: 130 },
    { x: 130, y: 110 }, { x: 130, y: 130 },
    { x: 160, y: 110 }, { x: 160, y: 130 },

    // Left Prongs (20-25)
    { x: 90, y: 40 }, { x: 70, y: 40 },
    { x: 90, y: 70 }, { x: 70, y: 70 },
    { x: 90, y: 100 }, { x: 70, y: 100 },

    // Right Prongs (26-31)
    { x: 170, y: 40 }, { x: 190, y: 40 },
    { x: 170, y: 70 }, { x: 190, y: 70 },
    { x: 170, y: 100 }, { x: 190, y: 100 }
  ];

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03040b]"
        >
          {/* Ambient space background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,16,38,0.7),rgba(3,4,11,1))] pointer-events-none" />

          {/* Random floating starry particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.15, 0.8, 0.15],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 2 + 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center select-none">
            {/* Constellation Logo Box */}
            <div className="w-[260px] h-[140px] relative mb-8">
              
              {/* Star nodes */}
              {logoStars.map((star, idx) => {
                const isTip = [9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31].includes(idx);
                return (
                  <motion.div
                    key={idx}
                    className="absolute rounded-full"
                    style={{
                      left: `${star.x}px`,
                      top: `${star.y}px`,
                      width: isTip ? '4.5px' : '3.5px',
                      height: isTip ? '4.5px' : '3.5px',
                      backgroundColor: isTip ? '#ff9900' : '#c084fc',
                      boxShadow: isTip 
                        ? '0 0 8px rgba(255,153,0,0.8)' 
                        : '0 0 8px rgba(192,132,252,0.8)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: progress > 15 ? 1 : 0, 
                      scale: progress > 15 ? [1, 1.3, 1] : 0 
                    }}
                    transition={{ 
                      delay: idx * 0.02, 
                      duration: 0.5 
                    }}
                  />
                );
              })}

              {/* Logo SVG Connecting Constellation Lines */}
              <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 260 140">
                {/* Outer Square Connections */}
                <motion.line x1="90" y1="30" x2="170" y2="30" stroke="rgba(192, 132, 252, 0.45)" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 25 ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <motion.line x1="170" y1="30" x2="170" y2="110" stroke="rgba(192, 132, 252, 0.45)" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 30 ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <motion.line x1="170" y1="110" x2="90" y2="110" stroke="rgba(192, 132, 252, 0.45)" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 35 ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <motion.line x1="90" y1="110" x2="90" y2="30" stroke="rgba(192, 132, 252, 0.45)" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 40 ? 1 : 0 }} transition={{ duration: 0.4 }} />

                {/* Inner Square Connections */}
                <motion.line x1="110" y1="50" x2="150" y2="50" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 45 ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <motion.line x1="150" y1="50" x2="150" y2="90" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 50 ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <motion.line x1="150" y1="90" x2="110" y2="90" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 55 ? 1 : 0 }} transition={{ duration: 0.4 }} />
                <motion.line x1="110" y1="90" x2="110" y2="50" stroke="rgba(192, 132, 252, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 60 ? 1 : 0 }} transition={{ duration: 0.4 }} />

                {/* Top Prongs */}
                <motion.line x1="100" y1="30" x2="100" y2="10" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 50 ? 1 : 0 }} />
                <motion.line x1="130" y1="30" x2="130" y2="10" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 52 ? 1 : 0 }} />
                <motion.line x1="160" y1="30" x2="160" y2="10" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 54 ? 1 : 0 }} />

                {/* Bottom Prongs */}
                <motion.line x1="100" y1="110" x2="100" y2="130" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 56 ? 1 : 0 }} />
                <motion.line x1="130" y1="110" x2="130" y2="130" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 58 ? 1 : 0 }} />
                <motion.line x1="160" y1="110" x2="160" y2="130" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 60 ? 1 : 0 }} />

                {/* Left Prongs */}
                <motion.line x1="90" y1="40" x2="70" y2="40" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 62 ? 1 : 0 }} />
                <motion.line x1="90" y1="70" x2="70" y2="70" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 64 ? 1 : 0 }} />
                <motion.line x1="90" y1="100" x2="70" y2="100" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 66 ? 1 : 0 }} />

                {/* Right Prongs */}
                <motion.line x1="170" y1="40" x2="190" y2="40" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 68 ? 1 : 0 }} />
                <motion.line x1="170" y1="70" x2="190" y2="70" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 70 ? 1 : 0 }} />
                <motion.line x1="170" y1="100" x2="190" y2="100" stroke="#ff9900" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: progress > 72 ? 1 : 0 }} />
              </svg>
            </div>

            {/* Glowing Brand Names */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: progress > 20 ? 1 : 0, y: progress > 20 ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold tracking-[0.25em] text-white uppercase text-center font-heading"
            >
              AWS Student Builder Group
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 40 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs text-blue-400 tracking-[0.18em] uppercase mt-1 font-sans font-medium"
            >
              Ganpat University
            </motion.p>

            {/* Loading Stats Panel */}
            <div className="mt-8 flex flex-col items-center">
              <span className="text-xs font-mono text-[#ff9900] tracking-wider mb-2">
                SYSTEM BOOT: {Math.round(progress)}%
              </span>
              
              {/* Progress Bar Container */}
              <div className="w-[180px] h-[3px] bg-slate-900 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-[#ff9900]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
