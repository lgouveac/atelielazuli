'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import MobileMenu from '@/components/layout/MobileMenu';
import CartIcon from '@/components/cart/CartIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/produtos/"
              className="text-xs tracking-widest uppercase text-neutral-600 hover:text-lazuli-teal transition-colors duration-300"
            >
              Produtos
            </Link>

            {/* Coleções dropdown */}
            <div className="relative group">
              <button className="text-xs tracking-widest uppercase text-neutral-600 hover:text-lazuli-teal transition-colors duration-300 py-4">
                Coleções
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white border border-neutral-100 rounded shadow-sm py-2 min-w-[160px]">
                  <Link
                    href="/colecoes/7-chakras/"
                    className="block px-5 py-2 text-sm text-neutral-600 hover:text-lazuli-teal hover:bg-neutral-50 transition-colors duration-300"
                  >
                    7 Chakras
                  </Link>
                  <Link
                    href="/colecoes/alva/"
                    className="block px-5 py-2 text-sm text-neutral-600 hover:text-lazuli-teal hover:bg-neutral-50 transition-colors duration-300"
                  >
                    ALVA
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/sobre/"
              className="text-xs tracking-widest uppercase text-neutral-600 hover:text-lazuli-teal transition-colors duration-300"
            >
              Sobre
            </Link>

            <Link
              href="/contato/"
              className="text-xs tracking-widest uppercase text-neutral-600 hover:text-lazuli-teal transition-colors duration-300"
            >
              Contato
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <CartIcon />

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
              className="md:hidden text-neutral-600 hover:text-neutral-800 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
