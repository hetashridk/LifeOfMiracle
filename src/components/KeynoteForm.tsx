'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function KeynoteForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', datetime: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Keynote / Guest Speaking Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany / Organisation: ${formData.company}\nPreferred Date & Time: ${formData.datetime}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.9rem 1.1rem',
    background: '#fff',
    border: `1.5px solid ${focused === name ? '#165b74' : 'rgba(22,91,116,0.15)'}`,
    borderRadius: 14,
    outline: 'none',
    fontSize: '1rem',
    color: '#165b74',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 4px rgba(22,91,116,0.07)' : 'none',
    boxSizing: 'border-box',
  });

  const labelStyle: React.CSSProperties = {
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
        style={{ padding: '5rem 3rem', textAlign: 'center', background: '#fff', borderRadius: 40, border: '1px solid rgba(22,91,116,0.1)', boxShadow: '0 24px 60px rgba(22,91,116,0.08)' }}
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
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#165b74', marginBottom: '0.75rem' }}>Enquiry Sent</h3>
        <p style={{ color: '#a67358', lineHeight: 1.7, maxWidth: 320, margin: '0 auto' }}>
          Your email client is opening now. We'll be in touch shortly.
        </p>
      </motion.div>
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
      {/* Header */}
      <div style={{ marginBottom: '2rem', paddingBottom: '1.75rem', borderBottom: '1px solid rgba(22,91,116,0.08)' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#165b74' }}>Book a Keynote</h3>
        <p style={{ color: '#a67358', fontSize: '0.9rem', marginTop: '0.4rem' }}>Tell us about your event and we'll be in touch.</p>
      </div>

      {/* Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={fieldStyle('name')} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" placeholder="hello@you.com" required value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={fieldStyle('email')} />
        </div>
      </div>

      {/* Phone + Company */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={labelStyle}>Phone</label>
          <input type="tel" name="phone" placeholder="+91 00000 00000" required value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={fieldStyle('phone')} />
        </div>
        <div>
          <label style={labelStyle}>Company / Organisation</label>
          <input type="text" name="company" placeholder="Your organisation" required value={formData.company} onChange={handleChange} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} style={fieldStyle('company')} />
        </div>
      </div>

      {/* Date & Time */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Preferred Date &amp; Time</label>
        <input type="text" name="datetime" placeholder="e.g. 20 Sep, 11:00 AM" value={formData.datetime} onChange={handleChange} onFocus={() => setFocused('datetime')} onBlur={() => setFocused(null)} style={fieldStyle('datetime')} />
      </div>

      {/* Message */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={labelStyle}>Message</label>
        <textarea name="message" rows={4} placeholder="Tell us about your event, audience size, and what you're looking for." required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...fieldStyle('message'), resize: 'none' }} />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.975 }}
        style={{
          width: '100%',
          padding: '1.1rem',
          background: '#f27552',
          color: '#fff',
          fontWeight: 900,
          fontSize: '1.05rem',
          borderRadius: 18,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 12px 32px rgba(242,117,82,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          fontFamily: 'inherit',
          transition: 'background 0.2s',
        }}
      >
        Send Enquiry
        <span>→</span>
      </motion.button>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'rgba(166,115,88,0.5)', marginTop: '1.25rem' }}>
        By submitting, you agree to our privacy policy. Your info stays private — always.
      </p>
    </motion.form>
  );
}
