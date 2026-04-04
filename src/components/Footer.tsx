import React from 'react';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-primary)',
      color: '#fff',
      padding: '5rem 5% 2rem',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Brand Col */}
          <div style={{ flex: '1.5', minWidth: '250px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-accent-mustard)', marginBottom: '1rem' }}>
              Life of a Miracle
            </div>
            <p style={{ opacity: 0.8, lineHeight: 1.6, maxWidth: '350px' }}>
              Mental fitness for modern minds. I help leaders and individuals build clarity, courage, and calm through psychology and conscious practices.
            </p>
          </div>

          {/* Links Col */}
          <div style={{ flex: '1', minWidth: '150px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-accent-mustard)', fontFamily: 'var(--font-heading)' }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
              <li><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#podcast" style={{ color: '#fff', textDecoration: 'none' }}>Podcast</a></li>
              <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>

          {/* Connect Col */}
          <div style={{ flex: '1', minWidth: '150px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-accent-mustard)', fontFamily: 'var(--font-heading)' }}>Connect</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a></li>
              <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Spotify</a></li>
            </ul>
          </div>

        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          fontSize: '0.875rem', 
          opacity: 0.7 
        }}>
          <div>© {new Date().getFullYear()} Life of a Miracle. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
