"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import Image from 'next/image';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        background: scrolled ? 'rgba(249, 246, 242, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        zIndex: 50,
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Image 
          src="/LOM logo.png" 
          alt="Life of a Miracle Logo" 
          width={250} 
          height={60} 
          style={{ objectFit: 'contain', height: '50px', width: 'auto' }} 
          priority
        />
      </div>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['About', 'Services', 'Podcast', 'Blog'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontWeight: 500,
              fontSize: '0.9rem',
              color: 'var(--color-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      <Button variant="accent">Get Started</Button>
    </motion.header>
  );
}
