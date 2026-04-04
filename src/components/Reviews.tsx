"use client";

import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Sarah J.',
    title: 'Startup Founder',
    text: 'Working with her was a complete game-changer! She creates a supportive, judgment-free space for open and honest conversations.',
    color: 'var(--color-primary)',
  },
  {
    name: 'Michael T.',
    title: 'CEO',
    text: 'A phenomenal coach who takes you deep into the problem... I have gone through tremendous professional and spiritual growth.',
    color: 'var(--color-accent-magenta)',
  },
  {
    name: 'Priya R.',
    title: 'Executive',
    text: 'Her sessions added immense value to my life. I feel a sense of deep calmness and peace like never before.',
    color: 'var(--color-accent-emerald)',
  }
];

export function Reviews() {
  return (
    <section id="reviews" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: 'var(--color-bg)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Client Stories</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="responsive-padding"
              style={{
                backgroundColor: '#fff',
                color: 'var(--color-primary)',
                padding: '4rem 3rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ fontSize: '3rem', color: rev.color, lineHeight: 0.5, marginTop: '1rem' }}>"</div>
              <p style={{ fontStyle: 'italic', fontSize: '1.25rem', flex: 1, lineHeight: 1.6 }}>
                {rev.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%', backgroundColor: rev.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem'
                }}>
                  {rev.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>{rev.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
