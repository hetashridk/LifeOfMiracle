"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { submitToSheets } from '../lib/submitToSheets';

interface GuestFormProps {
  onClose: () => void;
}

// Simple validation helpers
const isValidEmail = (email: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function GuestForm({ onClose }: GuestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    phone: '',
    company: '',
    weburl: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'This field is required';
      }
    });

    if (formData.name && formData.name.trim().length < 2) {
      newErrors.name = 'Valid name (at least 2 chars) is required';
    }

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.weburl && !isValidUrl(formData.weburl)) {
      newErrors.weburl = 'Invalid URL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitToSheets({
        type: 'guest',
        ...formData,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error', err);
      // keep the modal open so user can retry
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
        onClick={(e) => e.stopPropagation()}
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
              Your guest application has been received. We'll be in touch shortly.
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
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontSize: '1.5rem', fontWeight: 900, }}>
              Be The Guest
            </h2>
            <form onSubmit={handleSubmit}>
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'phone', label: 'Phone Number', type: 'tel' },
                { name: 'company', label: 'Company Name', type: 'text' },
                { name: 'weburl', label: 'Website URL', type: 'url' },
                { name: 'reason', label: 'Why do you want to be in the podcast ?', type: 'textarea' },
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: '0.75rem' }}>
                  <label
                    htmlFor={field.name}
                    style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-text-primary)' }}
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={4}
                      required
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(0,0,0,0.1)',
                      }}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type as any}
                      required
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(0,0,0,0.1)',
                      }}
                    />
                  )}
                  {errors[field.name] && (
                    <p style={{ color: 'var(--color-accent-coral)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
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
                >
                  Cancel
                </button>
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
                >
                  {submitting ? 'Submitting…' : 'Submit'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
