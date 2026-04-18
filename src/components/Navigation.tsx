"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import DiscoveryForm from './DiscoveryForm';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: scrolled ? 'rgba(249, 246, 242, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          zIndex: 50,
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem'
        }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Image
              src="/LOM logo.png"
              alt="Life of a Miracle Logo"
              width={250}
              height={60}
              style={{ objectFit: 'contain', height: '50px', width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {['Blog', 'Coaching', 'Workshop', 'Keynote'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Blog' ? '/blog' :
                      item === 'Coaching' ? '/coaching' :
                        item === 'Workshop' ? '/workshop' :
                          item === 'Keynote' ? '/keynote' :
                            `#${item.toLowerCase()}`
                  }
                  style={{
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
            <Button variant="accent" onClick={() => setShowForm(true)}>Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              zIndex: 60,
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'absolute',
                top: '80px',
                left: 0,
                right: 0,
                backgroundColor: 'var(--color-bg)',
                padding: '2rem 5%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                borderTop: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              {['Blog', 'Coaching', 'Workshop', 'Keynote'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Coaching' ? '/coaching' :
                      item === 'Workshop' ? '/workshop' :
                        item === 'Keynote' ? '/keynote' :
                          `#${item.toLowerCase()}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    paddingBottom: '0.5rem'
                  }}
                >
                  {item}
                </a>
              ))}
              <Button variant="accent" style={{ marginTop: '1rem' }} onClick={() => { setIsMobileMenuOpen(false); setShowForm(true); }}>Get Started</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {showForm && <DiscoveryForm onClose={() => setShowForm(false)} />}
    </>
  );
}
