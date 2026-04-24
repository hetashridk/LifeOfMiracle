'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitToSheets } from '@/lib/submitToSheets';

export default function CoachingForm({ dark = false }: { dark?: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isValidEmail = (email: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Valid name (at least 2 chars) is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.message.trim() || formData.message.trim().length < 5) newErrors.message = 'Message must be at least 5 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
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
    border: `1px solid ${focused === name ? 'rgba(234,117,84,0.6)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 10,
    outline: 'none',
    fontSize: '1rem',
    color: '#fff',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(234,117,84,0.1)' : 'none',
    boxSizing: 'border-box',
  }) : ({
    width: '100%',
    padding: '0.9rem 1.1rem',
    background: '#fff',
    border: `1.5px solid ${focused === name ? '#1a1a1a' : 'rgba(0,0,0,0.15)'}`,
    borderRadius: 14,
    outline: 'none',
    fontSize: '1rem',
    color: '#1a1a1a',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 4px rgba(0,0,0,0.07)' : 'none',
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
    color: 'rgba(0,0,0,0.5)',
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
          : { padding: '5rem 3rem', textAlign: 'center', background: '#fff', borderRadius: 40, border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }
        }
      >
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
          style={{ width: 80, height: 80, borderRadius: '50%', background: '#ea7554', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem' }}
        >
          <svg width="40" height="40" fill="none" stroke="#fff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: dark ? '#fff' : '#1a1a1a', marginBottom: '0.75rem' }}>Application Sent</h3>
        <p style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#444444', lineHeight: 1.7, maxWidth: 320, margin: '0 auto' }}>
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
            <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={{...fieldStyle('name'), borderColor: errors.name ? '#ea7554' : undefined}} />
            {errors.name && <p style={{ color: '#ea7554', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.name}</p>}
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={{...fieldStyle('email'), borderColor: errors.email ? '#ea7554' : undefined}} />
            {errors.email && <p style={{ color: '#ea7554', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</p>}
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={labelStyle}>Phone</label>
          <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={{...fieldStyle('phone'), borderColor: errors.phone ? '#ea7554' : undefined}} />
          {errors.phone && <p style={{ color: '#ea7554', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.phone}</p>}
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>Message or problem you're facing</label>
          <textarea name="message" rows={6} placeholder="Be specific. What's the pattern, the problem, the pressure?" required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...fieldStyle('message'), resize: 'none', borderColor: errors.message ? '#ea7554' : undefined }} />
          {errors.message && <p style={{ color: '#ea7554', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.message}</p>}
        </div>
        <motion.button
          type="submit"
          disabled={loading}
          className="btn-submit"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
          style={{ width: '100%', padding: '1.2rem 3rem', background: '#ea7554', color: '#fff', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.5px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontFamily: 'inherit', transition: 'background 0.2s' }}
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
      style={{ background: '#fff', padding: '2.5rem', borderRadius: 40, boxShadow: '0 24px 60px rgba(0,0,0,0.09)', border: '1px solid rgba(0,0,0,0.1)' }}
    >
      <div style={{ marginBottom: '2rem', paddingBottom: '1.75rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1a1a1a' }}>Tell me about yourself</h3>
        <p style={{ color: '#444444', fontSize: '0.9rem', marginTop: '0.4rem' }}>Everything here is read personally. Be real.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={{...fieldStyle('name'), borderColor: errors.name ? 'var(--color-accent-coral)' : undefined}} />
          {errors.name && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.name}</p>}
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" placeholder="hello@you.com" required value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={{...fieldStyle('email'), borderColor: errors.email ? 'var(--color-accent-coral)' : undefined}} />
          {errors.email && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</p>}
        </div>
      </div>

      <div style={{ marginBottom: '1.25rem' }}>
        <label style={labelStyle}>Phone Number</label>
        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={{...fieldStyle('phone'), borderColor: errors.phone ? 'var(--color-accent-coral)' : undefined}} />
        {errors.phone && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.phone}</p>}
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <label style={labelStyle}>Message or problem you're facing</label>
        <textarea name="message" rows={6} placeholder="Describe the problem or pattern you're facing." required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...fieldStyle('message'), resize: 'none', borderColor: errors.message ? 'var(--color-accent-coral)' : undefined }} />
        {errors.message && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        className="btn-submit"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.975 }}
        style={{ width: '100%', padding: '1.2rem 3rem', background: '#ea7554', color: '#fff', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.5px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontFamily: 'inherit', transition: 'background 0.2s' }}
      >
        {loading ? 'Submitting…' : 'Submit My Application'}
        {!loading && <span>→</span>}
      </motion.button>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'rgba(0,0,0,0.4)', marginTop: '1.25rem' }}>
        By submitting, you agree to our privacy policy. Your info stays private — always.
      </p>
    </motion.form>
  );
}
