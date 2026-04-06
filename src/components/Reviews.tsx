"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Review = {
  type: 'text' | 'video';
  name: string;
  title: string;
  text?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  color: string;
};

const reviews: Review[] = [
  {
    type: 'text',
    name: 'Sarah J.',
    title: 'Startup Founder',
    text: 'Working with her was a complete game-changer! She creates a supportive, judgment-free space for open and honest conversations.',
    color: 'var(--color-primary)',
  },
  {
    type: 'video',
    name: 'David L.',
    title: 'Tech Entrepreneur',
    text: 'The coaching sessions have completely transformed my approach to leadership. Highly recommended for anyone wanting to scale.',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    color: 'var(--color-accent-coral)',
  },
  {
    type: 'video',
    name: 'Emily R.',
    title: 'Design Director',
    text: 'Every single call gave me actionable insights. Her coaching style is deeply intuitive and results-driven.',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    color: 'var(--color-accent-mustard)',
  },
  {
    type: 'text',
    name: 'Michael T.',
    title: 'CEO',
    text: 'A phenomenal coach who takes you deep into the problem... I have gone through tremendous professional and spiritual growth.',
    color: 'var(--color-accent-magenta)',
  },
  {
    type: 'text',
    name: 'Priya R.',
    title: 'Executive',
    text: 'Her sessions added immense value to my life. I feel a sense of deep calmness and peace like never before.',
    color: 'var(--color-accent-emerald)',
  },
  {
    type: 'text',
    name: 'James H.',
    title: 'Creative Lead',
    text: 'Working with her brought overwhelming clarity. The breakthroughs I had in just a few months were extraordinary.',
    color: 'var(--color-accent-coral)',
  }
];

export function Reviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoReviews = reviews.filter(r => r.type === 'video');
  const textReviews = reviews.filter(r => r.type === 'text');

  const videoScrollRef = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -ref.current.offsetWidth * 0.8 : ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" style={{
      padding: 'var(--spacing-section) 5%',
      backgroundColor: 'var(--color-bg)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', margin: '1rem 0', fontFamily: 'var(--font-karla)', color: 'var(--color-primary)' }}>Client Stories</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Hear directly from the leaders and entrepreneurs who have transformed their lives and businesses.
          </p>
        </div>

        {/* Video Reviews Carousel */}
        {videoReviews.length > 0 && (
          <div style={{ marginBottom: '6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                Watch Their Journeys
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => scroll(videoScrollRef, 'left')}
                  style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-primary)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={() => scroll(videoScrollRef, 'right')}
                  style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-primary)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
            
            <div 
              ref={videoScrollRef}
              className="hide-scrollbar"
              style={{ display: 'flex', gap: '2.5rem', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '2rem' }}
            >
              {videoReviews.map((rev, i) => (
                <motion.div
                  key={rev.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={{
                    flex: '0 0 auto',
                    width: 'calc(100vw - 10%)',
                    maxWidth: '450px',
                    scrollSnapAlign: 'start',
                    backgroundColor: '#fff',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.03)'
                  }}
                >
                  <div 
                    style={{
                      aspectRatio: '16/9',
                      position: 'relative',
                      backgroundImage: `url(${rev.thumbnailUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => rev.videoUrl && setActiveVideo(rev.videoUrl)}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease'
                    }}>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: '80px', height: '80px', 
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}
                      >
                        <Play size={36} color={rev.color} fill={rev.color} style={{ marginLeft: '6px' }} />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: '2rem', color: rev.color, lineHeight: 0.5, marginBottom: '1rem' }}>"</div>
                    <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--color-primary)', flex: 1, lineHeight: 1.5 }}>
                      {rev.text}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                      <div style={{
                        width: '50px', height: '50px', borderRadius: '50%', backgroundColor: rev.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem'
                      }}>
                        {rev.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-primary)' }}>{rev.name}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{rev.title}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Text Reviews Carousel */}
        {textReviews.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                Read More Experiences
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => scroll(textScrollRef, 'left')}
                  style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-primary)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={() => scroll(textScrollRef, 'right')}
                  style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-primary)', transition: 'transform 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            <div 
              ref={textScrollRef}
              className="hide-scrollbar"
              style={{ display: 'flex', gap: '2rem', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '2rem' }}
            >
              {textReviews.map((rev, i) => (
                <motion.div
                  key={rev.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="responsive-padding"
                  style={{
                    flex: '0 0 auto',
                    width: 'calc(100vw - 10%)',
                    maxWidth: '380px',
                    scrollSnapAlign: 'start',
                    backgroundColor: '#fff',
                    color: 'var(--color-primary)',
                    padding: '3rem 2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.02)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ fontSize: '3rem', color: rev.color, lineHeight: 0.5, marginTop: '1rem' }}>"</div>
                    <p style={{ fontStyle: 'italic', fontSize: '1.25rem', flex: 1, lineHeight: 1.6, display: 'flex', flexDirection: 'column' }}>
                      {rev.text}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '2rem' }}>
                      <div style={{
                        width: '60px', height: '60px', borderRadius: '50%', backgroundColor: rev.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem'
                      }}>
                        {rev.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{rev.name}</div>
                        <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>{rev.title}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setActiveVideo(null)}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '2rem', right: '2rem',
                color: '#fff',
                cursor: 'pointer',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px', height: '50px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <X size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '16/9',
                backgroundColor: '#000',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
