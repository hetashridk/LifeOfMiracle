"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "How do I lead with calm in stressful situations?", a: "By building mental fitness. We focus on noticing your internal state before reacting, allowing you to choose a poised response." },
  { q: "How can I stop overthinking and anxiety?", a: "Through our mindfulness techniques and clarity-building frameworks that ground you in the present moment." },
  { q: "Do you offer corporate training?", a: "Yes. We offer tailored programs for teams and organizations to reduce burnout and improve collective resilience." }
];

export function GetStarted() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="contact" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-primary)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* FAQ Area (Left / Right Layout) */}
        <div style={{ display: 'flex', gap: '4rem', marginBottom: '8rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-karla)', lineHeight: 1.1 }}>
              Frequently<br />Asked
            </h2>
          </div>
          <div style={{ flex: '2', minWidth: '300px', display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid var(--color-primary)',
                  overflow: 'hidden'
                }}
              >
                <div
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    padding: '2rem 0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 600,
                    fontSize: '1.25rem'
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: '2rem', fontWeight: 300 }}>{openFaq === index ? '−' : '+'}</span>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ paddingBottom: '2rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Get Started Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="responsive-padding"
          style={{
            // backgroundColor: 'var(--color-primary)',
            backgroundColor: '#165b74',
            borderRadius: 'var(--radius-lg)',
            padding: '5rem 4rem',
            textAlign: 'center',
            color: '#fff',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
          }}
        >
          <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-karla)', marginBottom: '2rem', lineHeight: 1.1 }}>
            Your Mind Is Either Your Strength Or Your Limitation
          </h2>
          <a
            href="#contact"
            className="btn-mustard"
            style={{
              display: 'inline-block',
              padding: '1.2rem 3rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--color-accent-mustard)',
              color: 'var(--color-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '0.5px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
          >
            Let's Train Your Mind
          </a>
        </motion.div>

      </div>
    </section>
  );
}
