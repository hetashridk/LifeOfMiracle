"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DiscoveryForm from './DiscoveryForm';

/**
 * Returns the window's inner width, or undefined until the component has
 * mounted on the client. Using undefined as the initial value ensures the
 * server-rendered HTML and the first client render are identical, preventing
 * React hydration mismatches.
 */
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

export function Hero() {
  const [showForm, setShowForm] = useState(false);
  const windowWidth = useWindowWidth();

  // Arrow is only shown on true desktop where layout is stable.
  // On tablet the subtitle wraps to 2 lines, making fixed arrow geometry unreliable.
  // "undefined" means not yet hydrated → render nothing (avoids flash / mismatch).
  const showArrow = windowWidth !== undefined && windowWidth >= 1024;

  // Responsive values derived after hydration
  const isMobile = windowWidth !== undefined && windowWidth < 640;
  const subtitleFontSize = isMobile ? '1.05rem' : '1.5rem';
  const sectionPadding  = isMobile ? '70px 5% 60px'
                        : windowWidth !== undefined && windowWidth < 1024 ? '80px 5% 80px'
                        : '100px 5% 100px';

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: sectionPadding,
      backgroundColor: 'transparent',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

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

        {/* Subheading + Arrow + Button — single relative container */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '700px' }}>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: subtitleFontSize,
              color: 'var(--color-text-primary)',
              opacity: 0.8,
              lineHeight: 1.8,
              margin: '0 0 3rem 0',
            }}
          >
            Mental Fitness Is The Skill No One Taught You, Until Now
          </motion.p>

          {/* ─── DESKTOP ARROW (≥ 1024px only) ────────────────────────────────
           *  Full D-curve: right after "Now" → arcs out right → tip lands at
           *  the button's right border. Only rendered after client-side mount
           *  to prevent hydration mismatches.
           * ─────────────────────────────────────────────────────────────────── */}
          {showArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '17px',
                right: '-154px',
                width: '400px',
                height: '134px',
                pointerEvents: 'none',
                zIndex: 10,
                color: 'var(--color-primary)',
                opacity: 0.65,
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                overflow="visible"
              >
                {/*
                 * Cubic bezier D-curve:
                 *   Start (245, 8)  — right after "Now" at text baseline
                 *   CP1   (370, 8) & CP2 (370, 92) — arc far right
                 *   End   (80, 92) — button right border at button midline
                 */}
                <path
                  d="M 245 8 C 370 8, 370 92, 80 92"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Arrowhead at (80, 92) pointing left */}
                <path
                  d="M 97 79 L 80 92 L 97 105"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}

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
              border: '1.5px solid #1a1a1a',
              color: '#1a1a1a',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ea7554';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1a1a';
            }}
            onClick={(e) => {
              e.preventDefault();
              setShowForm(true);
            }}
          >
            Book a discovery call
          </motion.a>

        </div>

      </div>
      {showForm && <DiscoveryForm onClose={() => setShowForm(false)} />}
    </section>
  );
}