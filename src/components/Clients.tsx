"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ORGS = [
  { name: 'Celebal Technologies',   type: 'Organisation' },
  { name: 'Ikover Coworking Space', type: 'Organisation' },
  { name: 'Workspace Co.',          type: 'Organisation' },
  { name: 'CK Pithawala College',   type: 'Institution'  },
  { name: 'Auro University Surat',  type: 'Institution'  },
  { name: 'SCET College',           type: 'Institution'  },
];

export function Clients() {
  return (
    <section id="clients" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: '#fff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ 
            color: 'var(--color-accent-coral)', 
            letterSpacing: '5px', 
            textTransform: 'uppercase', 
            fontWeight: 800, 
            marginBottom: '1rem', 
            fontSize: '0.65rem' 
          }}>
            Trusted By
          </p>
          <h2 style={{
             fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
             fontWeight: 900,
             color: 'var(--color-primary)',
             marginBottom: '3rem',
             fontFamily: 'var(--font-karla)',
             letterSpacing: '-0.02em'
          }}>
            Organisations & institutions she has worked with
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.25rem' 
          }}>
            {ORGS.map((org, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ 
                  padding: '1.5rem', 
                  background: '#fcfcfc', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid rgba(22,91,116,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '100px'
                }}
              >
                <span style={{ 
                  fontSize: '0.55rem', 
                  fontWeight: 900, 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase', 
                  color: org.type === 'Organisation' ? '#f27552' : '#3b9b6d' 
                }}>
                  {org.type}
                </span>
                <p style={{ 
                  fontSize: '1rem', 
                  fontWeight: 700, 
                  color: 'var(--color-primary)', 
                  margin: 0,
                  lineHeight: 1.3
                }}>
                  {org.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
