"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" style={{
      padding: 'var(--spacing-section) 5%',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="flex-responsive responsive-padding"
        style={{
          display: 'flex',
          gap: '4rem',
          backgroundColor: 'var(--color-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: '6rem 4rem',
          alignItems: 'center'
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem', color: 'var(--color-accent-magenta)' }}>❈</span>
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', lineHeight: 1.1 }}>
              Why Mental Fitness
            </h2>
          </div>
          <p style={{ color: 'var(--color-text-primary)', fontSize: '1.125rem', marginBottom: '1.5rem', opacity: 0.9 }}>
            The world is louder and more overwhelming than ever. Students, professionals, and leaders all face stress, overstimulation, and constant comparison. Mental Fitness is the missing layer, the ability to stay calm, focused, and emotionally balanced in the middle of it all.
          </p>
          <p style={{ color: 'var(--color-text-primary)', fontSize: '1.125rem', opacity: 0.9 }}>
            I'm Karishma Khubchandani, Founder of "Life of a Miracle" and "What It Really Takes" Podcast. With 10+ years of experience in the tech industry (Ex-Microsoft), I help you ensure that when your mind is strong, everything else becomes possible.
          </p>
        </div>

        <div style={{ flex: 1, position: 'relative', height: '500px' }}>
          {/* Overlapping Image 1 */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '70%',
            height: '80%',
            borderRadius: 'var(--radius-lg)',
            backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }} />

          {/* Overlapping Image 2 */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60%',
            height: '70%',
            borderRadius: 'var(--radius-lg)',
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 2,
            border: '10px solid var(--color-bg)'
          }} />
        </div>
      </motion.div>
    </section>
  );
}
