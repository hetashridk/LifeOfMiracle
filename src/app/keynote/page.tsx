'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import KeynoteForm from '@/components/KeynoteForm';

const W  = { maxWidth: '1100px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };
const CW = { maxWidth: '680px',  margin: '0 auto', padding: '0 2rem',   textAlign: 'center' as const };

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
          <div style={{ position: 'absolute', top: '-8rem', right: '-6rem', width: 520, height: 520, borderRadius: '50%', background: 'rgba(242,117,82,0.05)', filter: 'blur(90px)' }} />
          <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', width: 440, height: 440, borderRadius: '50%', background: 'rgba(22,91,116,0.04)', filter: 'blur(90px)' }} />
        </motion.div>

        <div style={{ ...W, position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '5rem', alignItems: 'center' }}>

            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
              >
                Keynote &amp; Guest Speaking
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.5rem' }}
              >
                Words That<br />
                <span style={{ color: '#f27552' }}>Stay With<br />People.</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ height: 2, width: 52, background: '#f27552', marginBottom: '1.6rem', transformOrigin: 'left', opacity: 0.7 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                style={{ fontSize: '1.1rem', color: '#a67358', lineHeight: 1.85, maxWidth: 440, marginBottom: '2.25rem', fontWeight: 500 }}
              >
                Beyond motivation — grounded conversations that create honest reflection and meaningful shifts in how people think, feel, and respond.
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
                  Book a Keynote →
                </a>
                <span style={{ fontSize: '0.78rem', color: '#b08870' }}>For events, institutions &amp; organisations</span>
              </motion.div>
            </div>

            {/* Orbit visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
              className="hide-mobile"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: 400, height: 400 }}>
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
                    <div style={{ fontSize: '1.6rem', lineHeight: 1 }}>🎤</div>
                    <div style={{ fontSize: '0.5rem', fontWeight: 900, letterSpacing: '3px', textTransform: 'uppercase', color: '#165b74', marginTop: 6 }}>Keynote</div>
                  </div>
                </div>
                {[
                  { label: 'Presence',   color: '#f27552', pos: { top: '2%',    left: '-20%'  } },
                  { label: 'Clarity',    color: '#3b9b6d', pos: { top: '10%',   right: '-14%' } },
                  { label: 'Impact',     color: '#ca71a6', pos: { bottom: '16%',right: '-16%' } },
                  { label: 'Awareness',  color: '#fcbc51', pos: { bottom: '2%', left: '-12%'  } },
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

      {/* ════════ ABOUT KARISHMA ════════ */}
      <section style={{ padding: '8rem 0', borderBottom: '1px solid rgba(22,91,116,0.09)' }}>
        <div style={CW}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.75rem' }}
          >
            The Speaker
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', color: '#165b74', marginBottom: '1.5rem' }}
          >
            Karishma Khubchandani
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ height: 2, width: 52, background: '#f27552', margin: '0 auto 2.25rem', opacity: 0.7 }}
          />

          {[
            { text: 'Karishma Khubchandani is a Mental Fitness Coach and speaker focused on helping individuals understand how their mind works under pressure, uncertainty, and growth.', color: '#165b74', weight: 600 },
            { text: 'Her work brings together emotional clarity, self-awareness, and practical mental frameworks that people can apply in their everyday lives.', color: '#a67358', weight: 500 },
            { text: 'Through her sessions, she creates space for honest reflection, deeper understanding, and meaningful shifts in how people think, feel, and respond.', color: '#165b74', weight: 500 },
            { text: 'Known for her grounded presence and real conversations, she speaks in a way that goes beyond motivation — offering insights that stay with people long after the session ends.', color: '#a67358', weight: 500 },
          ].map((item, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ fontSize: '1.12rem', color: item.color, lineHeight: 1.9, marginBottom: '1.5rem', fontWeight: item.weight }}
            >
              {item.text}
            </motion.p>
          ))}

          {/* Book a Keynote CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.42 }}
            style={{ marginTop: '2.5rem' }}
          >
            <a
              href="#enquire"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.9rem 2.2rem', background: '#165b74', color: '#fff',
                fontWeight: 800, fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase',
                borderRadius: 4, textDecoration: 'none', boxShadow: '0 8px 24px rgba(22,91,116,0.2)',
              }}
            >
              Book a Keynote →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════ AURO UNIVERSITY IMAGE ════════ */}
      <section style={{ padding: '0', borderBottom: '1px solid rgba(22,91,116,0.09)', overflow: 'hidden' }}>
        <div style={{ ...W, paddingTop: '5rem', paddingBottom: '5rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: '#f27552', marginBottom: '1.5rem', textAlign: 'center' }}
          >
            Live Sessions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#165b74', marginBottom: '2.5rem', textAlign: 'center' }}
          >
            Auro University, Surat
          </motion.p>

          {/* Image slot — replace /auro-university.jpg with your actual image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
            style={{ position: 'relative', width: '100%', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(22,91,116,0.12)' }}
          >
            {/* Placeholder — swap the src below for the real Auro University photo */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', background: 'rgba(22,91,116,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', borderRadius: 20 }}>
              <div style={{ fontSize: '3rem', opacity: 0.3 }}>🎓</div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(22,91,116,0.35)', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.6 }}>
                Add Auro University photo here<br />
                <span style={{ fontWeight: 500, fontSize: '0.65rem' }}>Place image at /public/auro-university.jpg and replace this block with:<br />{'<Image src="/auro-university.jpg" alt="..." fill style={{objectFit:"cover"}} />'}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section style={{ padding: '8rem 0', background: '#165b74', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', userSelect: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <span style={{ fontSize: 'clamp(7rem, 18vw, 15rem)', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 1, paddingRight: '2rem', whiteSpace: 'nowrap', letterSpacing: '-0.04em' }}>"</span>
        </div>

        <div style={{ ...W, position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(242,117,82,0.8)', marginBottom: '4rem', textAlign: 'center' }}
          >
            What People Say
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ padding: '2.5rem', borderRadius: 20, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Opening quote mark */}
                <div style={{ fontSize: '3rem', fontWeight: 900, color: t.color, lineHeight: 1, marginBottom: '1.25rem', opacity: 0.7 }}>"</div>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
                  <p style={{ fontWeight: 900, color: '#fff', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.78rem', color: t.color, fontWeight: 600, letterSpacing: '0.3px' }}>{t.title}</p>
                </div>
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
            <span style={{ color: '#f27552' }}>Keynote &amp;<br />Guest Speaking.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            style={{ height: 2, width: 52, background: '#f27552', margin: '0 auto 1.5rem', opacity: 0.7 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
            style={{ fontSize: '1.1rem', color: '#a67358', lineHeight: 1.85, marginBottom: '3.5rem', fontWeight: 500 }}
          >
            Fill in the form below with your event details and we'll get back to you with everything you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'left' }}
          >
            <KeynoteForm />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
