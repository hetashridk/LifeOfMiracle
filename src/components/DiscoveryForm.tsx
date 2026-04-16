"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { submitToSheets } from '../lib/submitToSheets';

interface DiscoveryFormProps {
  onClose: () => void;
}

const isValidEmail = (email: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

export default function DiscoveryForm({ onClose }: DiscoveryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Valid name (at least 2 chars) is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email address';

    // Custom phone validation: must be digits, spaces, hyphens, plus, parens, 7-15 chars
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s\-\+\(\)]{7,15}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';

    if (!formData.service) newErrors.service = 'Please select a service';

    if (!formData.message.trim() || formData.message.trim().length < 5) newErrors.message = 'Message must be at least 5 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitToSheets({
        type: 'discovery',
        ...formData,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--color-bg)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          width: 'min(500px, 90%)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: 60, height: 60, borderRadius: '50%', background: '#3b9b6d',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem'
              }}
            >
              <svg width="30" height="30" fill="none" stroke="#fff" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              Thank You!
            </h3>
            <p style={{ color: 'var(--color-text-primary)', marginBottom: '2rem' }}>
              Your discovery call request has been received. We'll be in touch shortly.
            </p>
            <button
              onClick={onClose}
              style={{
                backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none',
                padding: '0.75rem 2rem', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 900, }}>Book a Discovery Call</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}>Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }}
                />
                {errors.name && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.85rem' }}>{errors.name}</p>}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }}
                />
                {errors.email && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.85rem' }}>{errors.email}</p>}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}>Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }}
                />
                {errors.phone && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.85rem' }}>{errors.phone}</p>}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="service" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}>Service</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: '#fff' }}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="1:1 Coaching">1:1 Coaching</option>
                  <option value="Workshops">Workshops</option>
                  <option value="Keynote Speaking">Keynote Speaking</option>
                </select>
                {errors.service && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.85rem' }}>{errors.service}</p>}
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', resize: 'none' }}
                />
                {errors.message && <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.85rem' }}>{errors.message}</p>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                  style={{
                    background: 'transparent',
                    border: '2px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                  }}
                >Cancel</button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    border: 'none',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                  }}
                >{submitting ? 'Submitting…' : 'Submit'}</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
