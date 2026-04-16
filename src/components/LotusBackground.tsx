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
      <motion.div
        animate={{
          scale: [1.05, 1.08, 1.05],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '120%',
          height: '120%',
          backgroundImage: 'url("/lotus.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12, /* Soft opacity to keep text legible */
          mixBlendMode: 'multiply',
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      />
    </div>
  );
}
