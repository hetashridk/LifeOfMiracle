"use client";

import React from 'react';
import { motion } from 'framer-motion';

const contrasts = [
  { from: 'Reacting', to: 'Responding' },
  { from: 'Overthinking', to: 'Clarity' },
  { from: 'Pressure', to: 'Presence' },
];

const notThis = ['Not therapy.', 'Not motivation.'];

export function MentalFitness() {
  return (
    <section id="mental-fitness" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: '#fff',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Top two-column layout */}
        <div className="flex-responsive" style={{ display: 'flex', gap: '5rem', alignItems: 'flex-start', marginBottom: '5rem' }}>

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ flex: 1 }}
          >
            <span style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '1.5rem'
            }}>
              Mental Fitness
            </span>
            <h2 style={{
              fontSize: '3.5rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)',
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}>
              What Is Mental Fitness?
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', opacity: 0.85, lineHeight: 1.7, marginBottom: '2rem' }}>
              Mental fitness is your ability to regulate your thoughts, emotions, and reactions in real time.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Most people try to fix their life from the outside. But everything changes when you train the mind that experiences it.
            </p>

            {/* "Not this" tags */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {notThis.map((label) => (
                <span key={label} style={{
                  padding: '0.5rem 1.25rem',
                  border: '1.5px solid rgba(0,0,0,0.15)',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'line-through',
                  textDecorationColor: 'var(--color-accent-coral)'
                }}>
                  {label}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
              This is training your mind to work for you.
            </p>
          </motion.div>

          {/* Right column: contrast cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.5rem'
            }}>
              It's the difference between
            </p>
            {contrasts.map(({ from, to }, i) => (
              <motion.div
                key={from}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 2rem',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <div>
                  <span style={{
                    fontSize: '1.35rem',
                    color: 'var(--color-text-secondary)',
                    opacity: 0.5,
                    textDecoration: 'line-through',
                    textDecorationColor: 'var(--color-accent-coral)',
                    textDecorationThickness: '2px'
                  }}>
                    {from}
                  </span>
                </div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1rem',
                  flexShrink: 0
                }}>
                  →
                </div>
                <div>
                  <span style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {to}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
