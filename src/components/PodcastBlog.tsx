"use client";

import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Building Clarity in Chaos',
    date: 'Oct 12',
    tag: 'Mindset',
    desc: 'How to find focus and direction when everything around you feels uncertain.',
  },
  {
    title: 'The Missing Layer: Mental Fitness',
    date: 'Sep 28',
    tag: 'Mental Fitness',
    desc: 'Why most people skip the one layer that makes everything else actually work.',
  },
];

export function PodcastBlog() {
  return (
    <section id="podcast" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: '#fff',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

          {/* ── Podcast Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1, minWidth: '300px',
              backgroundColor: 'var(--color-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{
              color: 'var(--color-accent-coral)', letterSpacing: '2px',
              textTransform: 'uppercase', fontWeight: 600, fontSize: '0.8rem',
            }}>
              Podcast
            </span>
            <h2 style={{
              fontSize: '3.5rem', margin: '1rem 0',
              fontFamily: 'var(--font-karla)',
              color: 'var(--color-primary)', lineHeight: 1.1,
            }}>
              What It Really Takes
            </h2>
            <p style={{
              color: 'var(--color-text-primary)', marginBottom: '0.75rem',
              fontSize: '1.125rem', opacity: 0.9,
            }}>
              A podcast where founders, creators, and leaders share the truth
              behind growth. The breakdowns, the pressure, the identity shifts,
              and the mindset it takes to build something meaningful.
            </p>
            <p style={{
              color: 'var(--color-text-secondary)', marginBottom: '2rem',
              fontSize: '1rem', fontStyle: 'italic',
            }}>
              This is not surface-level success talk. This is what it really takes.
            </p>

            {/* Podcast featured card */}
            <div style={{
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                backgroundColor: 'var(--color-accent-coral)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontSize: '1.2rem' }}>▶</span>
              </div>
              <div>
                <p style={{
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem',
                }}>
                  Latest Episode
                </p>
                <p style={{
                  fontSize: '1.05rem', fontWeight: 700,
                  color: '#fff', lineHeight: 1.3,
                }}>
                  The Truth Behind Mental Strength
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#podcast" className="btn-dark" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                backgroundColor: 'var(--color-primary)', color: '#fff',
                padding: '1rem 1.75rem', borderRadius: 'var(--radius-pill)',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
              }}>
                <span>▶</span> Watch The Podcast
              </a>
              <a href="#contact" className="btn-outline" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                border: '2px solid var(--color-primary)', color: 'var(--color-primary)',
                padding: '1rem 1.75rem', borderRadius: 'var(--radius-pill)',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                backgroundColor: 'transparent',
              }}>
                Be The Guest
              </a>
            </div>
          </motion.div>

          {/* ── Blog Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1, minWidth: '300px',
              backgroundColor: 'var(--color-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{
              color: 'var(--color-accent-emerald)', letterSpacing: '2px',
              textTransform: 'uppercase', fontWeight: 600, fontSize: '0.8rem',
            }}>
              Read & Reflect
            </span>
            <h2 style={{
              fontSize: '3.5rem', margin: '1rem 0 2rem',
              fontFamily: 'var(--font-karla)',
              color: 'var(--color-primary)', lineHeight: 1.1,
            }}>
              Blogs & Updates
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {posts.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem',
                    border: '1px solid rgba(0,0,0,0.05)',
                    borderLeft: '4px solid var(--color-accent-emerald)',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                >
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: '0.75rem',
                  }}>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      color: 'var(--color-accent-emerald)',
                      letterSpacing: '1px',
                    }}>
                      {post.date}
                    </span>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 9999,
                      backgroundColor: 'rgba(59,155,109,0.1)',
                      color: 'var(--color-accent-emerald)',
                    }}>
                      {post.tag}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.15rem', fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem', lineHeight: 1.3,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem', color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {post.desc}
                  </p>
                  <div style={{
                    marginTop: '1rem', fontSize: '0.85rem',
                    fontWeight: 700, color: 'var(--color-accent-emerald)',
                  }}>
                    Read more →
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
