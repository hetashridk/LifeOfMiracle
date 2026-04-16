'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LotusBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // We design delicate, stylized lotus petals using SVG paths with a soft SVG linear gradient.
  // The animation makes them gently breathe (scale) and gently sway (rotate).
  
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'var(--color-bg)',
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="petal-gradient-1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(242, 117, 82, 0.08)" /> {/* Coral base */}
            <stop offset="50%" stopColor="rgba(253, 164, 175, 0.12)" /> {/* Light pink middle */}
            <stop offset="100%" stopColor="rgba(255, 230, 235, 0)" /> {/* Fade to white */}
          </linearGradient>

          <linearGradient id="petal-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(224, 115, 142, 0.1)" /> {/* Deeper petal pink */}
            <stop offset="70%" stopColor="rgba(253, 203, 212, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {/* --- Abstract Lotus Petal Shapes - Left Side --- */}
        <motion.g
          animate={{
            rotate: [0, 2, 0, -2, 0],
            scale: [1, 1.02, 1, 1.01, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '20% 80%' }}
        >
          {/* Main large petal */}
          <path
            d="M -100,500 C 100,600 300,400 400,200 C 500,0 200,-100 -50,-50 Z"
            fill="url(#petal-gradient-1)"
            filter="url(#blur-filter)"
          />
          {/* Inner smaller petal */}
          <path
            d="M 0,600 C 150,700 250,550 300,350 C 350,150 100,50 0,100 Z"
            fill="url(#petal-gradient-2)"
            filter="url(#blur-filter)"
          />
        </motion.g>

        {/* --- Abstract Lotus Petal Shapes - Right Side --- */}
        <motion.g
          animate={{
            rotate: [0, -3, 0, 1, 0],
            scale: [1.02, 1, 1.03, 1, 1.02],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ transformOrigin: '80% 80%' }}
        >
          <path
            d="M 1200,700 C 900,800 700,500 650,200 C 600,-100 950,-150 1150,-50 Z"
            fill="url(#petal-gradient-1)"
            filter="url(#blur-filter)"
          />
          <path
            d="M 1100,850 C 850,900 750,650 800,450 C 850,250 1000,100 1150,150 Z"
            fill="url(#petal-gradient-2)"
            filter="url(#blur-filter)"
          />
        </motion.g>

        {/* --- Bottom Center Subtle Glow (Heart of the Lotus) --- */}
        <motion.ellipse
          cx="50%"
          cy="110%"
          rx="50%"
          ry="30%"
          fill="rgba(242, 117, 82, 0.05)"
          filter="url(#blur-filter)"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
