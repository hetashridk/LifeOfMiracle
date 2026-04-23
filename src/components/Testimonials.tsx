'use client';

import React from 'react';
import { motion } from 'framer-motion';

const W = { maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem', width: '100%' };

const TESTIMONIALS = [
  {
    quote: "Karishma has a rare ability to make a room feel deeply understood. Her keynote didn't just motivate — it shifted something in how we think. Our team left with clarity they didn't expect.",
    name: 'Rohan Mehta',
    title: 'Head of People, Celebal Technologies',
    color: '#ea7554',
  },
  {
    quote: "She speaks in a way that stays with you. It wasn't a generic motivational talk — it was honest, grounded, and genuinely useful. Exactly what our students needed to hear.",
    name: 'Dr. Priya Shah',
    title: 'Dean of Students, Auro University Surat',
    color: '#f4ba59',
  },
  {
    quote: "One of the best sessions we've hosted. Karishma's presence commanded attention and her content created real reflection. We've had requests to bring her back already.",
    name: 'Ankit Verma',
    title: 'Founder, Ikover Coworking Space',
    color: '#f4ba59',
  },
];

export function Testimonials() {
  return (
    <section style={{ padding: '7rem 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative large quote */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', userSelect: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <span style={{ fontSize: 'clamp(7rem, 18vw, 15rem)', fontWeight: 900, color: 'rgba(0,0,0,0.04)', lineHeight: 1, paddingRight: '2rem', whiteSpace: 'nowrap', letterSpacing: '-0.04em' }}>"</span>
      </div>

      <div style={{ ...W, position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontSize: '0.6rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(234,117,84,0.8)', marginBottom: '1rem', textAlign: 'center' }}
        >
          What People Say
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 900, color: '#1a1a1a', textAlign: 'center', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '4rem' }}
        >
          Voices from the room
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{ padding: '2.5rem', borderRadius: 20, background: '#fff', border: '1px solid rgba(0,0,0,0.08)' }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: t.color, lineHeight: 1, marginBottom: '1.25rem', opacity: 0.8 }}>"</div>
              <p style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.7)', lineHeight: 1.85, marginBottom: '2rem', fontStyle: 'italic' }}>
                {t.quote}
              </p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.25rem' }}>
                <p style={{ fontWeight: 900, color: '#1a1a1a', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{t.name}</p>
                <p style={{ fontSize: '0.78rem', color: t.color, fontWeight: 600, letterSpacing: '0.3px' }}>{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
