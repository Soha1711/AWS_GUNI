import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
}

const PARTICLE_COLORS = ['#00f5ff', '#ffaa00', '#c084fc', '#ffffff'];

export const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for the outer ring
  const springConfig = { damping: 28, stiffness: 200, mass: 0.4 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  // Particles array
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveMouse = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);

      // Generate a new particle on movement with a small probability to throttle rate
      if (Math.random() < 0.35) {
        const id = particleIdRef.current++;
        const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
        const size = Math.random() * 3 + 2; // 2px to 5px
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        
        const newParticle: Particle = {
          id,
          x,
          y,
          color,
          size,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };

        setParticles((prev) => [...prev, newParticle].slice(-25)); // Keep max 25 particles
      }
    };

    // Update particle positions and shrink them
    const updateParticles = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            size: Math.max(p.size - 0.08, 0),
          }))
          .filter((p) => p.size > 0)
      );
    }, 16);

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

    // Hide standard cursor
    const style = document.createElement('style');
    style.id = 'custom-cursor-hide-style';
    style.innerHTML = `
      body, a, button, input, textarea, select, [role="button"], .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(updateParticles);
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
      {/* 1. Stardust Particles Trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed rounded-full pointer-events-none z-[9998]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            transform: 'translate(-50%, -50%)',
            opacity: p.size / 5, // Fade out as it gets smaller
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}

      {/* 2. Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999]"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 46 : 28,
          height: hovered ? 46 : 28,
          borderColor: hovered ? 'rgba(0, 245, 255, 0.8)' : 'rgba(255, 170, 0, 0.45)',
          backgroundColor: hovered ? 'rgba(0, 245, 255, 0.08)' : 'rgba(0, 0, 0, 0)',
          boxShadow: hovered 
            ? '0 0 15px rgba(0, 245, 255, 0.45), inset 0 0 8px rgba(0, 245, 255, 0.2)' 
            : '0 0 6px rgba(255, 170, 0, 0.12)',
        }}
        animate={{
          scale: clicked ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 24,
        }}
      />

      {/* 3. Core center dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          backgroundColor: hovered ? '#00f5ff' : '#ffaa00',
          boxShadow: hovered 
            ? '0 0 12px #00f5ff, 0 0 20px #00f5ff' 
            : '0 0 8px #ffaa00, 0 0 16px #ffaa00',
        }}
        animate={{
          scale: clicked ? 1.8 : hovered ? 0.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 22,
        }}
      />
    </>
  );
};
