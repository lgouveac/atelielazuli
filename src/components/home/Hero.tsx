'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BRAND } from '@/lib/constants';
import WavesDivider from '@/components/ocean/WavesDivider';
import OceanParticles from '@/components/ocean/OceanParticles';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from(titleRef.current, { y: 40, opacity: 0, duration: 1, ease: 'power3.out' })
      .from(taglineRef.current, { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-top relative overflow-hidden"
      style={{ backgroundImage: 'url(https://atelielazuli.com.br/wp-content/uploads/2024/12/Kimono-Luar-Prata1-600x799.webp)' }}>

      {/* Ocean gradient overlay instead of plain black */}
      <div className="absolute inset-0 ocean-gradient-hero" />

      {/* Floating particles */}
      <OceanParticles />

      <div className="relative z-10 text-center px-6">
        <h1 ref={titleRef} className="text-display-lg md:text-display-xl font-display text-white">
          {BRAND.name}
        </h1>
        <p ref={taglineRef} className="text-lg text-white/80 max-w-lg mx-auto font-light mt-6">
          {BRAND.tagline}
        </p>
        <a ref={ctaRef} href="#colecoes"
          className="inline-block mt-10 border border-white/60 text-white hover:bg-white hover:text-lazuli-navy transition-all duration-300 px-8 py-3 text-sm tracking-widest uppercase backdrop-blur-sm">
          Explorar Coleções
        </a>
      </div>

      {/* Wave at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WavesDivider color="#ffffff" />
      </div>
    </section>
  );
}
