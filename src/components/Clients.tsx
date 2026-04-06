"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function Clients() {
  return (
    <section id="clients" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: '#fff'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ color: 'var(--color-text-secondary)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '2rem', fontSize: '0.875rem' }}>
            Trusted By
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
            opacity: 0.4
          }}>
            {['Founders', 'Creators', 'Leaders', 'Organizations', 'Individuals'].map((label) => (
              <div key={label} style={{
                fontSize: '1.25rem',
                fontFamily: 'var(--font-karla)',
                color: 'var(--color-primary)',
                fontWeight: 700,
                letterSpacing: '1px'
              }}>
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
