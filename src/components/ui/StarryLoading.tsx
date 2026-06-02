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

  // Constellation stars inside the logo region
  const logoStars = [
    { x: 60, y: 70 },   // A - left base
    { x: 80, y: 30 },   // A - peak
    { x: 100, y: 70 },  // A - right base
    { x: 80, y: 55 },   // A - crossbar
    { x: 120, y: 35 },  // W - top left
    { x: 130, y: 70 },  // W - bottom left
    { x: 140, y: 45 },  // W - middle peak
    { x: 150, y: 70 },  // W - bottom right
    { x: 160, y: 35 },  // W - top right
    { x: 180, y: 35 },  // S - top curve start
    { x: 200, y: 35 },  // S - top curve end
    { x: 180, y: 52 },  // S - middle curve
    { x: 200, y: 70 },  // S - bottom curve
    { x: 180, y: 70 },  // S - bottom curve end
    // Arrow (A to Z smile)
    { x: 60, y: 90 },   // Arrow start
    { x: 130, y: 105 }, // Arrow bend
    { x: 200, y: 90 },  // Arrow end
    { x: 190, y: 95 },  // Arrow arrowhead top
    { x: 192, y: 83 },  // Arrow arrowhead bottom
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
            <div className="w-[300px] h-[160px] relative mb-8">
              {/* Star nodes */}
              {logoStars.map((star, idx) => (
                <motion.div
                  key={idx}
                  className="absolute rounded-full"
                  style={{
                    left: `${star.x}px`,
                    top: `${star.y}px`,
                    width: idx >= 14 ? '4.5px' : '3.5px',
                    height: idx >= 14 ? '4.5px' : '3.5px',
                    backgroundColor: idx >= 14 ? '#ff9900' : '#60a5fa',
                    boxShadow: idx >= 14 
                      ? '0 0 8px rgba(255,153,0,0.8)' 
                      : '0 0 8px rgba(96,165,250,0.8)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: progress > 15 ? 1 : 0, 
                    scale: progress > 15 ? [1, 1.3, 1] : 0 
                  }}
                  transition={{ 
                    delay: idx * 0.03, 
                    duration: 0.5 
                  }}
                />
              ))}

              {/* Logo SVG Connecting Constellation Lines */}
              <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 260 130">
                {/* A */}
                <motion.line
                  x1="60" y1="70" x2="80" y2="30"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 30 ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.line
                  x1="80" y1="30" x2="100" y2="70"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 35 ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.line
                  x1="70" y1="55" x2="90" y2="55"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 40 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* W */}
                <motion.line
                  x1="120" y1="35" x2="130" y2="70"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 30 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1="130" y1="70" x2="140" y2="45"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 38 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1="140" y1="45" x2="150" y2="70"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 42 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1="150" y1="70" x2="160" y2="35"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 46 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* S */}
                <motion.line
                  x1="200" y1="35" x2="180" y2="35"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 35 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.line
                  x1="180" y1="35" x2="180" y2="52"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 45 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.line
                  x1="180" y1="52" x2="200" y2="52"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 50 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.line
                  x1="200" y1="52" x2="200" y2="70"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 55 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.line
                  x1="200" y1="70" x2="180" y2="70"
                  stroke="rgba(96, 165, 250, 0.4)"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 60 ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Signature Arrow (A to Z smile) */}
                <motion.path
                  d="M 60 90 Q 130 115 200 90"
                  fill="none"
                  stroke="#ff9900"
                  strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 60 ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <motion.line
                  x1="200" y1="90" x2="190" y2="95"
                  stroke="#ff9900"
                  strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 75 ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.line
                  x1="200" y1="90" x2="192" y2="83"
                  stroke="#ff9900"
                  strokeWidth="1.8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress > 75 ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
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
