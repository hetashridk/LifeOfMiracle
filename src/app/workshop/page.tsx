'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import WorkshopForm from '@/components/WorkshopForm';

const W = { maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };
const CW = { maxWidth: '680px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' as const };

const TOPICS = [
  'Managing stress, pressure, and overthinking',
  'Building emotional resilience and stability',
  'Improving focus, productivity, and decision-making',
  'Strengthening self-awareness and clarity',
  'Navigating relationships and communication',
  'Developing confidence and inner stability',
];

const ORGS = [
  { name: 'Celebal Technologies',     type: 'Organisation' },
  { name: 'Ikover Coworking Space',   type: 'Organisation' },
  { name: 'Workspace Co.',            type: 'Organisation' },
  { name: 'CK Pithawala College',     type: 'Institution'  },
  { name: 'Auro University Surat',    type: 'Institution'  },
  { name: 'SCET College',             type: 'Institution'  },
];

export default function WorkshopPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);

  return (
    <main style={{ backgroundColor: '#F9F6F2', minHeight: '100vh', color: '#165b74', overflowX: 'hidden' }}>
      <Navigation />
      <div style={{ height: '80px' }} />

      {/* ════════ HERO ════════ */}
      <section
        ref={heroRef}
        style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(22,91,116,0.09)' }}
      >
        <motion.div style={{ y: heroY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '-8rem', right: '-6rem', width: 520, height: 520, borderRadius: '50%', background: 'rgba(22,91,116,0.05)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: 440, height: 440, borderRadius: '50%', background: 'rgba(252,188,81,0.06)', filter: 'blur(90px)' }} />
        </motion.div>

        <div style={{ ...W, position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '5rem', alignItems: 'center' }}>

            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
              >
                Workshops
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.5rem' }}
              >
                Mental Fitness<br />
                <span style={{ color: '#f27552' }}>for Teams &<br />Students.</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ height: 2, width: 52, background: '#f27552', marginBottom: '1.6rem', transformOrigin: 'left', opacity: 0.7 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontSize: '1.1rem', color: '#a67358', lineHeight: 1.85, maxWidth: 440, marginBottom: '2.25rem', fontWeight: 500 }}
              >
                Workshops designed to help individuals navigate pressure, build clarity, and strengthen their inner foundation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.32 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
              >
                <a
                  href="#enquire"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.85rem 1.9rem', background: '#165b74', color: '#fff',
                    fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                    borderRadius: 4, textDecoration: 'none', boxShadow: '0 8px 24px rgba(22,91,116,0.2)',
                  }}
                >
                  Enquire Now →
                </a>
                <span style={{ fontSize: '0.78rem', color: '#b08870' }}>For organisations &amp; institutions</span>
              </motion.div>
            </div>

            {/* Animated grid visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
              className="hide-mobile"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: 360, height: 360 }}>
                {/* Outer pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.07, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', inset: -24, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.2)' }}
                />
                {/* Spinning outer ring */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.12)', animation: 'spin 32s linear infinite' }}>
                  <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#165b74', boxShadow: '0 4px 12px rgba(22,91,116,0.35)' }} />
                  <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#fcbc51' }} />
                </div>
                {/* Mid ring */}
                <div style={{ position: 'absolute', inset: 40, borderRadius: '50%', border: '1px dashed rgba(242,117,82,0.2)', animation: 'spin 22s linear infinite reverse' }}>
                  <div style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: '#f27552' }} />
                </div>
                {/* Inner ring */}
                <div style={{ position: 'absolute', inset: 80, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.08)', animation: 'spin 15s linear infinite' }}>
                  <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, borderRadius: '50%', background: '#3b9b6d' }} />
                </div>
                {/* Center */}
                <div style={{ position: 'absolute', inset: '28%', borderRadius: '50%', background: 'linear-gradient(135deg,rgba(22,91,116,0.08),rgba(252,188,81,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.6rem', lineHeight: 1 }}>🧠</div>
                    <div style={{ fontSize: '0.5rem', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', color: '#165b74', marginTop: 6 }}>Workshops</div>
                  </div>
                </div>
                {/* Floating tags */}
                {[
                  { label: 'Teams',      color: '#165b74', pos: { top: '2%',    left: '-22%'  } },
                  { label: 'Clarity',    color: '#f27552', pos: { top: '8%',    right: '-16%' } },
                  { label: 'Students',   color: '#3b9b6d', pos: { bottom: '14%',right: '-18%' } },
                  { label: 'Resilience', color: '#fcbc51', pos: { bottom: '2%', left: '-12%'  } },
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
            </motion.div>

          </div>
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,rgba(22,91,116,0.25),transparent)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(22,91,116,0.15)' }} />
        </motion.div>
      </section>

      {/* ════════ ABOUT ════════ */}
      <section style={{ padding: '8rem 0', borderBottom: '1px solid rgba(22,91,116,0.09)' }}>
        <div style={CW}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
          >
            About the Workshops
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.75rem' }}
          >
            Karishma Khubchandani
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ height: 2, width: 52, background: '#f27552', margin: '0 auto 2.25rem', opacity: 0.7 }}
          />

          {[
            { text: 'Karishma designs and delivers mental fitness workshops for organizations and educational institutions, focused on helping individuals navigate pressure, build clarity, and strengthen their inner foundation.', color: '#165b74', weight: 500 },
            { text: 'Her approach combines emotional awareness, practical mental frameworks, and real-life application — making each session relevant, relatable, and impactful.', color: '#a67358', weight: 500 },
            { text: 'Each workshop is interactive, reflective, and focused on creating shifts that extend beyond the session.', color: '#165b74', weight: 600 },
          ].map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ fontSize: '1.12rem', color: item.color, lineHeight: 1.9, marginBottom: '1.5rem', fontWeight: item.weight }}
            >
              {item.text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ════════ FOR TEAMS & STUDENTS ════════ */}
      <section style={{ padding: '8rem 0', background: '#165b74', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', userSelect: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <span style={{ fontSize: 'clamp(7rem, 18vw, 16rem)', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1, paddingRight: '2rem', whiteSpace: 'nowrap', letterSpacing: '-0.04em' }}>GROW</span>
        </div>

        <div style={{ ...W, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem' }}>

            {[
              {
                label: 'For Teams',
                heading: 'Performance.\nCommunication.\nWell-being.',
                body: 'For organisations, the workshop supports team performance, strengthens communication, and builds collective well-being — so your people show up with clarity, not just compliance.',
                accent: '#fcbc51',
              },
              {
                label: 'For Students',
                heading: 'Clarity.\nConfidence.\nDirection.',
                body: 'For educational institutions, the workshop helps students build the mental foundation they need — to navigate pressure, find their direction, and step forward with confidence.',
                accent: '#f27552',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              >
                <p style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: card.accent, marginBottom: '1.5rem' }}>
                  {card.label}
                </p>
                <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
                  {card.heading}
                </h3>
                <div style={{ width: 40, height: 2, background: card.accent, marginBottom: '1.5rem', opacity: 0.7 }} />
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>{card.body}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ════════ TOPICS ════════ */}
      <section style={{ padding: '8rem 0', borderBottom: '1px solid rgba(22,91,116,0.09)' }}>
        <div style={{ ...W }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px,280px) 1fr', gap: '5rem', alignItems: 'start' }}>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1rem' }}>What We Cover</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#165b74' }}>
                Designed around real challenges people face today.
              </h2>
            </motion.div>

            <div>
              {TOPICS.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.4rem 0', borderBottom: i < TOPICS.length - 1 ? '1px solid rgba(22,91,116,0.08)' : 'none' }}
                >
                  <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#f27552', minWidth: 22, paddingTop: '0.25rem', letterSpacing: '1px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '1.05rem', color: '#165b74', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>{topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PAST WORK ════════ */}
      <section style={{ padding: '8rem 0', borderBottom: '1px solid rgba(22,91,116,0.09)' }}>
        <div style={CW}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
          >
            Past Workshops
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#165b74', marginBottom: '1rem' }}
          >
            She has conducted workshops with organisations and institutions including —
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ height: 2, width: 52, background: '#f27552', margin: '0 auto 3rem', opacity: 0.7 }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem', textAlign: 'left' }}>
            {ORGS.map((org, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ padding: '1.4rem 1.6rem', background: '#fff', borderRadius: 12, border: '1px solid rgba(22,91,116,0.08)', boxShadow: '0 2px 10px rgba(22,91,116,0.04)' }}
              >
                <p style={{ fontSize: '0.55rem', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', color: org.type === 'Organisation' ? '#f27552' : '#3b9b6d', marginBottom: '0.5rem' }}>{org.type}</p>
                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#165b74', lineHeight: 1.4, margin: 0 }}>{org.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ENQUIRE FORM ════════ */}
      <section id="enquire" style={{ padding: '8rem 0' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
          >
            Get in Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1rem' }}
          >
            Enquire about<br />
            <span style={{ color: '#f27552' }}>Workshops.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ height: 2, width: 52, background: '#f27552', margin: '0 auto 1.5rem', opacity: 0.7 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
            style={{ fontSize: '1.1rem', color: '#a67358', lineHeight: 1.85, marginBottom: '3.5rem', fontWeight: 500 }}
          >
            Whether you're a company, school, or university — fill in the form below and we'll get back to you with everything you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'left' }}
          >
            <WorkshopForm />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
