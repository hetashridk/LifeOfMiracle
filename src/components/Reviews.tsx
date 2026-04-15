"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Review = {
  id: string,
  type: 'text' | 'video';
  videoUrl?: string;
  color: string;
};

const reviews: Review[] = [
  { id: '1', type: 'video', videoUrl: '/Testimonal_1.mp4', color: 'var(--color-accent-mustard)' },
  { id: '2', type: 'video', videoUrl: '/Testimonal_2.mp4', color: 'var(--color-accent-mustard)' },
  { id: '3', type: 'video', videoUrl: '/Testimonal_3.mp4', color: 'var(--color-accent-mustard)' },
  { id: '4', type: 'video', videoUrl: '/Testimonal_4.mp4', color: 'var(--color-accent-mustard)' },
  { id: '5', type: 'video', videoUrl: '/Testimonal_5.mp4', color: 'var(--color-accent-mustard)' },
  { id: '6', type: 'video', videoUrl: '/Testimonal_6.mp4', color: 'var(--color-accent-mustard)' },
  { id: '7', type: 'video', videoUrl: '/Testimonal_7.mp4', color: 'var(--color-accent-mustard)' },
  { id: '8', type: 'video', videoUrl: '/Testimonal_8.mp4', color: 'var(--color-accent-mustard)' },
  { id: '9', type: 'video', videoUrl: '/Testimonal_9.mp4', color: 'var(--color-accent-mustard)' },
  { id: '10', type: 'video', videoUrl: '/Testimonal_10.mp4', color: 'var(--color-accent-mustard)' },
  { id: '11', type: 'video', videoUrl: '/Testimonal_11.mp4', color: 'var(--color-accent-mustard)' },
  { id: '12', type: 'video', videoUrl: '/Testimonal_12.mp4', color: 'var(--color-accent-mustard)' },
];

export function Reviews() {
  const videoReviews = reviews.filter(r => r.type === 'video');
  const videoScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount =
        direction === 'left'
          ? -ref.current.offsetWidth * 0.8
          : ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="reviews"
      style={{
        padding: 'var(--spacing-section) 5%',
        backgroundColor: 'var(--color-bg)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '3.5rem',
              margin: '1rem 0',
              fontFamily: 'var(--font-karla)',
              color: 'var(--color-primary)',
            }}
          >
            Client Stories
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Hear directly from the leaders and entrepreneurs who have transformed their lives and businesses.
          </p>
        </div>

        {/* Carousel */}
        {videoReviews.length > 0 && (
          <div style={{ marginBottom: '6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => scroll(videoScrollRef, 'left')} style={btnStyle}>
                  <ChevronLeft />
                </button>
                <button onClick={() => scroll(videoScrollRef, 'right')} style={btnStyle}>
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div
              ref={videoScrollRef}
              className="hide-scrollbar"
              style={{
                display: 'flex',
                gap: '2.5rem',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                paddingBottom: '2rem',
              }}
            >
              {videoReviews.map((rev, i) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={cardStyle}
                >
                  <video
                    src={rev.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.muted = false;
                      e.currentTarget.controls = true;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.controls = false;
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* styles unchanged */
const btnStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  color: 'var(--color-primary)',
  transition: 'transform 0.2s',
};

const cardStyle = {
  flex: '0 0 auto',
  width: 'calc(100vw - 10%)',
  maxWidth: '360px',
  scrollSnapAlign: 'start',
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  aspectRatio: '4/5',
  position: 'relative' as const,
  cursor: 'pointer',
};