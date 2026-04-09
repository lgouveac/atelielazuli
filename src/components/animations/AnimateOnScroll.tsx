'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Animation = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
}

const animationPresets: Record<Animation, gsap.TweenVars> = {
  fadeUp: { y: 40, opacity: 0 },
  fadeIn: { opacity: 0 },
  slideLeft: { x: -60, opacity: 0 },
  slideRight: { x: 60, opacity: 0 },
  scale: { scale: 0.9, opacity: 0 },
};

export default function AnimateOnScroll({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...animationPresets[animation],
        delay,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
