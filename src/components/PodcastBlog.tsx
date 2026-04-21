"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import GuestForm from './GuestForm';
import Newsletter from './Newsletter';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Day That Gives You Back to Yourself',
    slug: 'the-day-that-gives-you-back-to-yourself',
    date: 'Oct 12',
    tag: 'Mindset',
    desc: 'Have you ever woken up on a Sunday… and immediately felt guilty? It\'s time to reclaim your rest.',
  },
  {
    title: 'What Happens When Life Doesn’t Go as Planned?',
    slug: 'what-happens-when-life-doesnt-go-as-planned',
    date: 'Sep 28',
    tag: 'Stories',
    desc: 'Freddy Daruwala\'s journey isn\'t just about movies—it\'s about what happens when life doesn’t go as expected.',
  },
];

/** Returns window.innerWidth after mount; undefined during SSR/first render (avoids hydration mismatch). */
function useWindowWidth(): number | undefined {
  const [width, setWidth] = useState<number | undefined>(undefined);
  useEffect(() => {
    setWidth(window.innerWidth);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

export function PodcastBlog() {
  const [showGuestForm, setShowGuestForm] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth !== undefined && windowWidth < 640;
  const isTablet = windowWidth !== undefined && windowWidth >= 640 && windowWidth < 1024;
  const isSmall = isMobile || isTablet; // mobile + tablet

  // Responsive tokens
  const sectionPadding = isMobile ? '3rem 1.25rem' : 'var(--spacing-section) 5%';
  const cardPadding = isMobile ? '1.25rem' : '2rem';
  const episodePadding = isMobile ? '1.25rem' : '2rem';
  const episodeGap = isMobile ? '1rem' : '1.5rem';

  useEffect(() => {
    let isPaused = false;
    const scroll = () => {
      if (carouselRef.current && !isPaused) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const firstChild = carouselRef.current.firstElementChild as HTMLElement;
        const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : 300; // 16 is gap (1rem)

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    };

    const interval = setInterval(scroll, 4000);

    const onMouseEnter = () => { isPaused = true; };
    const onMouseLeave = () => { isPaused = false; };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', onMouseEnter);
      carousel.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.removeEventListener('mouseenter', onMouseEnter);
        carousel.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <section id="podcast" style={{ padding: sectionPadding, backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="flex-responsive" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

          {/* Podcast Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              minWidth: 'min(300px, 100%)',
              backgroundColor: 'transparent',
              borderRadius: 'var(--radius-lg)',
              padding: cardPadding,
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

            {/* Podcast featured card */}
            <a
              href="https://youtu.be/OPMbmWcRAJ8?si=xxzyMk9Sm1b5lAN_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}
            >
              <div style={{
                backgroundColor: 'var(--color-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: episodePadding,
                display: 'flex',
                alignItems: 'center',
                gap: episodeGap,
                cursor: 'pointer',
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  backgroundColor: 'var(--color-accent-coral)',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ color: '#fff', fontSize: '1.2rem' }}>&#9654;</span>
                </div>
                <div style={{ minWidth: 0 }}>
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
                    wordBreak: 'break-word',
                  }}>
                    3 Years Without Work. This Is What It Taught Me
                  </p>
                </div>
              </div>
            </a>

            {/* CTA buttons */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <a
                href="https://www.youtube.com/channel/UCRdjzUBlxbCzgK4xBqmBKRw"
                className="btn-dark"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.75rem',
                  backgroundColor: 'var(--color-primary)', color: '#fff',
                  padding: '1rem 1.75rem', borderRadius: 'var(--radius-pill)',
                  textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>&#9654;</span> Watch The Podcast
              </a>

              {showGuestForm && <GuestForm onClose={() => setShowGuestForm(false)} />}

              <button
                type="button"
                className="btn-outline"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.75rem',
                  border: '2px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  padding: '1rem 1.75rem',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 700, fontSize: '0.95rem',
                  backgroundColor: 'transparent', cursor: 'pointer',
                }}
                onClick={() => setShowGuestForm(true)}
              >
                Be The Guest
              </button>
            </div>
          </motion.div>

          {/* ── Blog Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              minWidth: 'min(300px, 100%)',
              maxWidth: '100%',
              overflow: 'hidden',
              backgroundColor: 'transparent',
              borderRadius: 'var(--radius-lg)',
              padding: cardPadding,
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{
              color: 'var(--color-accent-emerald)', letterSpacing: '2px',
              textTransform: 'uppercase', fontWeight: 600, fontSize: '0.8rem',
            }}>
              Read &amp; Reflect
            </span>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', margin: '1rem 0 2rem',
              fontFamily: 'var(--font-karla)',
              color: 'var(--color-primary)', lineHeight: 1.1,
            }}>
              Blogs &amp; Updates
            </h2>

            {/* Blog carousel — always scrollable horizontally */}
            <div
              ref={carouselRef}
              className="hide-scrollbar"
              style={{
                overflowX: 'auto',
                display: 'flex',
                gap: '1rem',
                paddingBottom: '1rem',
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory',
                width: '100%',
                minWidth: 0,
              }}
            >
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', flex: '0 0 100%', minWidth: 0, scrollSnapAlign: 'start' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      borderRadius: 'var(--radius-lg)',
                      padding: isMobile ? '1.25rem' : '1.75rem',
                      border: '1px solid rgba(0,0,0,0.05)',
                      borderLeft: '4px solid var(--color-accent-emerald)',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s, transform 0.2s',
                      width: '100%',
                    }}
                    whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent-emerald)', letterSpacing: '1px' }}>{post.date}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: 9999, backgroundColor: 'rgba(59,155,109,0.1)', color: 'var(--color-accent-emerald)' }}>{post.tag}</span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{post.desc}</p>
                    <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-emerald)' }}>Read more →</div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Newsletter />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
