import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing elements
  const springConfig = { damping: 25, stiffness: 220, mass: 0.4 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  // Velocity detection for dynamic stretching/trail
  const lastPos = useRef({ x: 0, y: 0, time: Date.now() });
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Calculate speed/velocity
      const now = Date.now();
      const dt = now - lastPos.current.time;
      if (dt > 10) {
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const currentSpeed = Math.min(dist / dt, 10); // cap velocity
        setSpeed(currentSpeed);

        lastPos.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    // Decay speed when mouse stops moving
    const interval = setInterval(() => {
      setSpeed((s) => Math.max(s - 0.5, 0));
    }, 50);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Inject styles to hide default cursor
    const style = document.createElement('style');
    style.id = 'custom-cursor-hide-style';
    style.innerHTML = `
      body, a, button, input, textarea, select, [role="button"], .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      const styleElement = document.getElementById('custom-cursor-hide-style');
      if (styleElement) styleElement.remove();
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Orbiting telemetry / target lock rings (Teal/Orange) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer segmented ring (slow counter-clockwise rotation) */}
        <motion.div
          className="absolute rounded-full border border-dashed"
          style={{
            width: hovered ? 56 : 38,
            height: hovered ? 56 : 38,
            borderColor: hovered ? 'rgba(0, 245, 255, 0.45)' : 'rgba(255, 170, 0, 0.35)',
            borderStyle: 'dashed',
            borderWidth: '1.5px',
            translateX: '-50%',
            translateY: '-50%',
            // Scale dynamically based on move speed (creates organic elastic stretching)
            scaleX: 1 + speed * 0.08,
            scaleY: 1 - speed * 0.04,
            rotate: speed * 15, // dynamic slant based on speed
          }}
          animate={{
            // Infinite rotation
            rotate: [360, 0],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: hovered ? 4 : 8,
              ease: 'linear',
            },
          }}
        />

        {/* Inner crosshair brackets (fast clockwise rotation) */}
        <motion.div
          className="absolute"
          style={{
            width: hovered ? 40 : 26,
            height: hovered ? 40 : 26,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: hovered ? 3 : 6,
              ease: 'linear',
            },
          }}
        >
          {/* Top bracket */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1 rounded-full transition-colors duration-300" 
            style={{ backgroundColor: hovered ? '#00f5ff' : '#ffaa00' }}
          />
          {/* Bottom bracket */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1 rounded-full transition-colors duration-300" 
            style={{ backgroundColor: hovered ? '#00f5ff' : '#ffaa00' }}
          />
          {/* Left bracket */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1.5 rounded-full transition-colors duration-300" 
            style={{ backgroundColor: hovered ? '#00f5ff' : '#ffaa00' }}
          />
          {/* Right bracket */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1.5 rounded-full transition-colors duration-300" 
            style={{ backgroundColor: hovered ? '#00f5ff' : '#ffaa00' }}
          />
        </motion.div>
      </motion.div>

      {/* 2. Core Star / Target lock dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Core center micro-dot */}
        <motion.div
          className="rounded-full"
          style={{
            width: 5,
            height: 5,
            backgroundColor: hovered ? '#00f5ff' : '#ffaa00',
            boxShadow: hovered 
              ? '0 0 10px #00f5ff, 0 0 20px #00f5ff' 
              : '0 0 8px #ffaa00, 0 0 15px #ffaa00',
          }}
          animate={{
            scale: clicked ? 2.5 : hovered ? 1.5 : 1,
            // Rotate the core slightly when hovering
            rotate: hovered ? 45 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 18,
          }}
        />
        
        {/* Hover lock-on target box */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: [0.3, 0.8, 0.5], scale: 1 }}
            className="absolute w-7 h-7 border border-[#00f5ff]/60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              borderRadius: '4px',
            }}
          />
        )}
      </motion.div>
    </>
  );
};
