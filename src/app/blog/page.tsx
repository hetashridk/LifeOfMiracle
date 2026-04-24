"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/blogData';

const MagneticLink = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <Link href={href}>{children}</Link>
);

export default function BlogLanding() {
  const posts = [...BLOG_POSTS].reverse();
  const featuredPosts = posts.slice(0, 4);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(6);
  const { scrollYProgress } = useScroll();
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % featuredPosts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  const featuredPost = featuredPosts[activeIdx];

  return (
    <main style={{ backgroundColor: 'transparent', color: 'var(--color-primary)', overflowX: 'hidden' }}>
      <Navigation />

      {/* ── ALIGNED HERO ── */}
      <section style={{ padding: '120px 5% 60px', position: 'relative', overflow: 'hidden' }}>
        <motion.div style={{ position: 'absolute', zIndex: 0, top: '20%', left: '5%', opacity: 0.02, pointerEvents: 'none', y: bgTextY }}>
          <h1 style={{ fontSize: '20vw', fontWeight: 900, lineHeight: 0.7 }}>JOURNAL</h1>
        </motion.div>

        <div style={{ zIndex: 1, textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span style={{
              color: 'var(--color-accent-coral)',
              fontSize: '0.8rem',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 700,
              display: 'block'
            }}>
              The Collection
            </span> */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '2rem'
            }}>
              Reflections on <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Pure Potential</span>
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.7, lineHeight: 1.6 }}>
              Weekly insights on mental fitness, deep performance, and the art of living with clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED POST (ALIGNED SCALE) ── */}
      <section style={{ padding: '40px 5% 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.04)'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="featured-container"
          >
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16/10' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={featuredPost.slug}
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                />
              </AnimatePresence>
              
              {/* Carousel Dots */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                display: 'flex',
                gap: '0.75rem',
                zIndex: 2
              }}>
                {featuredPosts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      width: activeIdx === idx ? '30px' : '10px',
                      height: '10px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: activeIdx === idx ? 'var(--color-accent-coral)' : 'rgba(255,255,255,0.5)',
                      transition: 'all 0.4s ease',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredPost.slug}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <span style={{ color: 'var(--color-accent-emerald)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.7rem', display: 'block', marginBottom: '1rem' }}>Latest Story</span>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem', minHeight: '3em' }}>{featuredPost.title}</h2>
                  <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '2rem', minHeight: '3.2em' }}>{featuredPost.excerpt}</p>
                  <MagneticLink href={`/blog/${featuredPost.slug}`}>
                    <button className="btn-dark" style={{ padding: '0.8rem 2rem', borderRadius: 'var(--radius-pill)', backgroundColor: '#ea7554', color: '#fff', fontWeight: 600, transition: 'all 0.25s ease' }}>
                      Read More
                    </button>
                  </MagneticLink>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ALL BLOG POSTS GRID ── */}
      <section style={{ padding: '60px var(--gutter) 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'left' }}>
              All Stories
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '4rem 2.5rem',
            width: '100%'
          }} className="blog-grid">
            {posts.slice(1, 1 + visibleCount).map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    background: '#fff',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                    height: '100%',
                    border: '1px solid rgba(0,0,0,0.03)',
                    transition: 'box-shadow 0.3s ease'
                  }} className="blog-card">
                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                      <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="card-img" />
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--color-primary)'
                      }}>
                        {post.tag}
                      </div>
                    </div>
                    <div style={{ padding: '1.8rem' }}>
                      <div style={{ marginBottom: '1rem', opacity: 0.5, fontSize: '0.75rem', fontWeight: 600 }}>
                        {post.date} • {post.readTime}
                      </div>
                      <h4 style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem', minHeight: '3em', color: 'var(--color-primary)' }}>
                        {post.title}
                      </h4>
                      <div style={{
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        color: 'var(--color-accent-coral)',
                        letterSpacing: '1.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        READ STORY <span style={{ fontSize: '1.2rem' }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {visibleCount < posts.length - 1 && (
            <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount(prev => prev + 6)}
                style={{
                  padding: '1.2rem 3rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'transparent',
                  border: '2px solid #1a1a1a',
                  color: '#1a1a1a',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                className="btn-load-more"
              >
                Load More Stories
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* ── QUOTE SECTION (BREATHING ROOM) ── */}
      <section style={{ padding: '8rem 5%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '1000px' }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--color-text-secondary)' }}>
            "The quality of your life is determined by the quality of your thoughts, and the courage to act upon them."
          </h2>
          <div style={{ marginTop: '2.5rem', width: '60px', height: '2px', background: 'var(--color-accent-coral)', margin: '2.5rem auto' }} />
          <span style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px' }}>Karishma Khubchandani</span>
        </motion.div>
      </section>

      {/* ── NEWSLETTER (ALIGNED SCALE) ── */}
      <section style={{ padding: '60px 5% 120px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#0d5468',
          borderRadius: 'var(--radius-lg)',
          padding: '5rem 8%',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(45, 35, 35, 0.15)'
        }}>
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1, pointerEvents: 'none', filter: 'brightness(0) invert(1)' }}>
            <img src="/lotus_right.png" style={{ width: '500px' }} alt="" />
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }} className="newsletter-grid">
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>Soul & Science <br />in your inbox.</h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.5 }}>Join 4,500+ thinkers who receive a weekly lens on mental performance.</p>
            </div>
            <div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="email"
                  placeholder="Your best email address"
                  className="newsletter-input"
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.8rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    fontSize: '1rem',
                    backdropFilter: 'blur(10px)',
                    outline: 'none',
                  }}
                />
                <button className="btn-mustard" style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--color-accent-mustard)',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}>
                  Join The Inner Circle
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        main {
          --gutter: max(5%, (100vw - 1200px) / 2);
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
        }

        .carousel-nav:hover {
          background: #e6b45a !important;
          color: #fff !important;
          transform: scale(1.05);
          cursor: pointer;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.65);
        }

        @media (max-width: 1024px) {
          .featured-container {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
            gap: 2rem !important;
          }
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding: 2rem !important;
          }
        }

        @media (max-width: 640px) {
          h1 { font-size: 2.2rem !important; }
          h2 { font-size: 1.8rem !important; }
        }
      `}</style>
    </main>
  );
}
