"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="flex-responsive responsive-hero-container" style={{
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
        className="responsive-hero-height"
        style={{ flex: '1.2', position: 'relative', height: '80vh', minHeight: '600px', width: '100%' }}
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
        className="responsive-padding responsive-hero-height"
        style={{
          flex: '1', 
          backgroundColor: 'var(--color-primary)',
          borderRadius: 'var(--radius-lg)',
          padding: '5rem 4rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          height: '80vh',
          minHeight: '600px'
        }}
      >

        <span style={{ color: 'var(--color-accent-mustard)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
          Mental Fitness Is The Skill No One Taught You — Until Now
        </span>
        <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.1, marginBottom: '2rem' }}>
          Build A Mind That Works For You, Not Against You
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#fff', marginBottom: '3rem', opacity: 0.9 }}>
          I'm Karishma Khubchandani, Mental Fitness Coach and Founder of Life Of A Miracle. I help founders, creators, and individuals build emotional clarity, resilience, and inner strength so they can perform, lead, and live better.
        </p>

        {/* CTA Button */}
        <a href="#contact" style={{
          display: 'inline-block',
          padding: '1.2rem 2.5rem',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: 'var(--color-accent-mustard)',
          color: 'var(--color-primary)',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '0.5px',
          alignSelf: 'flex-start',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s ease'
        }}>
          Book A Discovery Call
        </a>
      </motion.div>
    </section>
  );
}
