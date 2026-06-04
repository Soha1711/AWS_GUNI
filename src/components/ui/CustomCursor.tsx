import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for trailing effect
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices that support hover (non-touch devices)
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track when hovering interactive elements
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

    // Hide standard cursor globally via styling
    const style = document.createElement('style');
    style.id = 'custom-cursor-hide-style';
    style.innerHTML = `
      body, a, button, input, textarea, select, [role="button"], .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
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
      {/* 1. Trailing Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9999]"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 44 : 32,
          height: hovered ? 44 : 32,
          borderColor: hovered ? 'rgba(0, 245, 255, 0.8)' : 'rgba(255, 170, 0, 0.45)',
          backgroundColor: hovered ? 'rgba(0, 245, 255, 0.05)' : 'rgba(0, 0, 0, 0)',
          boxShadow: hovered 
            ? '0 0 15px rgba(0, 245, 255, 0.4), inset 0 0 10px rgba(0, 245, 255, 0.2)' 
            : '0 0 8px rgba(255, 170, 0, 0.15)',
        }}
        animate={{
          scale: clicked ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
      />

      {/* 2. Precise Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: hovered ? '#00f5ff' : '#ffaa00',
          boxShadow: hovered 
            ? '0 0 10px #00f5ff, 0 0 20px #00f5ff' 
            : '0 0 8px #ffaa00, 0 0 15px #ffaa00',
        }}
        animate={{
          scale: clicked ? 1.5 : hovered ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 25,
        }}
      />
    </>
  );
};
