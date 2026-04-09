'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';
import ProductImage from './ProductImage';
import StockBadge from './StockBadge';
import { useCartStore } from '@/store/cart';

interface ProductCardWithCartProps {
  product: Product;
}

export default function ProductCardWithCart({ product }: ProductCardWithCartProps) {
  const isOutOfStock = product.status === 'out_of_stock';
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock || added) return;

    addItem({
      slug: product.slug,
      name: product.name,
      salePrice: product.salePrice,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isOnSale = product.originalPrice !== product.salePrice;

  return (
    <div className="group">
      <Link href={`/produto/${product.slug}/`} className="block">
        {/* Image with hover swap + overlay */}
        <div className="relative overflow-hidden">
          <ProductImage
            image={product.image}
            hoverImage={product.hoverImage}
            name={product.name}
            className={cn(isOutOfStock && 'opacity-60')}
          />
          <StockBadge status={product.status} />

          {/* Hover overlay with add-to-cart */}
          {!isOutOfStock && (
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-10">
              <button
                onClick={handleAddToCart}
                className={cn(
                  'w-full py-3.5 text-[11px] tracking-[0.2em] uppercase font-body transition-colors duration-300 flex items-center justify-center gap-2.5',
                  added
                    ? 'bg-lazuli-navy text-white'
                    : 'bg-white/95 backdrop-blur-sm text-neutral-800 hover:bg-lazuli-navy hover:text-white'
                )}
              >
                {added ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Adicionado
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Adicionar
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="mt-4 space-y-1.5">
          <h3 className="text-[13px] tracking-wide font-body text-neutral-700 group-hover:text-lazuli-navy transition-colors duration-300">
            {product.name}
          </h3>
          <div className="font-body">
            {isOnSale ? (
              <div className="flex items-center gap-2.5">
                <span className="text-[12px] text-neutral-400 line-through">{product.originalPrice}</span>
                <span className="text-[13px] text-neutral-800">{product.salePrice}</span>
              </div>
            ) : (
              <span className="text-[13px] text-neutral-800">{product.salePrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
