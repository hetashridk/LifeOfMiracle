'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import WorkshopForm from '@/components/WorkshopForm';
import { Testimonials } from '@/components/Testimonials';

const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };

const TOPICS = [
  'Managing stress, pressure, and overthinking',
  'Building emotional resilience and stability',
  'Improving focus, productivity, and decision-making',
  'Strengthening self-awareness and clarity',
  'Navigating relationships and communication',
  'Developing confidence and inner stability',
];


export default function WorkshopPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <main style={{ backgroundColor: 'transparent', minHeight: '100vh', color: '#1a1a1a', overflowX: 'hidden' }}>
      <Navigation />
      <div style={{ height: '80px' }} />

      {/* ════════ HERO — text left, form right ════════ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(0,0,0,0.09)' }}
      >
        <motion.div style={{ y: heroY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-8rem', right: '-6rem', width: 520, height: 520, borderRadius: '50%', background: 'rgba(0,0,0,0.05)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: 420, height: 420, borderRadius: '50%', background: 'rgba(244,186,89,0.06)', filter: 'blur(90px)' }} />
        </motion.div>

        <div style={{ ...W, position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '7rem' }} className="hero-section-inner">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'start' }}>

            {/* ── LEFT: all text ── */}
            <div>
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#ea7554', marginBottom: '1.75rem' }}
              >
                Workshops
              </motion.p>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
                style={{ fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', color: '#1a1a1a', marginBottom: '1.5rem' }}
              >
                Mental Fitness for <span style={{ color: '#ea7554' }}>Teams &amp; Students</span>
              </motion.h1>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ height: 2, width: 52, background: '#ea7554', marginBottom: '2.5rem', transformOrigin: 'left', opacity: 0.7 }}
              />

              {/* Block 1: About */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <p style={{ fontSize: '1rem', color: '#1a1a1a', lineHeight: 1.85, marginBottom: '1rem', fontWeight: 500 }}>
                  Karishma Khubchandani designs and delivers mental fitness workshops for organizations and educational institutions, focused on helping individuals navigate pressure, build clarity, and strengthen their inner foundation.
                </p>
                <p style={{ fontSize: '1rem', color: '#1a1a1a', lineHeight: 1.85, marginBottom: '1rem', fontWeight: 500 }}>
                  Her approach combines emotional awareness, practical mental frameworks, and real-life application, making each session relevant, relatable, and impactful.
                </p>
                <p style={{ fontSize: '1rem', color: '#1a1a1a', lineHeight: 1.85, marginBottom: '1.75rem', fontWeight: 500 }}>
                  She has conducted workshops with organizations such as Celebal Technologies, Ikover Coworking Space, and Workspace Co., as well as institutions including CK Pithawala College, Auro University Surat, and SCET College.
                </p>
              </motion.div>

              {/* Divider */}
        

              {/* Block 2: Topics */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.54 }}>
                <p style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.9rem' }}>
                  Workshops are designed around real challenges people face today, including:
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(234,117,84,0.3)' }}
              >
                {TOPICS.map((text, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.66 + i * 0.06 }}
                    style={{ fontSize: '0.98rem', color: '#1a1a1a', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              {/* Divider */}
        

              {/* Block 3: For teams & students */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.04 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(0,0,0,0.15)' }}
              >
                {[
                  { text: 'Each workshop is interactive, reflective, and focused on creating shifts that extend beyond the session', color: '#1a1a1a', weight: 500 },
                  { text: 'For teams, it supports performance, communication, and well-being',                                       color: '#1a1a1a', weight: 500 },
                  { text: 'For students, it builds clarity, confidence, and direction',                                              color: '#1a1a1a', weight: 700 },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + i * 0.07 }}
                    style={{ fontSize: '0.98rem', color: line.color, lineHeight: 1.75, margin: 0, fontWeight: line.weight }}>
                    {line.text}
                  </motion.p>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="form-sticky"
              style={{ position: 'sticky', top: '16rem' }}
            >
              <WorkshopForm />
            </motion.div>

          </div>
        </div>
      </section>


      <Testimonials />
      <Footer />
    </main>
  );
}
