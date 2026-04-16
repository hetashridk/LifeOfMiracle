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
      backgroundColor: 'var(--color-bg)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '2rem', // ✅ reduced
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

      <form onSubmit={handleSubmit} style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(0,0,0,0.1)',
            minWidth: '250px',
          }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-pill)',
            cursor: 'pointer',
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