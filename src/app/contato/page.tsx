import { Metadata } from 'next';
import { BRAND } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contato | Ateliê Lazuli',
};

const socialLinks = [
  {
    platform: 'Instagram',
    handle: '@atelielazuli',
    href: BRAND.social.instagram,
  },
  {
    platform: 'TikTok',
    handle: '@atelielazuli',
    href: BRAND.social.tiktok,
  },
  {
    platform: 'Facebook',
    handle: '/lazuliwhale',
    href: BRAND.social.facebook,
  },
];

export default function ContatoPage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-12 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contato' },
            ]}
          />
          <div className="mt-12">
            <h1 className="text-display-lg font-display text-lazuli-navy">
              Contato
            </h1>
            <p className="mt-4 text-lg text-neutral-500 font-body">
              Entre em contato conosco
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-section-sm">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
            {/* Left: Contact Details */}
            <div className="space-y-10">
              <div>
                <span className="text-xs font-body uppercase tracking-widest text-neutral-400">
                  Email
                </span>
                <p className="mt-2 font-body">
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-lazuli-navy hover:text-lazuli-teal transition-colors"
                  >
                    {BRAND.email}
                  </a>
                </p>
              </div>

              <div>
                <span className="text-xs font-body uppercase tracking-widest text-neutral-400">
                  Telefone
                </span>
                <p className="mt-2 font-body text-lazuli-navy">{BRAND.phone}</p>
              </div>

              <div>
                <span className="text-xs font-body uppercase tracking-widest text-neutral-400">
                  WhatsApp
                </span>
                <p className="mt-2 font-body">
                  <a
                    href={BRAND.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 transition-colors"
                  >
                    Fale conosco pelo WhatsApp
                  </a>
                </p>
              </div>

              <div>
                <span className="text-xs font-body uppercase tracking-widest text-neutral-400">
                  Localização
                </span>
                <p className="mt-2 font-body text-lazuli-navy">
                  {BRAND.city}, Brasil
                </p>
              </div>
            </div>

            {/* Right: Social Media */}
            <div>
              <h2 className="font-display text-display-sm text-lazuli-navy mb-8">
                Siga-nos
              </h2>
              <div className="space-y-6">
                {socialLinks.map((social) => (
                  <div key={social.platform} className="flex items-center gap-4">
                    <span className="text-xs font-body uppercase tracking-widest text-neutral-400 w-20">
                      {social.platform}
                    </span>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-lazuli-navy hover:text-lazuli-teal transition-colors"
                    >
                      {social.handle}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-section-sm bg-lazuli-navy">
        <Container>
          <div className="text-center">
            <p className="text-white/70 font-body text-lg mb-6">
              Prefere falar pelo WhatsApp?
            </p>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-10 py-4 text-sm font-body uppercase tracking-wider hover:bg-green-700 transition-colors"
            >
              Iniciar conversa no WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
