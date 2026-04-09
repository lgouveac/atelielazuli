import WavesDivider from '@/components/ocean/WavesDivider';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function Newsletter() {
  return (
    <section className="relative">
      <WavesDivider color="#022F5D" />
      <div className="ocean-gradient py-section-sm">
        <AnimateOnScroll animation="fadeUp">
          <div className="max-w-xl mx-auto text-center px-6">
            <h2 className="text-display-sm font-display text-white">
              Receba novidades exclusivas
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Acompanhe as novidades do Ateliê Lazuli
            </p>

            <form action="#" className="mt-8 flex gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 text-sm flex-1 outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-lazuli-gold text-white px-6 py-3 text-sm tracking-wide uppercase hover:bg-lazuli-gold/90 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
