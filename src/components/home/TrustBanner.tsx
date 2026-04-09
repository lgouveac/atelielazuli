'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const benefits = [
  { icon: 'truck', text: 'Frete grátis acima de R$ 500' },
  { icon: 'hand', text: 'Feito à mão para você' },
  { icon: 'shield', text: 'Compra segura' },
  { icon: 'star', text: 'Qualidade garantida' },
  { icon: 'pix', text: '5% de desconto no PIX' },
];

const icons: Record<string, React.ReactNode> = {
  truck: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  hand: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1M14 7V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v4M10 8V3a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7" /><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.7-2.4L3.2 15.8A2 2 0 0 1 6 13l2 2" />
    </svg>
  ),
  shield: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  star: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  pix: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

export default function TrustBanner() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => { tween.kill(); };
  }, []);

  return (
    <div className="bg-lazuli-navy overflow-hidden">
      <div ref={trackRef} className="flex whitespace-nowrap py-3">
        {benefits.map((b, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white/70 text-[11px] tracking-[0.15em] uppercase font-body mx-8 flex-shrink-0"
          >
            <span className="text-lazuli-gold">{icons[b.icon]}</span>
            {b.text}
          </span>
        ))}
      </div>
    </div>
  );
}
