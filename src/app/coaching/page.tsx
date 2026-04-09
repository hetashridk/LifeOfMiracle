'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import CoachingForm from '@/components/CoachingForm';

const MARQUEE_ITEMS = [
  'Awareness', 'Clarity', 'Growth', 'Rewiring', 'Presence',
  'Purpose', 'Patterns', 'Transformation', 'Mental Fitness', 'Deep Work',
];

const container = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  width: '100%',
};

export default function CoachingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);

  return (
    <main style={{ backgroundColor: '#F9F6F2', minHeight: '100vh', color: '#165b74', overflowX: 'hidden' }}>
      <Navigation />
      <div style={{ height: '80px' }} />

      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
      >
        {/* Ambient orbs */}
        <motion.div
          style={{ y: heroY, position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: 600, height: 600, borderRadius: '50%', background: 'rgba(242,117,82,0.06)', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: '-5rem', width: 480, height: 480, borderRadius: '50%', background: 'rgba(252,188,81,0.08)', filter: 'blur(80px)' }} />
          <div style={{ position: 'absolute', top: '40%', left: '40%', width: 360, height: 360, borderRadius: '50%', background: 'rgba(202,113,166,0.05)', filter: 'blur(80px)' }} />
        </motion.div>

        {/* Watermark */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden', pointerEvents: 'none', userSelect: 'none' }}>
          <span style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', fontWeight: 900, color: 'rgba(22,91,116,0.025)', lineHeight: 1, letterSpacing: '-0.04em', paddingRight: '2rem', whiteSpace: 'nowrap' }}>
            AWAKEN
          </span>
        </div>

        <div style={{ ...container, position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.5rem 1.25rem', marginBottom: '2.5rem',
                  fontSize: '0.65rem', fontWeight: 800, letterSpacing: '5px', textTransform: 'uppercase',
                  color: '#f27552', border: '1.5px solid rgba(242,117,82,0.25)',
                  borderRadius: 9999, background: 'rgba(242,117,82,0.06)',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f27552', animation: 'pulse 2s infinite' }} />
                  Apply for 1:1 Coaching
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.035em', marginBottom: '2rem' }}
              >
                You're Not<br />Stuck. You're<br />
                <span style={{ color: '#f27552', position: 'relative', display: 'inline-block' }}>
                  Patterned.
                  <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', overflow: 'visible' }} height="10" viewBox="0 0 300 10" fill="none">
                    <path d="M0 7 Q75 1 150 7 Q225 13 300 7" stroke="#f27552" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{ fontSize: '1.15rem', color: '#a67358', lineHeight: 1.8, maxWidth: 440, marginBottom: '2.5rem', fontWeight: 500 }}
              >
                Your life looks different on the outside. But internally, something feels off.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
              >
                <a
                  href="#application"
                  className="btn-dark"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                    padding: '1rem 2rem', background: '#165b74', color: '#fff',
                    fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px',
                    borderRadius: 9999, textDecoration: 'none',
                    boxShadow: '0 20px 40px rgba(22,91,116,0.25)',
                  }}
                >
                  Apply Now
                  <span style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex' }}>
                    {['#f27552', '#3b9b6d', '#ca71a6', '#fcbc51'].map((c, i) => (
                      <div key={i} style={{ width: 34, height: 34, borderRadius: '50%', background: c, border: '2.5px solid #F9F6F2', marginLeft: i === 0 ? 0 : -10 }} />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#a67358' }}>Limited spots open</span>
                </div>
              </motion.div>
            </div>

            {/* Right — Orbital visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hide-mobile"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: 400, height: 400 }}>
                {/* Outer ring */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.12)', animation: 'spin 28s linear infinite' }}>
                  <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#f27552', boxShadow: '0 4px 12px rgba(242,117,82,0.4)' }} />
                  <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 10, height: 10, borderRadius: '50%', background: '#fcbc51' }} />
                </div>
                {/* Mid ring */}
                <div style={{ position: 'absolute', inset: 40, borderRadius: '50%', border: '1px dashed rgba(22,91,116,0.1)', animation: 'spin 20s linear infinite reverse' }}>
                  <div style={{ position: 'absolute', right: -7, top: '50%', transform: 'translateY(-50%)', width: 14, height: 14, borderRadius: '50%', background: '#ca71a6' }} />
                </div>
                {/* Inner ring */}
                <div style={{ position: 'absolute', inset: 80, borderRadius: '50%', border: '1px solid rgba(22,91,116,0.08)', animation: 'spin 14s linear infinite' }}>
                  <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%)', width: 12, height: 12, borderRadius: '50%', background: '#3b9b6d' }} />
                </div>
                {/* Center */}
                <div style={{ position: 'absolute', inset: '28%', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(22,91,116,0.1), rgba(242,117,82,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#165b74', lineHeight: 1 }}>1:1</div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', color: '#f27552', marginTop: 4 }}>Coaching</div>
                  </div>
                </div>
                {/* Tags */}
                {[
                  { label: 'Personal', color: '#f27552', style: { top: '2%', left: '-16%' } },
                  { label: 'Clarity', color: '#3b9b6d', style: { top: '12%', right: '-10%' } },
                  { label: 'Patterns', color: '#ca71a6', style: { bottom: '18%', right: '-12%' } },
                  { label: 'Purpose', color: '#fcbc51', style: { bottom: '2%', left: '-8%' } },
                ].map((tag, i) => (
                  <motion.div
                    key={tag.label}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute', ...tag.style,
                      padding: '0.4rem 1rem', background: '#fff',
                      boxShadow: '0 8px 24px rgba(22,91,116,0.1)',
                      borderRadius: 9999, fontSize: '0.75rem', fontWeight: 800, color: '#165b74',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ color: tag.color, marginRight: 6 }}>●</span>{tag.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
        >
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(22,91,116,0.3), transparent)' }} />
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(22,91,116,0.2)' }} />
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div style={{ background: '#165b74', padding: '1.1rem 0', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '3rem', width: 'max-content', whiteSpace: 'nowrap' }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '3rem' }}>
              {item}
              <span style={{ color: '#f27552', fontSize: '1rem' }}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── RECOGNITION ─── */}
      <section style={{ padding: '7rem 0', position: 'relative' }}>
        <div style={container}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552' }}>The Mirror</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 0.95, maxWidth: 520 }}>
              Does any of this feel <span style={{ color: '#f27552' }}>familiar?</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🔄', title: 'Repeating Conflicts', body: 'In relationships, you keep repeating the same conflicts. Different person, same pattern.', color: '#f27552' },
              { icon: '🌫️', title: 'Disconnected & Restless', body: 'In your personal life, you feel disconnected or restless — even when things look fine from the outside.', color: '#ca71a6' },
              { icon: '🗺️', title: 'Pressure & No Direction', body: 'In your career or studies, you feel pressure, confusion, or a lack of direction you can\'t shake.', color: '#165b74' },
              { icon: '🔒', title: 'Stuck in Cycles', body: 'In certain habits, you feel stuck in cycles you can\'t seem to break — no matter what you try.', color: '#fcbc51' },
              { icon: '🛑', title: 'You Know But Don\'t Do', body: 'You know what to do… but you don\'t do it. Not because you lack discipline.', color: '#3b9b6d' },
              { icon: '⚡', title: 'Running Patterns', body: 'Your mind is running patterns you don\'t yet see — and that\'s what\'s keeping you stuck.', color: '#f27552' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                style={{ padding: '2rem', background: '#fff', borderRadius: 28, boxShadow: '0 2px 12px rgba(22,91,116,0.06)', border: '1px solid rgba(22,91,116,0.08)', cursor: 'default', transition: 'box-shadow 0.2s' }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '0.6rem', color: card.color }}>{card.title}</h3>
                <p style={{ color: '#a67358', lineHeight: 1.7, fontSize: '0.92rem' }}>{card.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginTop: '2.5rem', padding: '2rem', background: 'rgba(22,91,116,0.04)', borderRadius: 24, border: '1px solid rgba(22,91,116,0.08)' }}
          >
            <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#165b74', textAlign: 'center' }}>
              If you nodded at even one of these — you're in the right place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUTH ─── */}
      <section style={{ padding: '7rem 0', background: '#165b74', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 600, height: 600, borderRadius: '50%', background: 'rgba(242,117,82,0.08)', filter: 'blur(80px)', transform: 'translate(30%, -40%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 500, height: 500, borderRadius: '50%', background: 'rgba(202,113,166,0.08)', filter: 'blur(80px)', transform: 'translate(-30%, 40%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none' }}>
            <span style={{ fontSize: 'clamp(6rem, 18vw, 16rem)', fontWeight: 900, color: 'rgba(255,255,255,0.025)', lineHeight: 1, whiteSpace: 'nowrap' }}>PATTERNS</span>
          </div>
        </div>

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(242,117,82,0.8)' }}>The Real Fix</span>
              <h2 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', marginTop: '1.5rem', marginBottom: '2rem' }}>
                That's<br />
                <span style={{ color: '#fcbc51' }}>mental fitness.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '4rem', maxWidth: 600, margin: '0 auto 4rem' }}>
                When you train your mind, you gain clarity, emotional control, stronger relationships, and the ability to move forward without being pulled back by old patterns.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
              {[
                { num: '01', label: 'Most people try to fix this', desc: 'By changing situations, people, or routines. It never works because the pattern is inside, not outside.' },
                { num: '02', label: 'Real change happens differently', desc: 'When you understand how your thoughts, emotions, and behaviors are wired — that\'s where it shifts.' },
                { num: '03', label: 'That\'s mental fitness', desc: 'Structured work that trains your mind to run new patterns — intentionally, not by accident.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.14 }}
                  style={{ padding: '2rem', borderRadius: 28, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.06)', textAlign: 'left' }}
                >
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(242,117,82,0.5)', lineHeight: 1, marginBottom: '1.25rem' }}>{step.num}</div>
                  <h4 style={{ fontWeight: 900, color: '#fff', marginBottom: '0.75rem', fontSize: '1.05rem' }}>{step.label}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3 PHASES ─── */}
      <section style={{ padding: '7rem 0' }}>
        <div style={container}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552' }}>The Work</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '1rem' }}>
              What this coaching <em style={{ color: '#f27552', fontStyle: 'italic' }}>actually</em> focuses on
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {[
              { phase: 'Focus 01', title: 'Personal', subtitle: 'Growth', desc: 'Deep work on your personal growth — understanding and rewiring the beliefs, emotional patterns, and mental models running your inner world.', accent: '#f27552' },
              { phase: 'Focus 02', title: 'Relationships', subtitle: 'Connection', desc: 'Breaking the repeating conflicts and disconnection cycles that show up in every relationship. So you stop reacting and start responding.', accent: '#165b74' },
              { phase: 'Focus 03', title: 'Direction', subtitle: 'Career & Purpose', desc: 'Cutting through the pressure, confusion, and lack of direction in your career or studies — so you move forward with clarity, not just effort.', accent: '#3b9b6d' },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14 }}
                whileHover={{ y: -6 }}
                style={{ position: 'relative', borderRadius: 36, padding: '2.5rem', background: `${phase.accent}0d`, overflow: 'hidden', transition: 'transform 0.25s' }}
              >
                <div style={{ position: 'absolute', top: -40, right: -40, width: 140, height: 140, borderRadius: '50%', background: phase.accent, opacity: 0.12 }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '4px', textTransform: 'uppercase', color: phase.accent, opacity: 0.7 }}>{phase.phase}</span>
                  <h3 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#165b74', lineHeight: 1, marginTop: '0.75rem', marginBottom: '0.25rem' }}>{phase.title}</h3>
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', color: phase.accent, marginBottom: '1.5rem' }}>{phase.subtitle}</div>
                  <p style={{ color: '#a67358', lineHeight: 1.7, fontSize: '0.95rem' }}>{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE STRIP ─── */}
      <section style={{ padding: '6rem 0', background: '#f27552', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', userSelect: 'none' }}>
          <span style={{ fontSize: 'clamp(8rem, 18vw, 16rem)', fontWeight: 900, color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}>"</span>
        </div>
        <div style={{ ...container, position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, maxWidth: 900, margin: '0 auto' }}
          >
            "No generic advice. No surface-level fixes."
          </motion.blockquote>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ height: 2, background: 'rgba(255,255,255,0.3)', maxWidth: 200, margin: '2.5rem auto 0', transformOrigin: 'left' }}
          />
        </div>
      </section>

      {/* ─── APPLICATION ─── */}
      <section id="application" style={{ padding: '8rem 0' }}>
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>

            {/* Left info */}
            <div style={{ position: 'sticky', top: '7rem' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552' }}>The Application</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95, marginTop: '1rem', marginBottom: '1.5rem' }}>
                Apply For 1:1<br />Coaching Below
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#a67358', lineHeight: 1.8, fontWeight: 500, marginBottom: '2.5rem' }}>
                This is deep, structured 1:1 work focused on your personal growth, your relationships, your career direction, and breaking patterns that hold you back.
              </p>

              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { icon: '✦', color: '#3b9b6d', bg: 'rgba(59,155,109,0.06)', title: 'No generic advice.', body: 'No surface-level fixes. Everything is tailored specifically to you and the patterns running your life.' },
                  { icon: '✕', color: '#ca71a6', bg: 'rgba(202,113,166,0.06)', title: 'Not for you if:', body: "You're looking for quick fixes or someone to fix things for you. This requires real commitment." },
                  { icon: '◎', color: '#fcbc51', bg: 'rgba(252,188,81,0.06)', title: 'Spots are limited:', body: 'I only take a small number of clients at a time to ensure focused, deep work.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: 20, border: '1px solid rgba(22,91,116,0.08)', background: item.bg }}
                  >
                    <span style={{ fontSize: '1.3rem', fontWeight: 900, color: item.color, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontWeight: 900, color: '#165b74', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</h4>
                      <p style={{ color: '#a67358', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div>
              <CoachingForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
