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
            <span style={{ color: 'var(--color-accent-coral)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Listen & Learn</span>
            <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', lineHeight: 1.1 }}>
              What It Really Takes
            </h2>
            <p style={{ color: 'var(--color-text-primary)', marginBottom: '2rem', fontSize: '1.125rem', opacity: 0.9 }}>
              Conversations exploring the human stories and clarity-building frameworks behind success.
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'var(--color-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.05)'
            }}>
               <div style={{
                 width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', fontSize: '1.5rem'
               }}>
                 ▶
               </div>
               <div>
                 <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Watch the Podcast</div>
                 <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Available Now</div>
               </div>
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
            <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', lineHeight: 1.1 }}>
              Blogs & Updates
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { title: "Building Clarity in Chaos", date: "Oct 12" },
                { title: "The Missing Layer: Mental Fitness", date: "Sep 28" }
              ].map(post => (
                <div key={post.title} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem' }}>
                   <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-emerald)', fontWeight: 600, marginBottom: '0.5rem' }}>{post.date}</div>
                   <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', cursor: 'pointer' }}>
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
