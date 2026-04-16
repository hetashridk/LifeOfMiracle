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
      {/* Left Lotus */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '-5%',
          width: '35vw',
          height: '60vh',
          minWidth: '300px',
          backgroundImage: 'url("/lotus_right.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.18,
          mixBlendMode: 'multiply',
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      />

      {/* Right Lotus */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '35vw',
          height: '60vh',
          minWidth: '300px',
          backgroundImage: 'url("/lotus.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.18,
          mixBlendMode: 'multiply',
          transform: 'scaleX(-1)', // Mirror the image for the right side
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      />
    </div>
  );
}
