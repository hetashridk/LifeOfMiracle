"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section style={{
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 5% 0',
      backgroundColor: 'var(--color-bg)',
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '3rem',
      }}>

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ flex: 1 }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'var(--color-accent-mustard)',
            backgroundColor: 'var(--color-primary)',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-pill)',
            marginBottom: '2rem',
          }}>
            Mental Fitness Coach
          </span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontFamily: 'var(--font-karla)',
            fontWeight: 700,
            color: 'var(--color-primary)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Build A Mind That Works For You, Not Against You
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-primary)',
            opacity: 0.7,
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            maxWidth: '500px',
          }}>
            Mental Fitness Is The Skill No One Taught You, Until Now.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* <a href="#contact" style={{
              display: 'inline-block',
              padding: '1rem 2.25rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              Book A Discovery Call
            </a> */}
            <a href="#about" className="btn-outline" style={{
              display: 'inline-block',
              padding: '1rem 2.25rem',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--color-primary)',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hide-mobile"
          style={{ flex: '0 0 420px' }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '4 / 5',
            borderRadius: '220px 220px 220px 220px',
            overflow: 'hidden',
            backgroundColor: 'var(--color-primary)',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
