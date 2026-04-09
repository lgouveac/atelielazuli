'use client';

import { useState } from 'react';
import { useCartStore, type CartProduct } from '@/store/cart';

interface AddToCartButtonProps {
  product: CartProduct;
  disabled?: boolean;
}

export default function AddToCartButton({
  product,
  disabled = false,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    if (disabled || added) return;

    addItem(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  if (disabled) {
    return (
      <button
        disabled
        className="w-full bg-neutral-200 text-neutral-500 cursor-not-allowed py-3 px-8 text-sm tracking-wide uppercase"
      >
        Indisponível
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="w-full bg-lazuli-navy text-white hover:bg-lazuli-ocean-deep py-3 px-8 text-sm tracking-wide uppercase transition-all duration-300"
    >
      {added ? (
        <span className="inline-flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Adicionado!
        </span>
      ) : (
        'Adicionar ao Carrinho'
      )}
    </button>
  );
}
