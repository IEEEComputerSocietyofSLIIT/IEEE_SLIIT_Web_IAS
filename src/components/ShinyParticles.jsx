import React, { useMemo } from 'react';
import './ShinyParticles.css';

const COLORS = ['#3b82f6', '#ef4444', '#a78bfa']; // blue, red, purple

// Create a particle with randomized properties
const makeParticle = (index) => {
  const left = Math.random() * 100; // percent
  const size = 2 + Math.random() * 6; // 2px - 8px (tiny sparkles)
  const delay = Math.random() * 4; // stagger start (shorter)
  const duration = 4 + Math.random() * 6; // 4s - 10s
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const spin = Math.random() > 0.5 ? 'cw' : 'ccw';
  const bezier = [
    0.25 + Math.random() * 0.5,
    0.1 + Math.random() * 0.6,
    0.25 + Math.random() * 0.5,
    0.9,
  ];

  return { id: index, left, size, delay, duration, color, spin, bezier };
};

// Renders diamond-shaped glowing sparkles (not circles)
const ShinyParticles = ({ count = 30, className = '', fixed = false }) => {
  const particles = useMemo(() => Array.from({ length: count }, (_, i) => makeParticle(i)), [count]);

  // fixed: whether the particle container should use full-screen fixed positioning
  // when false, the parent can position it (e.g. absolute inside a relative wrapper)
  return (
    <div className={`shiny-particles ${fixed ? 'fixed' : ''} ${className}`} aria-hidden>
      {particles.map((p) => (
        <i
          key={p.id}
          className={`particle ${p.spin}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            filter: 'blur(0.6px) drop-shadow(0 0 8px ' + p.color + ')',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ['--bezier']: `${p.bezier.join(',')}`,
          }}
        />
      ))}
    </div>
  );
};

export default ShinyParticles;
