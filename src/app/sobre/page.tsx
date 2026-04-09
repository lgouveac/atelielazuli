import { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Sobre | Ateliê Lazuli',
};

const philosophy = [
  {
    title: 'Slow Fashion',
    description:
      'Inspiração no slow fashion, criando peças únicas e cheias de personalidade que celebram a liberdade de expressão.',
  },
  {
    title: 'Feito à Mão',
    description:
      'Sensibilidade na criação com técnicas exclusivas, materiais nobres e acabamentos artesanais.',
  },
  {
    title: 'Identidade Brasileira',
    description:
      'Cada criação é uma forma de arte que conta histórias, celebra a individualidade e reflete a criatividade artesanal brasileira.',
  },
];

const values = [
  {
    name: 'Criatividade',
    description: 'Transformar arte e design em peças únicas',
  },
  {
    name: 'Qualidade',
    description: 'Materiais e processos artesanais de excelência',
  },
  {
    name: 'Sustentabilidade',
    description: 'Compromisso com práticas conscientes',
  },
  {
    name: 'Respeito e Confiança',
    description: 'Relações baseadas em verdade e transparência',
  },
];

export default function SobrePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-12 pb-16">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Sobre' },
            ]}
          />
          <div className="mt-12 text-center">
            <h1 className="text-display-lg font-display text-lazuli-navy">
              Sobre o {BRAND.name}
            </h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto font-body">
              {BRAND.tagline}
            </p>
          </div>
        </Container>
      </section>

      {/* Origin Story */}
      <section className="py-section-sm">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="w-12 h-px bg-lazuli-gold mx-auto mb-8" />
            <div className="text-neutral-600 leading-relaxed text-lg space-y-6 font-body">
              <p>
                Somos o {BRAND.name}, uma marca autoral que integra beleza e
                originalidade em produtos e serviços, priorizando
                funcionalidade, conforto e qualidade.
              </p>
              <p>
                Tudo começou em um apartamento aconchegante na Tijuca, com
                apenas uma mesa de corte, uma máquina de costura doméstica e um
                pequeno estojo com agulhas e tesouras.
              </p>
              <p>
                Fundado pela estilista {BRAND.founder}, o ateliê nasceu de
                pequenos reparos e tingimentos, evoluiu para customizações e
                peças sob medida, e expandiu para figurinos e moda autoral.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-section-sm bg-neutral-50">
        <Container>
          <h2 className="text-display-md font-display text-lazuli-navy text-center mb-16">
            Nossa Filosofia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {philosophy.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display text-display-sm text-lazuli-teal mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed font-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-section-sm">
        <Container>
          <h2 className="text-display-md font-display text-lazuli-navy text-center mb-16">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {values.map((value) => (
              <div key={value.name}>
                <h3 className="font-display text-display-sm text-lazuli-teal">
                  {value.name}
                </h3>
                <p className="text-neutral-600 text-sm mt-2 font-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-sm">
        <Container>
          <div className="text-center">
            <Link
              href="/colecoes/"
              className="inline-block border border-lazuli-navy text-lazuli-navy px-8 py-3 text-sm font-body uppercase tracking-wider hover:bg-lazuli-navy hover:text-white transition-colors"
            >
              Conheça nossas coleções
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
