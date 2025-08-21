import React from 'react';

export default function KnightRoBanner() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #0a1a2f, #1c2e4a) ',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        position: 'relative',
      }}
    >
      {/* Knight Emblem Image */}
      <img
        src="/images/knight-emblem.png" // Place your image in public/images/
        alt="Knight Emblem"
        style={{ width: 100, height: 100, marginBottom: 16 }}
      />

      {/* Title */}
      <h1 style={{ fontSize: 28, marginBottom: 8, textAlign: 'center' }}>
        KNIGHT-RO EXHIBITION
      </h1>

      {/* Subtitle */}
      <p style={{ fontSize: 16, color: '#ccc', textAlign: 'center', marginBottom: 32 }}>
        EXHIBITION NAVIGATION SUPPORT APPLICATION
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 16 }}>
        <button style={buttonStyle}>SCAN QR CODE</button>
        <button style={buttonStyle}>EXPLORE ZONES</button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: 'white',
  color: '#0a1a2f',
  border: 'none',
  padding: '12px 20px',
  borderRadius: 8,
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
};