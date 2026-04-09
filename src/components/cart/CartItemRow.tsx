'use client';

import Image from 'next/image';
import { useCartStore, type CartItem } from '@/store/cart';
import { getProductImageSrc } from '@/lib/utils';

interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const { product, quantity } = item;

  return (
    <div className="flex items-start gap-4 py-4 border-b border-neutral-100">
      <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-neutral-50">
        <Image
          src={getProductImageSrc(product.image)}
          alt={product.name}
          fill
          className="aspect-square object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-body text-neutral-800 leading-tight truncate">
          {product.name}
        </p>
        <p className="text-sm text-lazuli-gold mt-1">{product.salePrice}</p>

        <div className="flex items-center gap-1 mt-2">
          <button
            onClick={() => updateQuantity(product.slug, quantity - 1)}
            className="w-7 h-7 border border-neutral-200 text-sm flex items-center justify-center hover:border-lazuli-teal transition-colors"
            aria-label="Diminuir quantidade"
          >
            &minus;
          </button>
          <span className="w-8 text-center text-sm">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.slug, quantity + 1)}
            className="w-7 h-7 border border-neutral-200 text-sm flex items-center justify-center hover:border-lazuli-teal transition-colors"
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => removeItem(product.slug)}
        className="text-neutral-400 hover:text-red-500 transition-colors p-1 flex-shrink-0"
        aria-label="Remover item"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
