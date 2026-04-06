"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: '1:1 Coaching',
    subtitle: 'For individuals ready to do deep inner work.',
    desc: 'Build emotional clarity, break patterns, and develop a stronger relationship with your mind.',
    cta: 'Apply For Coaching',
    color: 'var(--color-primary)',
    icon: '△',
    href: '#contact'
  },
  {
    title: 'Keynote Speaking',
    subtitle: 'For organizations and events that want real conversations.',
    desc: 'Talks that go beyond inspiration and create actual mindset shifts in performance, leadership, and well-being.',
    cta: 'Book A Keynote',
    color: 'var(--color-accent-emerald)',
    icon: '◧',
    href: '#contact'
  },
  {
    title: 'Workshops',
    subtitle: 'Interactive experiences designed for teams and communities.',
    desc: 'Focused on stress, clarity, emotional resilience, and mental performance.',
    cta: 'Enquire About Workshops',
    color: 'var(--color-accent-mustard)',
    icon: '✧',
    href: '#contact'
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
          <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-heading)' }}>Work With Me</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
                gap: '1rem',
                border: '1px solid rgba(0,0,0,0.05)',
                borderTop: `6px solid ${svc.color}`
              }}
            >
              <div style={{ fontSize: '3rem', opacity: 0.8, fontWeight: 'lighter', color: svc.color }}>{svc.icon}</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', fontStyle: 'italic' }}>{svc.subtitle}</p>
              <p style={{ color: 'var(--color-text-primary)', flex: 1, opacity: 0.8, lineHeight: 1.6 }}>{svc.desc}</p>

              <a
                href={svc.href}
                style={{
                  marginTop: '1rem',
                  display: 'inline-block',
                  padding: '0.9rem 1.75rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: svc.color,
                  color: svc.color === 'var(--color-accent-mustard)' ? 'var(--color-primary)' : '#fff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  alignSelf: 'flex-start'
                }}
              >
                {svc.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
