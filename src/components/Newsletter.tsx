"use client";

import React, { useState, FormEvent } from 'react';
import { submitToSheets } from '../lib/submitToSheets';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const isValidEmail = (value: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setStatus('submitting');
    try {
      await submitToSheets({ type: 'newsletter', email });
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section style={{
      padding: '1.5rem 0 0', // ✅ FIXED (was too large)
      backgroundColor: 'transparent',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
        fontFamily: 'var(--font-karla)',
        color: 'var(--color-primary)',
        marginBottom: '1rem',
      }}>
        Stay Updated
      </h2>

      <p style={{
        color: 'var(--color-text-primary)',
        marginBottom: '1rem', // ✅ tightened
        fontSize: '1.125rem',
      }}>
        Subscribe to our newsletter for the latest blogs, podcasts, and events.
      </p>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
      }}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(0,0,0,0.1)',
            flex: '1 1 180px',   /* grows/shrinks, wraps below button if too narrow */
            minWidth: '0',
            width: '100%',
          }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-subscribe"
          style={{
            backgroundColor: 'var(--color-accent-coral)',
            color: '#fff',
            border: 'none',
            padding: '1.2rem 3rem',
            borderRadius: 'var(--radius-pill)',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'all 0.25s ease',
          }}
        >
          {status === 'submitting' ? 'Submitting…' : 'Subscribe'}
        </button>
      </form>

      {error && <p style={{ color: 'var(--color-accent-coral)', marginTop: '0.5rem' }}>{error}</p>}
      {status === 'success' && <p style={{ color: 'var(--color-accent-coral)', marginTop: '0.5rem' }}>Thank you for subscribing!</p>}
    </section>
  );
}