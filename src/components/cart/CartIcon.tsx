'use client';

import { useEffect, useState } from 'react';
import { useCartStore, getCartCount } from '@/store/cart';

export default function CartIcon() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const toggleCart = useCartStore((state) => state.toggleCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  const count = mounted ? getCartCount(items) : 0;

  return (
    <button
      onClick={toggleCart}
      className="relative p-2"
      aria-label="Abrir carrinho"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>

      {count > 0 && (
        <span
          key={count}
          className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-lazuli-gold text-white text-[10px] font-bold animate-cart-badge"
        >
          {count}
        </span>
      )}
    </button>
  );
}
