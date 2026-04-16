"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DiscoveryForm from './DiscoveryForm';

export function Hero() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 5% 100px',
      backgroundColor: 'var(--color-bg)',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

        {/* Tag */}
        {/* <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'var(--color-accent-mustard)',
            backgroundColor: 'var(--color-primary)',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-pill)',
            marginBottom: '2.5rem',
          }}
        >
          Mental Fitness Coach
        </motion.span> */}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            fontFamily: 'var(--font-karla)',
            fontWeight: 700,
            color: 'var(--color-primary)',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
            width: '100%',
          }}
        >
          Build A Mind That Works For You,{' '}<br />Not Against You
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: '1.5rem',
            color: 'var(--color-text-primary)',
            opacity: 0.8,
            lineHeight: 1.8,
            marginBottom: '3rem',
            maxWidth: '700px',
          }}
        >
          Mental Fitness Is The Skill No One Taught You, Until Now.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          href="#about"
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            borderRadius: 'var(--radius-pill)',
            border: '1.5px solid var(--color-primary)',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--color-primary)';
          }}
          onClick={(e) => {
            e.preventDefault();
            setShowForm(true);
          }}
        >
          Book a discovery call
        </motion.a>

      </div>
      {showForm && <DiscoveryForm onClose={() => setShowForm(false)} />}
    </section>
  );
}