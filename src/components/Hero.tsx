"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 5% 60px',
      maxWidth: '1400px',
      margin: '0 auto',
      gap: '2rem'
    }}>
      {/* Left side: Large vertical image with overlapping circles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ flex: '1.2', position: 'relative', height: '80vh', minHeight: '600px' }}
      >
        {/* Decorative circle 1 */}
        <div style={{
          position: 'absolute',
          top: '-5%',
          left: '-5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent-mustard)',
          zIndex: 0
        }} />

        {/* Decorative circle 2 */}
        <div style={{
          position: 'absolute',
          bottom: '-5%',
          right: '-5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent-emerald)',
          zIndex: 0
        }} />

        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          zIndex: 1,
          backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </motion.div>

      {/* Right side: Colored box containing text and CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          flex: '1',
          backgroundColor: 'var(--color-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '5rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          height: '80vh',
          minHeight: '600px'
        }}
      >

        {/* color: 'var(--color-accent-mustard)' */}
        <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
          Life & Leadership Coaching
        </span>
        <h1 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)', color: '#fcbc51', lineHeight: 1.1, marginBottom: '2rem' }}>
          I help Leaders with Profound Professional & Spiritual Growth.
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#fff', marginBottom: '4rem', opacity: 0.9 }}>
          I facilitate them to grow profoundly in business & personal life with a shift at the core of their being.
        </p>

        {/* Large circular CTA button */}
        <a href="#services" style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent-mustard)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-start',
          textDecoration: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ fontSize: '2rem' }}
          >
            ↓
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
