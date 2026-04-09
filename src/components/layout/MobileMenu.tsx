'use client';

import Link from 'next/link';
import { BRAND } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="text-neutral-500 hover:text-neutral-800 transition-colors duration-300"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-8">
          <ul className="space-y-1">
            <li>
              <Link
                href="/produtos/"
                onClick={onClose}
                className="block py-3 text-sm tracking-wide uppercase text-neutral-700 hover:text-lazuli-teal transition-colors duration-300"
              >
                Produtos
              </Link>
            </li>
            <li>
              <p className="text-xs tracking-wider uppercase text-neutral-400 mb-3 mt-4">
                Coleções
              </p>
              <ul className="space-y-1 pl-3 mb-6">
                <li>
                  <Link
                    href="/colecoes/7-chakras/"
                    onClick={onClose}
                    className="block py-2 text-sm text-neutral-700 hover:text-lazuli-teal transition-colors duration-300"
                  >
                    7 Chakras
                  </Link>
                </li>
                <li>
                  <Link
                    href="/colecoes/alva/"
                    onClick={onClose}
                    className="block py-2 text-sm text-neutral-700 hover:text-lazuli-teal transition-colors duration-300"
                  >
                    ALVA
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/sobre/"
                onClick={onClose}
                className="block py-3 text-sm tracking-wide uppercase text-neutral-700 hover:text-lazuli-teal transition-colors duration-300"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contato/"
                onClick={onClose}
                className="block py-3 text-sm tracking-wide uppercase text-neutral-700 hover:text-lazuli-teal transition-colors duration-300"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="/faq/"
                onClick={onClose}
                className="block py-3 text-sm tracking-wide uppercase text-neutral-700 hover:text-lazuli-teal transition-colors duration-300"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social links */}
        <div className="absolute bottom-12 left-0 right-0 px-8">
          <div className="flex items-center gap-5">
            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-lazuli-teal transition-colors duration-300 text-sm tracking-wide"
            >
              Instagram
            </a>
            <a
              href={BRAND.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-lazuli-teal transition-colors duration-300 text-sm tracking-wide"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
