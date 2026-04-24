"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS, BlogPost } from '@/lib/blogData';
import Link from 'next/link';


export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  useEffect(() => {
    const foundPost = BLOG_POSTS.find(p => p.slug === slug);
    if (foundPost) setPost(foundPost);
  }, [slug]);

  if (!post) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ width: 40, height: 40, border: '2px solid var(--color-accent-coral)', borderRadius: '50%', borderTopColor: 'transparent' }} />
    </div>
  );

  const isSundayReset = post.slug === 'the-day-that-gives-you-back-to-yourself';
  const themeColor = isSundayReset ? 'var(--color-accent-coral)' : 'var(--color-accent-emerald)';
  const secondaryColor = isSundayReset ? '#ffffff' : '#ffffff';

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== post.slug);

  return (
    <main style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Progress Bar */}
      <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: themeColor, transformOrigin: '0%', zIndex: 2000, scaleX }} />

      <Navigation />

      {/* Background Texture/Art Element */}
      <motion.div
        style={{
          position: 'fixed', top: 0, right: 0, width: '40vw', height: '100vh',
          background: `radial-gradient(circle at 70% 30%, ${themeColor}08, transparent 70%)`,
          zIndex: 0, pointerEvents: 'none', y: backgroundY
        }}
      />

      {/* ── HERO SECTION ── */}
      <section style={{ position: 'relative', paddingTop: '14rem', paddingBottom: '4rem', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'end' }} className="hero-flex">

            {/* Left: Metadata */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ paddingBottom: '2rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <span style={{ color: themeColor, fontWeight: 900, letterSpacing: '6px', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  {post.tag}
                </span>
                <div style={{ height: '1px', width: '60px', background: themeColor, opacity: 0.3 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>{post.date}</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', opacity: 0.7 }}>{post.readTime}</p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Written By</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: themeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 900 }}>K</div>
                    <span style={{ fontSize: '1rem', fontWeight: 700 }}>{post.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontFamily: 'var(--font-karla)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--color-primary)',
                marginBottom: '2rem',
                maxWidth: '800px'
              }}>
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      <section style={{ position: 'relative', zIndex: 1, marginBottom: '6rem' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 5%' }}>
          <motion.div
            initial={{ clipPath: 'inset(0 10% 0 10%)', opacity: 0 }}
            whileInView={{ clipPath: 'inset(0 0% 0 0%)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)'
            }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '6rem' }}>
        <div style={{
          maxWidth: '850px',
          margin: '0 auto',
          padding: '0 5%'
        }}>

          <div style={{ position: 'relative' }}>
            {post.content.map((block, idx) => {
              const isHeading = block.startsWith('###');
              const isQuote = (block.includes('lying') || block.includes('part of the performance') || block.includes('awareness changes everything') || block.includes('neuroplasticity in action')) && block.length < 200;

              if (isHeading) {
                return (
                  <motion.h2
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                      fontSize: '2.2rem',
                      fontFamily: 'var(--font-karla)',
                      fontWeight: 900,
                      marginTop: '4rem',
                      marginBottom: '1.5rem',
                      color: 'var(--color-primary)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {block.replace('### ', '')}
                  </motion.h2>
                );
              }

              if (isQuote) {
                return (
                  <motion.blockquote
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                      margin: '4rem 0',
                      padding: '3rem',
                      backgroundColor: secondaryColor,
                      borderRadius: 'var(--radius-lg)',
                      borderLeft: `8px solid ${themeColor}`,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <p style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      lineHeight: 1.3,
                      color: 'var(--color-primary)',
                      margin: 0,
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-karla)'
                    }}>
                      "{block}"
                    </p>
                  </motion.blockquote>
                );
              }

              const isFirstPara = idx === 0 || (idx > 0 && post.content[idx - 1].startsWith('###'));

              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.8,
                    color: 'var(--color-text-primary)',
                    marginBottom: '1.5rem',
                    fontWeight: 450
                  }}
                >
                  {isFirstPara ? (
                    <span style={{
                      float: 'left',
                      fontSize: '5rem',
                      lineHeight: '0.7',
                      paddingRight: '1rem',
                      paddingTop: '0.4rem',
                      fontWeight: 900,
                      color: themeColor,
                      fontFamily: 'var(--font-karla)'
                    }}>
                      {block.charAt(0)}
                    </span>
                  ) : null}
                  {isFirstPara ? block.slice(1) : block}
                </motion.p>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TAKEAWAY SECTION ── */}
      <section style={{ padding: '4rem 5%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '3rem',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              textAlign: 'center'
            }}
          >
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 900, color: themeColor, marginBottom: '1.5rem' }}>Final Takeaway</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.4, margin: 0 }}>
              {post.takeaway}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DISCOVER MORE (CAROUSEL) ── */}
      <section style={{ padding: '6rem 0', position: 'relative', zIndex: 1, backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <span style={{ color: themeColor, fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.75rem', display: 'block', marginBottom: '1rem' }}>Journal</span>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-karla)', color: 'var(--color-primary)' }}>Discover more stories</h3>
            </div>

            {/* Carousel Controls */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => {
                  const el = document.getElementById('blog-carousel');
                  if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="carousel-nav"
                style={{
                  width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: 'var(--color-primary)'
                }}
              >
                ←
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('blog-carousel');
                  if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="carousel-nav"
                style={{
                  width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: 'var(--color-primary)'
                }}
              >
                →
              </button>
            </div>
          </div>

          <div
            id="blog-carousel"
            style={{
              display: 'flex',
              gap: '2.5rem',
              overflowX: 'auto',
              padding: '1rem 0 4rem',
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              scrollBehavior: 'smooth'
            }} className="no-scrollbar"
          >
          {otherPosts.map((sub) => (
            <Link 
              key={sub.slug} 
              href={`/blog/${sub.slug}`} 
              style={{ textDecoration: 'none', color: 'inherit', flex: '0 0 auto', width: 'min(400px, 80vw)', scrollSnapAlign: 'start' }}
            >
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <div style={{ 
                  aspectRatio: '16/10', 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  marginBottom: '1.5rem', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  position: 'relative'
                }}>
                  <img src={sub.image} alt={sub.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.6rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--color-primary)'
                  }}>
                    {sub.tag}
                  </div>
                </div>
                <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-karla)', fontWeight: 800, marginTop: '0.75rem', lineHeight: 1.2, color: 'var(--color-primary)' }}>{sub.title}</h4>
                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text-secondary)', opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{sub.excerpt}</p>
                <div style={{ marginTop: '1rem', fontWeight: 800, fontSize: '0.8rem', color: themeColor, textTransform: 'uppercase', letterSpacing: '2px' }}>read story →</div>
              </motion.div>
            </Link>
          ))}
          {/* Spacer for the end to ensure the last card can be start-aligned with the margin */}
          <div style={{ flex: '0 0 5%', width: '5%' }} />
          </div>
        </div>
      </section>

      {/* ── PODCAST & NEWSLETTER SECTION (HOME PAGE UI STYLE) ── */}
      <section style={{ padding: '6rem 5% 10rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          
          {/* Podcast Card - REPLICATING HOME PAGE UI EXACTLY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
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
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', margin: '1rem 0',
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

            {/* Podcast featured card inside */}
            <a
              href="https://youtu.be/OPMbmWcRAJ8?si=xxzyMk9Sm1b5lAN_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}
            >
              <div style={{
                backgroundColor: '#0d5468',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                cursor: 'pointer',
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
                  <span style={{
                    color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem',
                    textTransform: 'uppercase', letterSpacing: '1px',
                  }}>
                    Latest Episode
                  </span>
                  <p style={{
                    color: '#fff', fontSize: '1rem', fontWeight: 600,
                    margin: '0.25rem 0',
                  }}>
                    3 Years Without Work. This Is What It Taught Me
                  </p>
                </div>
              </div>
            </a>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link
                href="https://www.youtube.com/channel/UCRdjzUBlxbCzgK4xBqmBKRw"
                target="_blank"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.75rem',
                  backgroundColor: '#ea7554', color: '#fff',
                  padding: '1rem 1.75rem', borderRadius: 'var(--radius-pill)',
                  textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                }}
              >
                <span>▶</span> Watch The Podcast
              </Link>
              <Link
                href="/#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.75rem',
                  border: '2px solid #1a1a1a',
                  color: '#1a1a1a',
                  padding: '1rem 1.75rem',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 700, fontSize: '0.95rem',
                  backgroundColor: 'transparent',
                  textDecoration: 'none'
                }}
              >
                Be The Guest
              </Link>
            </div>
          </motion.div>

          {/* Enjoying this? Card - Adjusted to match Podcast card height/style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '3rem',
              backgroundColor: '#0d5468',
              borderRadius: 'var(--radius-lg)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
          >
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-karla)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>Enjoying this?</h3>
            <p style={{ fontSize: '1.125rem', opacity: 0.8, lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Join the newsletter for weekly mental fitness insights delivered straight to your inbox. No fluff, just clarity.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{ 
                  padding: '1.25rem 1.5rem', 
                  borderRadius: 'var(--radius-pill)', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  width: '100%',
                  outline: 'none' 
                }}
              />
              <button
                className="btn-subscribe"
                style={{
                  backgroundColor: 'var(--color-accent-coral)',
                  color: '#fff',
                  border: 'none',
                  padding: '1.1rem 2.5rem',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 800,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.25s ease',
                }}
              >Subscribe Now</button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── AUTHOR BIO & FOOTER ── */}
      <section style={{ paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 5%' }}>
          <div style={{ padding: '3rem', background: 'rgba(252,252,252,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.04)', borderRadius: 'var(--radius-lg)', display: 'flex', gap: '2rem', alignItems: 'center' }} className="author-card">
            <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: themeColor }}>
              <img src="/Karishma_One.jpg" alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.5rem' }}>Karishma Khubchandani</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>
                Helping leaders build a mind that works For them, not Against them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .carousel-nav { transition: all 0.3s ease; cursor: pointer; }
        .carousel-nav:hover { 
          background: #ea7554 !important;
          color: #fff !important;
          transform: scale(1.1);
          border-color: #ea7554 !important;
        }
        @media (max-width: 768px) {
          .author-card { flex-direction: column; text-align: center; }
        }
      `}</style>
    </main>
  );
}
