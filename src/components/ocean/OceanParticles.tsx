'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PARTICLE_COUNT = 18;

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.2,
  }));
}

export default function OceanParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>(generateParticles());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;

    gsap.to(Array.from(children), {
      y: () => -(30 + Math.random() * 50),
      x: () => (Math.random() - 0.5) * 40,
      duration: () => 4 + Math.random() * 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { each: 0.3 },
    });

    return () => {
      gsap.killTweensOf(Array.from(children));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {particlesRef.current.map((particle, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: 'white',
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}
