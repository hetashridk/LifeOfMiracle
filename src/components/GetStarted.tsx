"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

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
            <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
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
          style={{
            backgroundColor: 'var(--color-accent-peach)',
            borderRadius: 'var(--radius-lg)',
            padding: '5rem 4rem',
            textAlign: 'center',
            color: 'var(--color-primary)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
          }}
        >
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
            Ready To Grow and Amplify Your Impact?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
            Handle any conflict or situation with calm and poise. Express yourself effectively & assertively. Exude magnetic leadership presence. <br/><br/>
            Join the newsletter to download my Free eBook: <strong>How to stop overthinking in 3 minutes</strong>.
          </p>
          <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }} onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                padding: '1.2rem 2rem',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                outline: 'none',
                flex: 1,
                fontSize: '1.1rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}
            />
            <Button variant="primary" size="lg" style={{ backgroundColor: 'var(--color-accent-mustard)', color: 'var(--color-primary)', fontSize: '1.1rem' }}>
              Subscribe & Download
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
