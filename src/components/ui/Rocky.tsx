import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';

// Rocky quotes from Project Hail Mary
const ROCKY_QUOTES = [
  "🎵 Amaze, amaze, amaze! 🎵",
  "🎵 Fist my bump! 🎵",
  "🎵 Question: You study cloud technology, yes? 🎵",
  "🎵 You are happy, I am happy. 🎵",
  "🎵 Good, proud, friendly! 🎵",
  "🎵 Human are made of leaks. Scary! 🎵",
  "🎵 Eridian atmosphere: super hot, super heavy! 🎵",
  "🎵 I watch you build, human. 🎵",
  "🎵 Grace! Fist my bump! 🎵",
  "🎵 Thank, thank, thank! 🎵",
  "🎵 Eridians do not sleep, we build! 🎵",
  "🎵 Sleep is stupid. 🎵",
  "🎵 I am built of stone. Bumpy! 🎵",
  "🎵 You observe? Eridian science is strong! 🎵"
];

// Musical symbols for rising effect on click
const MUSIC_SYMBOLS = ["🎵", "🎶", "♭", "♯", "𝄞", "𝄢"];

interface Note {
  id: number;
  x: number;
  y: number;
  symbol: string;
}

export const Rocky: React.FC = () => {
  const [quote, setQuote] = useState<string>("");
  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [wiggleSpeed, setWiggleSpeed] = useState<number>(3.5);
  const [constraints, setConstraints] = useState({ left: 10, right: 800, top: 120, bottom: 600 });

  // Motion values for direct animation control to prevent snap-fights and resets on re-render
  const x = useMotionValue(100);
  const y = useMotionValue(400);
  const rotate = useMotionValue(0);

  // Refs for tracking active framer-motion animations
  const animX = useRef<any>(null);
  const animY = useRef<any>(null);
  const animRotate = useRef<any>(null);

  // Refs for speech bubble clear timers
  const quoteTimerRef = useRef<any>(null);
  const wiggleTimerRef = useRef<any>(null);

  // Function to start a slow, sweeping float to a random location inside viewport
  const startFloating = (startX: number, startY: number) => {
    if (animX.current) animX.current.stop();
    if (animY.current) animY.current.stop();

    const w = window.innerWidth;
    const h = window.innerHeight;

    const minX = 10;
    const maxX = Math.max(10, w - 110);
    const minY = 120; // safe space for speech bubble
    const maxY = Math.max(120, h - 110);

    const targetX = minX + Math.random() * (maxX - minX);
    const targetY = minY + Math.random() * (maxY - minY);

    const dx = targetX - startX;
    const dy = targetY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Drifts around at a constant slow speed (20 to 30px per second)
    const speed = 20 + Math.random() * 10;
    const duration = Math.max(1, distance / speed);

    animX.current = animate(x, targetX, {
      duration: duration,
      ease: "easeInOut",
      onComplete: () => {
        startFloating(targetX, targetY);
      }
    });

    animY.current = animate(y, targetY, {
      duration: duration,
      ease: "easeInOut"
    });
  };

  // Initialize and update positions and constraints
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Set initial position
    const initialX = w * 0.1;
    const initialY = h * 0.7;
    x.set(initialX);
    y.set(initialY);

    setConstraints({
      left: 10,
      right: w - 110,
      top: 120,
      bottom: h - 110
    });

    // Start gentle float loop
    startFloating(initialX, initialY);

    // Start slow rotation loop
    animRotate.current = animate(rotate, 360, {
      duration: 80,
      ease: "linear",
      repeat: Infinity
    });

    const handleResize = () => {
      const currentW = window.innerWidth;
      const currentH = window.innerHeight;
      
      setConstraints({
        left: 10,
        right: currentW - 110,
        top: 120,
        bottom: currentH - 110
      });

      // Keep Rocky inside bounds if window shrinks
      const currentX = x.get();
      const currentY = y.get();
      const newMaxX = Math.max(10, currentW - 110);
      const newMaxY = Math.max(120, currentH - 110);

      if (currentX > newMaxX || currentY > newMaxY || currentX < 10 || currentY < 120) {
        const safeX = Math.min(Math.max(10, currentX), newMaxX);
        const safeY = Math.min(Math.max(120, currentY), newMaxY);
        startFloating(safeX, safeY);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animX.current) animX.current.stop();
      if (animY.current) animY.current.stop();
      if (animRotate.current) animRotate.current.stop();
      if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
      if (wiggleTimerRef.current) clearTimeout(wiggleTimerRef.current);
    };
  }, []);

  // Trigger a quote
  const handleInteract = () => {
    // Clear any active timers to prevent conflicts
    if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current);
    if (wiggleTimerRef.current) clearTimeout(wiggleTimerRef.current);

    const randomQuote = ROCKY_QUOTES[Math.floor(Math.random() * ROCKY_QUOTES.length)];
    setQuote(randomQuote);
    setShowQuote(true);
    setWiggleSpeed(1.2); // Wiggle legs faster when excited

    // Create rising click musical notes
    const newNotes = Array.from({ length: 3 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 50,
      y: -20 - Math.random() * 20,
      symbol: MUSIC_SYMBOLS[Math.floor(Math.random() * MUSIC_SYMBOLS.length)]
    }));
    setNotes((prev) => [...prev, ...newNotes]);

    // Keep speech bubble visible for 7.5 seconds for comfortable reading
    quoteTimerRef.current = setTimeout(() => {
      setShowQuote(false);
    }, 7500);

    // Reset leg wiggle speed after 2.5 seconds
    wiggleTimerRef.current = setTimeout(() => {
      setWiggleSpeed(3.5);
    }, 2500);
  };

  // Auto clean up floating notes
  useEffect(() => {
    if (notes.length > 0) {
      const timer = setTimeout(() => {
        setNotes((prev) => prev.slice(3));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [notes]);

  // Periodic random wiggles and dialogue triggers
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      // 30% chance to speak every 20 seconds
      if (Math.random() < 0.3 && !showQuote) {
        handleInteract();
      }
    }, 20000);

    return () => clearInterval(quoteInterval);
  }, [showQuote]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating Rocky container using slow, sweeping random values restricted inside viewport */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 pointer-events-auto"
        style={{ x, y }}
        drag
        dragElastic={0.15}
        dragConstraints={constraints}
        onDragStart={() => {
          setWiggleSpeed(0.8);
          if (animX.current) animX.current.stop();
          if (animY.current) animY.current.stop();
          if (animRotate.current) animRotate.current.stop();
        }}
        onDragEnd={() => {
          setWiggleSpeed(3.5);
          handleInteract();

          // Resume floating and rotating from the dropped location
          const currentX = x.get();
          const currentY = y.get();
          startFloating(currentX, currentY);

          animRotate.current = animate(rotate, rotate.get() + 360, {
            duration: 80,
            ease: "linear",
            repeat: Infinity
          });
        }}
        whileDrag={{ scale: 1.12 }}
      >
        <div className="relative group flex flex-col items-center">
          {/* Custom Eridian speech text box (High Contrast & Clear Styling) */}
          <AnimatePresence>
            {showQuote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                className="absolute bottom-28 w-72 sm:w-80 p-4 bg-[#0a0b14]/95 border-2 border-[#00f5ff] text-white text-xs sm:text-sm font-semibold font-mono text-center rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.45)] backdrop-blur-md select-none leading-relaxed"
                style={{
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.35), inset 0 0 10px rgba(6, 182, 212, 0.2)"
                }}
              >
                {quote}
                {/* Pointer tip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0a0b14] border-r-2 border-b-2 border-[#00f5ff] rotate-45 -mt-1.5" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Render rising music notes */}
          {notes.map((note) => (
            <motion.span
              key={note.id}
              initial={{ opacity: 1, y: -20, x: note.x, scale: 0.7 }}
              animate={{ opacity: 0, y: -90, scale: 1.3 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute text-sm select-none text-glow-blue text-[#00f5ff] font-bold"
            >
              {note.symbol}
            </motion.span>
          ))}

          {/* Rocky Character Graphic (5-legged Eridian Stone Crab) */}
          <motion.div
            onClick={handleInteract}
            style={{ rotate }}
            className="w-24 h-24 flex items-center justify-center cursor-pointer select-none"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full drop-shadow-[0_0_15px_rgba(255,170,0,0.18)]"
            >
              <defs>
                {/* Stone texture pattern */}
                <radialGradient id="stoneGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4b5563" />
                  <stop offset="70%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1f2937" />
                </radialGradient>
                {/* Glowing cyan lens for sensory visual feedback */}
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#00f5ff" />
                  <stop offset="75%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Legs (Animated 5 wiggling legs radiating with 5-point symmetry) */}
              {[0, 72, 144, 216, 288].map((angle, i) => {
                return (
                  <motion.g
                    key={i}
                    style={{ originX: "50px", originY: "50px" }}
                    animate={{
                      rotate: [0, i % 2 === 0 ? 5 : -5, 0]
                    }}
                    transition={{
                      duration: wiggleSpeed,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                  >
                    {/* leg path */}
                    <path
                      d={`M 50 50 C ${50 + Math.sin((angle * Math.PI) / 180) * 20} ${50 - Math.cos((angle * Math.PI) / 180) * 20}, ${50 + Math.sin(((angle - 15) * Math.PI) / 180) * 38} ${50 - Math.cos(((angle - 15) * Math.PI) / 180) * 38}, ${50 + Math.sin((angle * Math.PI) / 180) * 44} ${50 - Math.cos((angle * Math.PI) / 180) * 44}`}
                      fill="none"
                      stroke="#374151"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    {/* Joint highlight */}
                    <circle
                      cx={50 + Math.sin((angle * Math.PI) / 180) * 24}
                      cy={50 - Math.cos((angle * Math.PI) / 180) * 24}
                      r="4"
                      fill="#1f2937"
                    />
                    {/* Three wiggling fingers at the tip */}
                    <circle
                      cx={50 + Math.sin((angle * Math.PI) / 180) * 44}
                      cy={50 - Math.cos((angle * Math.PI) / 180) * 44}
                      r="3.5"
                      fill="#ffaa00"
                      className="animate-pulse"
                      style={{
                        boxShadow: "0 0 6px #ffaa00"
                      }}
                    />
                  </motion.g>
                );
              })}

              {/* Bumpy Stone Body Carapace (Pentagonal Symmetry) */}
              <polygon
                points="50,18 80,40 69,76 31,76 20,40"
                fill="url(#stoneGrad)"
                stroke="#1f2937"
                strokeWidth="2.5"
              />

              {/* Rocky's Stone cracks & bumps texture (sci-fi visual detail) */}
              <path d="M 40 30 L 46 44 L 38 60" stroke="#1f2937" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 60 30 L 54 44 L 62 60" stroke="#1f2937" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 50 62 L 50 76" stroke="#1f2937" strokeWidth="1.5" fill="none" opacity="0.6" />
              
              <circle cx="34" cy="46" r="2.5" fill="#111827" opacity="0.5" />
              <circle cx="66" cy="46" r="2" fill="#111827" opacity="0.5" />
              <circle cx="50" cy="30" r="3" fill="#111827" opacity="0.5" />

              {/* Eridian Sensory Core (Glowing central lens) */}
              <circle cx="50" cy="48" r="14" fill="url(#coreGlow)" />
              <circle cx="50" cy="48" r="4" fill="#ffffff" className="animate-ping" style={{ animationDuration: '4s' }} />
              <circle cx="50" cy="48" r="5" fill="#00f5ff" opacity="0.75" />

              {/* Glowing Eridian concentric sound-radar scanning rings around his core */}
              <circle 
                cx="50" 
                cy="48" 
                r="18" 
                fill="none" 
                stroke="#00f5ff" 
                strokeWidth="0.8" 
                strokeDasharray="4 6" 
                className="animate-spin-slow"
              />
            </svg>
          </motion.div>

          {/* Interactive Help Hint for dragging */}
          <span className="text-[8px] font-mono text-slate-500 uppercase select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mt-1">
            [drag // click]
          </span>
        </div>
      </motion.div>
    </div>
  );
};
