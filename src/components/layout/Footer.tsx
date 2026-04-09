import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import WavesDivider from '@/components/ocean/WavesDivider';

export default function Footer() {
  return (
    <footer>
      <WavesDivider color="#022F5D" />
      <div className="ocean-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/60 leading-relaxed mb-3">
              {BRAND.tagline}
            </p>
            <p className="text-sm text-white/40">Rio de Janeiro, Brasil</p>
          </div>

          {/* Coleções */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-5">
              Coleções
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/colecoes/7-chakras/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  7 Chakras
                </Link>
              </li>
              <li>
                <Link
                  href="/colecoes/alva/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  ALVA
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Todos os Produtos
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-5">
              Institucional
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/faq/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas/"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Políticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-white/40 mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/70">{BRAND.phone}</span>
              </li>
              <li>
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.28 8.28 0 0 0 3.76.92V6.69z" />
                </svg>
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; 2024 {BRAND.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
