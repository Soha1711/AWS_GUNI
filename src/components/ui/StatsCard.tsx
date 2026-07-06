import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';

interface StatsCardProps {
  memberCount: string | number;
  isLive?: boolean;
}

export function StatsCard({ memberCount, isLive = true }: StatsCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);
  const targetCount = parseInt(memberCount.toString().replace(/[^0-9]/g, ''), 10) || 1174;
  
  const controls = useAnimation();
  const particleControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Animate the main counter
      animate(0, targetCount, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => setCount(Math.floor(latest))
      });

      // Start graph draw animation
      controls.start({ pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } });
      
      // Initial particle run with draw
      particleControls.start({
        offsetDistance: ['0%', '100%'],
        opacity: [0, 1, 0],
        transition: { duration: 1.5, ease: 'easeInOut' }
      }).then(() => {
        // Start continuous loop
        particleControls.start({
          offsetDistance: ['0%', '100%'],
          opacity: [0, 1, 0],
          transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }
        });
      });
    }
  }, [isInView, targetCount, controls, particleControls]);

  const handleHoverStart = () => {
    particleControls.start({
      offsetDistance: ['0%', '100%'],
      opacity: [0, 1, 0],
      transition: { duration: 1, ease: 'easeInOut' }
    }).then(() => {
      // Resume continuous loop
      particleControls.start({
        offsetDistance: ['0%', '100%'],
        opacity: [0, 1, 0],
        transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }
      });
    });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover="hover"
      onHoverStart={handleHoverStart}
      className="relative w-full max-w-sm mx-auto group perspective-1000"
    >
      <motion.div
        variants={{
          hover: { y: -4, scale: 1.01 }
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B0B12] to-[#090914] p-6 border border-[#a855f7]/20 shadow-lg group-hover:border-[#a855f7]/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-colors duration-500"
      >
        {/* Background Aurora Effect */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 group-hover:bg-purple-500/20 transition-all duration-700 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 group-hover:bg-indigo-500/20 transition-all duration-700 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        
        {/* Faint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

        {/* Live Indicator */}
        {isLive && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="text-[10px] font-bold text-emerald-400 tracking-wider transition-opacity duration-1000 group-hover:opacity-75">
              LIVE
            </span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-[3000ms]"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full justify-center mt-2">
          {/* Main Counter */}
          <div className="flex items-baseline gap-1">
            <motion.div 
              variants={{ hover: { scale: 1.03 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 font-mono tracking-tighter"
              style={{ textShadow: '0 0 40px rgba(168,85,247,0.3)' }}
            >
              {count}
            </motion.div>
            <span className="text-4xl font-bold text-purple-400">+</span>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-slate-400 font-sans font-medium mt-1">
            Community Members
          </div>

          {/* Secondary Metrics Container (Expand on Hover) */}
          <motion.div
            variants={{
              initial: { height: 0, opacity: 0, marginTop: 0 },
              hover: { height: 'auto', opacity: 1, marginTop: 24 }
            }}
            initial="initial"
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Growth</span>
                <span className="text-sm font-semibold text-emerald-400">↑ +42 this month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Engagement</span>
                <span className="text-sm font-semibold text-white">95% Active</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-xs text-slate-500">Events</span>
                <span className="text-sm font-semibold text-white">12 Community Events</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sparkline Graph */}
        <div className="absolute bottom-4 right-4 w-[30%] h-8 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            {/* Defs for Glow */}
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Track Path (Background) */}
            <path
              d="M 0 30 C 20 30, 30 15, 50 20 C 70 25, 80 5, 100 10"
              fill="none"
              stroke="rgba(168,85,247,0.1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Animated Path */}
            <motion.path
              d="M 0 30 C 20 30, 30 15, 50 20 C 70 25, 80 5, 100 10"
              fill="none"
              stroke="#a855f7"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={controls}
            />
            {/* Traveling Particle */}
            <motion.circle
              r="2"
              fill="#d8b4fe"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={particleControls}
              style={{
                offsetPath: `path('M 0 30 C 20 30, 30 15, 50 20 C 70 25, 80 5, 100 10')`,
              }}
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
