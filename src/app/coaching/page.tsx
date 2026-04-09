'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import CoachingForm from '@/components/CoachingForm';

const W = { maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };

const Orbit = () => (
  <div style={{ position: 'relative', width: 400, height: 400, flexShrink: 0 }}>
    <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.12)', animation: 'spin 28s linear infinite' }}>
      <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#f27552', boxShadow: '0 4px 12px rgba(242,117,82,0.4)' }} />
      <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#fcbc51' }} />
    </div>
    <div style={{ position: 'absolute', inset: 40, borderRadius: '50%', border: '1px dashed rgba(22,91,116,0.1)', animation: 'spin 20s linear infinite reverse' }}>
      <div style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: '#ca71a6' }} />
    </div>
    <div style={{ position: 'absolute', inset: 80, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.08)', animation: 'spin 14s linear infinite' }}>
      <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, borderRadius: '50%', background: '#3b9b6d' }} />
    </div>
    <div style={{ position: 'absolute', inset: '28%', borderRadius: '50%', background: 'linear-gradient(135deg,rgba(22,91,116,0.08),rgba(242,117,82,0.07))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#165b74', lineHeight: 1 }}>1:1</div>
        <div style={{ fontSize: '0.5rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', color: '#f27552', marginTop: 4 }}>Coaching</div>
      </div>
    </div>
    {[
      { label: 'Patterns', color: '#f27552', pos: { top: '2%',    left: '-18%'  } },
      { label: 'Clarity',  color: '#3b9b6d', pos: { top: '10%',   right: '-14%' } },
      { label: 'Growth',   color: '#ca71a6', pos: { bottom: '16%',right: '-16%' } },
      { label: 'Purpose',  color: '#fcbc51', pos: { bottom: '2%', left: '-10%'  } },
    ].map((t, i) => (
      <motion.div
        key={t.label}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', ...t.pos, padding: '0.38rem 0.95rem', background: '#fff', boxShadow: '0 6px 20px rgba(22,91,116,0.1)', borderRadius: 9999, fontSize: '0.73rem', fontWeight: 800, color: '#165b74', whiteSpace: 'nowrap' }}
      >
        <span style={{ color: t.color, marginRight: 5 }}>●</span>{t.label}
      </motion.div>
    ))}
  </div>
);

export default function CoachingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <main style={{ backgroundColor: '#F9F6F2', minHeight: '100vh', color: '#165b74', overflowX: 'hidden' }}>
      <Navigation />
      <div style={{ height: '80px' }} />

      {/* ════════ HERO — all content stacked ════════ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(22,91,116,0.09)' }}
      >
        <motion.div style={{ y: heroY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-8rem', right: '-6rem', width: 520, height: 520, borderRadius: '50%', background: 'rgba(242,117,82,0.05)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: 420, height: 420, borderRadius: '50%', background: 'rgba(22,91,116,0.04)', filter: 'blur(90px)' }} />
        </motion.div>

        <div style={{ ...W, position: 'relative', zIndex: 1, paddingTop: '7rem', paddingBottom: '7rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* ── LEFT COLUMN ── */}
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
                style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.5rem' }}
              >
                Apply for<br />
                <span style={{ color: '#f27552' }}>1:1 Coaching</span>
              </motion.h1>

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ height: 2, width: 52, background: '#f27552', marginBottom: '2.5rem', transformOrigin: 'left', opacity: 0.7 }}
              />

              {/* Block 1: The problem */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#165b74', lineHeight: 1.5, marginBottom: '0.6rem' }}>
                  You're Not Stuck. You're Patterned.
                </p>
                <p style={{ fontSize: '1.02rem', color: '#a67358', lineHeight: 1.85, marginBottom: '1.75rem' }}>
                  Your life looks different on the outside. But internally, something feels off.
                </p>
              </motion.div>

              {/* Block 2: 4 bullet lines */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.38 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2.5rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(242,117,82,0.25)' }}
              >
                {[
                  { text: 'In your personal life, you feel disconnected or restless',                      color: '#a67358' },
                  { text: 'In relationships, you keep repeating the same conflicts',                        color: '#165b74' },
                  { text: 'In your career or studies, you feel pressure, confusion, or a lack of direction',color: '#a67358' },
                  { text: "And in certain habits, you feel stuck in cycles you can't seem to break",        color: '#165b74' },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.44 + i * 0.07 }}
                    style={{ fontSize: '1.02rem', color: line.color, lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                    {line.text}
                  </motion.p>
                ))}
              </motion.div>

              {/* Block 3: The cause */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.72 }} style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '1.08rem', fontWeight: 700, color: '#f27552', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                  You know what to do… but you don't do it.
                </p>
                <p style={{ fontSize: '1.02rem', color: '#165b74', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>
                  Not because you lack discipline.<br />
                  But because your mind is running patterns you don't yet see.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.85 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a href="#application" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.85rem 1.9rem', background: '#165b74', color: '#fff',
                  fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                  borderRadius: 4, textDecoration: 'none', boxShadow: '0 8px 24px rgba(22,91,116,0.2)',
                }}>
                  Apply Now →
                </a>
                <span style={{ fontSize: '0.78rem', color: '#b08870' }}>Limited spots open</span>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div style={{ paddingTop: '17rem' }}>

              {/* Block 4: Mental fitness */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(22,91,116,0.18)' }}
              >
                {[
                  { text: 'Most people try to fix this by changing situations, people, or routines',                                                                                                         color: '#a67358' },
                  { text: 'Real change happens when you understand how your thoughts, emotions, and behaviors are wired',                                                                                      color: '#165b74' },
                  { text: "That's mental fitness",                                                                                                                                                             color: '#f27552', weight: 700, size: '1.15rem' },
                  { text: 'When you train your mind, you gain clarity, emotional control, stronger relationships, and the ability to move forward without being pulled back by old patterns',                   color: '#165b74' },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.58 + i * 0.08 }}
                    style={{ fontSize: line.size ?? '1.02rem', color: line.color, lineHeight: 1.8, margin: 0, fontWeight: line.weight ?? 500 }}>
                    {line.text}
                  </motion.p>
                ))}
              </motion.div>

              {/* Thin rule */}
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.4 }}
                style={{ height: 1, background: 'rgba(22,91,116,0.1)', marginBottom: '2.5rem', transformOrigin: 'left' }} />

              {/* Block 5: What this is */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.94 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', borderLeft: '2px solid rgba(252,188,81,0.4)' }}
              >
                {[
                  { text: 'This is deep, structured 1:1 work focused on your personal growth, your relationships, your career direction, and breaking patterns that hold you back', color: '#a67358' },
                  { text: 'No generic advice. No surface-level fixes.',                                                                                                              color: '#165b74', weight: 700 },
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.08 }}
                    style={{ fontSize: '1.02rem', color: line.color, lineHeight: 1.8, margin: 0, fontWeight: line.weight ?? 500 }}>
                    {line.text}
                  </motion.p>
                ))}
              </motion.div>

            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,rgba(22,91,116,0.25),transparent)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(22,91,116,0.15)' }} />
        </motion.div>
      </section>

      {/* ════════ APPLICATION — form LEFT, orbit RIGHT ════════ */}
      <section id="application" style={{ padding: '8rem 0' }}>
        <div style={W}>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: '4rem', maxWidth: 560 }}
          >
            <p style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1rem' }}>
              Apply for 1:1 Coaching
            </p>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1rem' }}>
              Apply for 1:1<br />
              <span style={{ color: '#f27552' }}>Coaching Below.</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              style={{ height: 2, width: 52, background: '#f27552', marginBottom: '1.25rem', transformOrigin: 'left', opacity: 0.7 }}
            />
            <p style={{ fontSize: '1rem', color: '#a67358', lineHeight: 1.8, fontWeight: 500 }}>
              Only a select number of 1:1 spaces are available.
            </p>
          </motion.div>

          {/* Two-col: form + orbit */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '6rem', alignItems: 'center' }}>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <CoachingForm />
            </motion.div>

            {/* Orbit — right of form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="hide-mobile"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Orbit />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
