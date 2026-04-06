"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function PodcastBlog() {
  return (
    <section id="podcast" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: '#fff',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          
          {/* Podcast Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: 1, minWidth: '300px' }}
          >
            <span style={{ color: 'var(--color-accent-coral)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Podcast</span>
            <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-karla)', color: 'var(--color-primary)', lineHeight: 1.1 }}>
              What It Really Takes
            </h2>
            <p style={{ color: 'var(--color-text-primary)', marginBottom: '0.75rem', fontSize: '1.125rem', opacity: 0.9 }}>
              A podcast where founders, creators, and leaders share the truth behind growth. The breakdowns, the pressure, the identity shifts, and the mindset it takes to build something meaningful.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '1rem', fontStyle: 'italic' }}>
              This is not surface-level success talk This is what it really takes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#podcast" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                backgroundColor: 'var(--color-primary)', color: '#fff',
                padding: '1rem 1.75rem', borderRadius: 'var(--radius-pill)',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem'
              }}>
                <span>▶</span> Watch The Podcast
              </a>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                border: '2px solid var(--color-primary)', color: 'var(--color-primary)',
                padding: '1rem 1.75rem', borderRadius: 'var(--radius-pill)',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                backgroundColor: 'transparent'
              }}>
                Be The Guest
              </a>
            </div>
          </motion.div>

          {/* Blog Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: 1, minWidth: '300px' }}
          >
            <span style={{ color: 'var(--color-accent-emerald)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Read & Reflect</span>
            <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-karla)', color: 'var(--color-primary)', lineHeight: 1.1 }}>
              Blogs & Updates
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { title: "Building Clarity in Chaos", date: "Oct 12" },
                { title: "The Missing Layer: Mental Fitness", date: "Sep 28" }
              ].map(post => (
                <div key={post.title} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem' }}>
                   <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-emerald)', fontWeight: 600, marginBottom: '0.5rem' }}>{post.date}</div>
                   <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontFamily: 'var(--font-karla)', cursor: 'pointer' }}>
                     {post.title}
                   </h3>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
