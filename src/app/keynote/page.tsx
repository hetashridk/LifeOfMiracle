'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import KeynoteForm from '@/components/KeynoteForm';
import { Testimonials } from '@/components/Testimonials';

const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };

const TESTIMONIALS = [
  {
    quote: "Karishma has a rare ability to make a room feel deeply understood. Her keynote didn't just motivate — it shifted something in how we think. Our team left with clarity they didn't expect.",
    name: 'Rohan Mehta',
    title: 'Head of People, Celebal Technologies',
    color: '#f27552',
  },
  {
    quote: "She speaks in a way that stays with you. It wasn't a generic motivational talk — it was honest, grounded, and genuinely useful. Exactly what our students needed to hear.",
    name: 'Dr. Priya Shah',
    title: 'Dean of Students, Auro University Surat',
    color: '#165b74',
  },
  {
    quote: "One of the best sessions we've hosted. Karishma's presence commanded attention and her content created real reflection. We've had requests to bring her back already.",
    name: 'Ankit Verma',
    title: 'Founder, Ikover Coworking Space',
    color: '#3b9b6d',
  },
];

export default function KeynotePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <main style={{ backgroundColor: '#F9F6F2', minHeight: '100vh', color: '#165b74', overflowX: 'hidden' }}>
      <Navigation />
      <div style={{ height: '80px' }} />

      {/* ════════ HERO — text left, form right ════════ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(22,91,116,0.09)' }}
      >
        <motion.div style={{ y: heroY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-8rem', right: '-6rem', width: 520, height: 520, borderRadius: '50%', background: 'rgba(242,117,82,0.05)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: 420, height: 420, borderRadius: '50%', background: 'rgba(22,91,116,0.04)', filter: 'blur(90px)' }} />
        </motion.div>

        <div style={{ ...W, position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '7rem' }} className="hero-section-inner">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'start' }}>

            {/* ── LEFT: all text ── */}
            <div>
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
              >
                Keynote &amp; Guest Speaking
              </motion.p>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
                style={{ fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.5rem' }}
              >
                Words That <span style={{ color: '#f27552' }}>Stay With People</span>
              </motion.h1>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ height: 2, width: 52, background: '#f27552', marginBottom: '2.5rem', transformOrigin: 'left', opacity: 0.7 }}
              />

              {/* Block 1: About the speaker */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#165b74', lineHeight: 1.5, marginBottom: '0.6rem' }}>
                  Karishma Khubchandani
                </p>
                <p style={{ fontSize: '1rem', color: '#165b74', lineHeight: 1.85, marginBottom: '1rem', fontWeight: 500 }}>
                  Karishma Khubchandani is a Mental Fitness Coach and speaker focused on helping individuals understand how their mind works under pressure, uncertainty, and growth.
                </p>
                <p style={{ fontSize: '1rem', color: '#165b74', lineHeight: 1.85, marginBottom: '1rem', fontWeight: 500 }}>
                  Her work brings together emotional clarity, self-awareness, and practical mental frameworks that people can apply in their everyday lives.
                </p>
                <p style={{ fontSize: '1rem', color: '#165b74', lineHeight: 1.85, marginBottom: '1.75rem', fontWeight: 500 }}>
                  Through her sessions, she creates space for honest reflection, deeper understanding, and meaningful shifts in how people think, feel, and respond.
                </p>
              </motion.div>

              {/* Divider */}
            

              {/* Block 2: What makes her different */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.76 }}
                style={{ marginBottom: '2rem' }}
              >
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#165b74', lineHeight: 1.6, marginBottom: '0.4rem' }}>
                  Beyond motivation — real conversations.
                </p>
                <p style={{ fontSize: '0.98rem', color: '#165b74', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                  Known for her grounded presence, she speaks in a way that goes beyond inspiration — offering insights that stay with people long after the session ends.
                </p>
              </motion.div>

              {/* Divider */}
        

              {/* Block 3: For events */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.94 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(252,188,81,0.4)' }}
              >
                {[
                  { text: 'Available for corporate events, university convocations, panel discussions, and institutional talks',  color: '#165b74', weight: 500 },
                  { text: 'Each session is tailored to your audience and theme',                                                   color: '#165b74', weight: 500 },
                  { text: 'No generic motivational talk. No surface-level inspiration.',                                           color: '#165b74', weight: 700 },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.08 }}
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
              style={{ position: 'sticky', top: '22rem', marginTop: '8rem' }}
            >
              <KeynoteForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}
