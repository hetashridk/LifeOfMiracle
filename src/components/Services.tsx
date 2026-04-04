"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Corporate Professionals',
    desc: 'Navigate burnout, decision fatigue, and find clarity and direction in high-stress environments.',
    color: 'var(--color-primary)',
    icon: '△'
  },
  {
    title: 'Student Mental Fitness',
    desc: 'Overcome anxiety, constant comparison, and emotional turbulence to stay focused and resilient.',
    color: 'var(--color-accent-emerald)',
    icon: '◧'
  },
  {
    title: 'Personal Chaos',
    desc: 'Build the ability to stay calm, focused, emotionally balanced, and self-led in the middle of it all.',
    color: 'var(--color-accent-mustard)',
    icon: '〰'
  },
  {
    title: 'Speaking & Workshops',
    desc: 'Inspiring keynotes and interactive sessions on mental fitness and growth.',
    color: 'var(--color-accent-coral)',
    icon: '✧'
  }
];

export function Services() {
  return (
    <section id="services" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-primary)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-heading)' }}>Life Coaching Services</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="responsive-padding"
              style={{
                backgroundColor: '#fff',
                color: 'var(--color-primary)',
                padding: '3rem 2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(0,0,0,0.05)',
                borderTop: `6px solid ${svc.color}`
              }}
            >
              <div style={{ fontSize: '3rem', opacity: 0.8, fontWeight: 'lighter', color: svc.color }}>{svc.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--color-text-primary)', flex: 1, opacity: 0.8 }}>{svc.desc}</p>
              
              <div style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '1px', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
