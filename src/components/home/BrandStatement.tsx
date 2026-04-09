import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function BrandStatement() {
  return (
    <section className="py-20 md:py-section">
      <AnimateOnScroll animation="fadeUp">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="w-12 h-px bg-lazuli-gold mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-display text-neutral-700 leading-relaxed">
            Cada peça é única. Slow fashion inspirado na energia dos chakras e na
            beleza artesanal carioca. Feito à mão no Rio de Janeiro.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
