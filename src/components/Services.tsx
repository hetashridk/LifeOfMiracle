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
    href: '/coaching'
  },
  {
    title: 'Keynote Speaking',
    subtitle: 'For organizations and events that want real conversations.',
    desc: 'Talks that go beyond inspiration and create actual mindset shifts in performance, leadership, and well-being.',
    cta: 'Book A Keynote',
    color: 'var(--color-accent-emerald)',
    icon: '◧',
    href: '/keynote'
  },
  {
    title: 'Workshops',
    subtitle: 'Interactive experiences designed for teams and communities.',
    desc: 'Focused on stress, clarity, emotional resilience, and mental performance.',
    cta: 'Enquire About Workshops',
    color: 'var(--color-accent-mustard)',
    icon: '✧',
    href: '/workshop'
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
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3.5rem', margin: '0 0 1rem 0', fontFamily: 'var(--font-karla)' }}>Services</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'stretch'
        }}>
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: '#f5f5f5',
              position: 'relative',
              minHeight: '300px',
            }}
          >
            <img
              src="/service.JPG"
              alt="Work With Me"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Right: 3 Service Cards - Stacked Vertically */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{
                  backgroundColor: `color-mix(in srgb, ${svc.color} 8%, transparent)`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  borderLeft: `4px solid ${svc.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                }}
              >
                {/* Title row: title left, button right */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  width: '100%',
                }}>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-karla)',
                  }}>
                    {svc.title}
                  </span>

                  <a
                    href={svc.href}
                    style={{
                      flexShrink: 0,
                      display: 'inline-block',
                      padding: '0.6rem 1.25rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: svc.color,
                      color: svc.color === 'var(--color-accent-mustard)' ? 'var(--color-primary)' : '#fff',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      letterSpacing: '0.3px',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.14)';
                      e.currentTarget.style.filter = 'brightness(0.92)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.filter = 'none';
                    }}
                  >
                    {svc.cta}
                  </a>
                </div>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--color-text-secondary)',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {svc.subtitle}
                </p>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text-primary)',
                  opacity: 0.78,
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          section#services {
            padding: var(--spacing-section) 3%;
          }
        }

        @media (max-width: 768px) {
          section#services h2 {
            font-size: 2.5rem !important;
          }

          section#services > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          section#services > div > div:first-child {
            min-height: 350px !important;
          }
        }

        a:hover {
          opacity: 0.95;
        }
      `}</style>
    </section>
  );
}
