'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import CoachingForm from '@/components/CoachingForm';
import { Testimonials } from '@/components/Testimonials';

const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };

export default function CoachingPage() {
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
                1:1 Coaching
              </motion.p>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
                style={{ fontSize: 'clamp(1.2rem, 2vw, 2.2rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.5rem' }}
              >
                Apply for <span style={{ color: '#f27552' }}>1:1 Coaching</span>
              </motion.h1>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ height: 2, width: 52, background: '#f27552', marginBottom: '2.5rem', transformOrigin: 'left', opacity: 0.7 }}
              />

              {/* Block 1: The problem */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <p style={{ fontSize: '1.12rem', fontWeight: 700, color: '#165b74', lineHeight: 1.5, marginBottom: '0.6rem' }}>
                  You're Not Stuck. You're Patterned.
                </p>
                <p style={{ fontSize: '1rem', color: '#165b74', lineHeight: 1.85, marginBottom: '1.75rem' }}>
                  Your life looks different on the outside. But internally, something feels off.
                </p>
              </motion.div>

              {/* Block 2: 4 bullet lines */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.38 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(242,117,82,0.3)' }}
              >
                {[
                  'In your personal life, you feel disconnected or restless',
                  'In relationships, you keep repeating the same conflicts',
                  'In your career or studies, you feel pressure, confusion, or a lack of direction',
                  "And in certain habits, you feel stuck in cycles you can't seem to break",
                ].map((text, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.44 + i * 0.07 }}
                    style={{ fontSize: '0.98rem', color: '#165b74', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              {/* Block 3: The cause */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.72 }}
                style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#165b74', lineHeight: 1.6, marginBottom: '0.4rem' }}>
                  You know what to do… but you don't do it.
                </p>
                <p style={{ fontSize: '0.98rem', color: '#165b74', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                  Not because you lack discipline.<br />
                  But because your mind is running patterns you don't yet see.
                </p>
              </motion.div>

              {/* Divider */}
             
              {/* Block 4: Mental fitness */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.84 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(22,91,116,0.18)' }}
              >
                {[
                  { text: 'Most people try to fix this by changing situations, people, or routines',                                                                                                       color: '#165b74', weight: 500 },
                  { text: 'Real change happens when you understand how your thoughts, emotions, and behaviors are wired',                                                                                    color: '#165b74', weight: 500 },
                  { text: "That's mental fitness",                                                                                                                                                           color: '#165b74', weight: 700, size: '1.08rem' },
                  { text: 'When you train your mind, you gain clarity, emotional control, stronger relationships, and the ability to move forward without being pulled back by old patterns',                 color: '#165b74', weight: 500 },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.07 }}
                    style={{ fontSize: line.size ?? '0.98rem', color: line.color, lineHeight: 1.75, margin: 0, fontWeight: line.weight }}>
                    {line.text}
                  </motion.p>
                ))}
              </motion.div>

              {/* Divider */}
        

              {/* Block 5: What this is */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.14 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(252,188,81,0.4)' }}
              >
                {[
                  { text: 'This is deep, structured 1:1 work focused on your personal growth, your relationships, your career direction, and breaking patterns that hold you back', color: '#165b74', weight: 500 },
                  { text: 'No generic advice. No surface-level fixes.',                                                                                                              color: '#165b74', weight: 700 },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 + i * 0.08 }}
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
              {/* Small heading above form */}
              {/* <p style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.25rem' }}>
                Apply Below
              </p>
              <p style={{ fontSize: '0.88rem', color: '#a67358', lineHeight: 1.7, marginBottom: '1.75rem', fontWeight: 500 }}>
                Only a select number of 1:1 spaces are available.
              </p> */}
              <CoachingForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}
