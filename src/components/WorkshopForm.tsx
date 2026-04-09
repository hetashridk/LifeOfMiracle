'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WorkshopForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', datetime: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Workshop Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany / College: ${formData.company}\nPreferred Date & Time: ${formData.datetime}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const field = (name: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.95rem 1.15rem',
    background: '#fff',
    border: `1.5px solid ${focused === name ? '#165b74' : 'rgba(22,91,116,0.14)'}`,
    borderRadius: 10,
    outline: 'none',
    fontSize: '1rem',
    color: '#165b74',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 4px rgba(22,91,116,0.06)' : 'none',
    boxSizing: 'border-box',
  });

  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '0.6rem',
    fontWeight: 900,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: 'rgba(22,91,116,0.45)',
    marginBottom: '0.5rem',
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        style={{ padding: '4rem 2rem', textAlign: 'center' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
          style={{ width: 72, height: 72, borderRadius: '50%', background: '#3b9b6d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}
        >
          <svg width="36" height="36" fill="none" stroke="#fff" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#165b74', marginBottom: '0.6rem' }}>Enquiry Sent</h3>
        <p style={{ color: '#a67358', lineHeight: 1.7, maxWidth: 300, margin: '0 auto' }}>
          Your email client is opening now. We'll be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1.25rem' }}>
        <div>
          <label style={label}>Name</label>
          <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={field('name')} />
        </div>
        <div>
          <label style={label}>Email</label>
          <input type="email" name="email" placeholder="your@email.com" required value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={field('email')} />
        </div>
      </div>

      {/* Phone + Company */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1.25rem' }}>
        <div>
          <label style={label}>Phone</label>
          <input type="tel" name="phone" placeholder="+91 00000 00000" required value={formData.phone} onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={field('phone')} />
        </div>
        <div>
          <label style={label}>Company / College Name</label>
          <input type="text" name="company" placeholder="Your organisation" required value={formData.company} onChange={handleChange} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} style={field('company')} />
        </div>
      </div>

      {/* Date & Time */}
      <div>
        <label style={label}>Preferred Date &amp; Time</label>
        <input type="text" name="datetime" placeholder="e.g. 15 Aug, 10:00 AM" value={formData.datetime} onChange={handleChange} onFocus={() => setFocused('datetime')} onBlur={() => setFocused(null)} style={field('datetime')} />
      </div>

      {/* Message */}
      <div>
        <label style={label}>Message</label>
        <textarea name="message" rows={5} placeholder="Tell us about your team or institution, and what you're looking for." required value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...field('message'), resize: 'none' }} />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.975 }}
        style={{
          width: '100%', padding: '1.1rem',
          background: '#165b74', color: '#fff',
          fontWeight: 900, fontSize: '0.9rem', letterSpacing: '1.5px', textTransform: 'uppercase',
          borderRadius: 10, border: 'none', cursor: 'pointer',
          boxShadow: '0 10px 28px rgba(22,91,116,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
          fontFamily: 'inherit',
        }}
      >
        Send Enquiry →
      </motion.button>

      <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(22,91,116,0.3)', letterSpacing: '0.4px' }}>
        Your information stays private — always.
      </p>
    </form>
  );
}
