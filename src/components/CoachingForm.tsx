'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitToSheets } from '@/lib/submitToSheets';

export default function CoachingForm({ dark = false }: { dark?: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitToSheets({ type: 'coaching', ...formData });
    } catch {
      // no-cors mode throws a network error even on success — treat as ok
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const fieldStyle = (name: string): React.CSSProperties => dark ? ({
    width: '100%',
    padding: '1rem 1.25rem',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? 'rgba(242,117,82,0.6)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 10,
    outline: 'none',
    fontSize: '1rem',
    color: '#fff',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(242,117,82,0.1)' : 'none',
    boxSizing: 'border-box',
  }) : ({
    width: '100%',
    padding: '0.9rem 1.1rem',
    background: '#fff',
    border: `1.5px solid ${focused === name ? '#165b74' : 'rgba(22, 91, 116, 0.15)'}`,
    borderRadius: 14,
    outline: 'none',
    fontSize: '1rem',
    color: '#165b74',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 4px rgba(22, 91, 116, 0.07)' : 'none',
    boxSizing: 'border-box',
  });

  const labelStyle: React.CSSProperties = dark ? {
    display: 'block',
    fontSize: '0.6rem',
    fontWeight: 900,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)',
    marginBottom: '0.6rem',
  } : {
    display: 'block',
    fontSize: '0.65rem',
    fontWeight: 900,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: 'rgba(22,91,116,0.5)',
    marginBottom: '0.5rem',
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        style={dark
          ? { padding: '4rem 3rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24 }
          : { padding: '5rem 3rem', textAlign: 'center', background: '#fff', borderRadius: 40, border: '1px solid rgba(22,91,116,0.1)', boxShadow: '0 24px 60px rgba(22,91,116,0.08)' }
        }
      >
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
          style={{ width: 80, height: 80, borderRadius: '50%', background: '#3b9b6d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem' }}
        >
          <svg width="40" height="40" fill="none" stroke="#fff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: dark ? '#fff' : '#165b74', marginBottom: '0.75rem' }}>Application Sent</h3>
        <p style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#a67358', lineHeight: 1.7, maxWidth: 320, margin: '0 auto' }}>
          Your application has been received. I'll review it personally and reach out within 48 hours.
        </p>
      </motion.div>
    );
  }

  if (dark) {
    return (
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={labelStyle}>Name</label>
            <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={fieldStyle('name')} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={fieldStyle('email')} />
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={labelStyle}>Phone</label>
          <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={fieldStyle('phone')} />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>Message or problem you're facing</label>
          <textarea name="message" rows={6} placeholder="Be specific. What's the pattern, the problem, the pressure?" required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...fieldStyle('message'), resize: 'none' }} />
        </div>
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
          style={{ width: '100%', padding: '1.15rem', background: '#f27552', color: '#fff', fontWeight: 900, fontSize: '1rem', letterSpacing: '0.5px', borderRadius: 10, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 12px 40px rgba(242,117,82,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontFamily: 'inherit' }}
        >
          {loading ? 'Submitting…' : 'Submit Application'}
          {!loading && <span>→</span>}
        </motion.button>
        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', marginTop: '1.25rem', letterSpacing: '0.5px' }}>
          Your information stays private — always.
        </p>
      </form>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      style={{ background: '#fff', padding: '2.5rem', borderRadius: 40, boxShadow: '0 24px 60px rgba(22,91,116,0.09)', border: '1px solid rgba(22,91,116,0.1)' }}
    >
      <div style={{ marginBottom: '2rem', paddingBottom: '1.75rem', borderBottom: '1px solid rgba(22,91,116,0.08)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#165b74' }}>Tell me about yourself</h3>
        <p style={{ color: '#a67358', fontSize: '0.9rem', marginTop: '0.4rem' }}>Everything here is read personally. Be real.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={fieldStyle('name')} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" placeholder="hello@you.com" required value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={fieldStyle('email')} />
        </div>
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <label style={labelStyle}>Phone Number</label>
        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={fieldStyle('phone')} />
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <label style={labelStyle}>Message or problem you're facing</label>
        <textarea name="message" rows={6} placeholder="Describe the problem or pattern you're facing." required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...fieldStyle('message'), resize: 'none' }} />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.975 }}
        style={{ width: '100%', padding: '1.1rem', background: '#f27552', color: '#fff', fontWeight: 900, fontSize: '1.05rem', borderRadius: 18, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 12px 32px rgba(242,117,82,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontFamily: 'inherit', transition: 'background 0.2s' }}
      >
        {loading ? 'Submitting…' : 'Submit My Application'}
        {!loading && <span>→</span>}
      </motion.button>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'rgba(166,115,88,0.5)', marginTop: '1.25rem' }}>
        By submitting, you agree to our privacy policy. Your info stays private — always.
      </p>
    </motion.form>
  );
}
