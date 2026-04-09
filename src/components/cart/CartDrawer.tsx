'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore, getCartTotal, getCartCount, formatPrice } from '@/store/cart';
import CartItemRow from './CartItemRow';

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) return null;

  const count = getCartCount(items);
  const total = getCartTotal(items);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-lg text-lazuli-navy">
              Seu Carrinho
            </h2>
            {count > 0 && (
              <span className="text-xs text-neutral-500 font-body">
                ({count} {count === 1 ? 'item' : 'itens'})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-neutral-400 hover:text-neutral-700 transition-colors"
            aria-label="Fechar carrinho"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <p className="text-neutral-500 font-body text-sm mb-6">
                Seu carrinho está vazio
              </p>
              <Link
                href="/colecoes/"
                onClick={closeCart}
                className="text-sm text-lazuli-teal underline underline-offset-4 hover:text-lazuli-navy transition-colors font-body"
              >
                Explorar coleções
              </Link>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <CartItemRow key={item.product.slug} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-body text-neutral-600">
                Subtotal
              </span>
              <span className="text-base font-display text-lazuli-navy">
                {formatPrice(total)}
              </span>
            </div>

            <Link
              href="/checkout/"
              onClick={closeCart}
              className="block w-full text-center bg-lazuli-navy text-white py-3 text-sm tracking-wide uppercase hover:bg-lazuli-ocean-deep transition-colors duration-300"
            >
              Finalizar Compra
            </Link>

            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-neutral-500 hover:text-lazuli-navy transition-colors font-body"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </>
  );
}
