import Link from 'next/link';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function AboutDesigner() {
  return (
    <section className="py-section-sm bg-lazuli-ocean-foam/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <AnimateOnScroll animation="fadeUp">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://atelielazuli.com.br/wp-content/uploads/2024/12/Kimono-Luar-Prata1-600x799.webp"
              alt="Layla Rego - Designer do Ateliê Lazuli"
              className="object-cover w-full h-full"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={0.15}>
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-lazuli-teal font-body">
              A artesã
            </span>
            <h2 className="font-display text-display-md text-lazuli-navy mt-3 mb-6">
              Layla Rego
            </h2>
            <div className="space-y-4 font-body text-neutral-600 text-[15px] leading-relaxed">
              <p>
                Cada peça do Ateliê Lazuli nasce das mãos de Layla Rego, no Rio
                de Janeiro. Unindo técnicas artesanais de tingimento, bordado e
                customização, ela transforma tecidos em obras de arte vestíveis.
              </p>
              <p>
                Inspirada na energia dos chakras e na beleza do oceano carioca,
                Layla criou um universo onde moda e espiritualidade se encontram
                — peças que carregam intenção, cor e alma.
              </p>
            </div>
            <Link
              href="/sobre/"
              className="inline-block mt-8 text-[11px] tracking-[0.2em] uppercase text-lazuli-navy font-body border-b border-lazuli-navy/30 pb-1 hover:border-lazuli-navy transition-colors duration-300"
            >
              Conheça nossa história
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
