import Link from 'next/link';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { getAllCollections } from '@/data/products';

export default function CollectionLinks() {
  const collections = getAllCollections();

  return (
    <section className="py-section-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((collection, index) => (
            <AnimateOnScroll key={collection.slug} animation="fadeUp" delay={index * 0.12}>
              <Link
                href={`/colecoes/${collection.slug}/`}
                className="group relative block overflow-hidden aspect-[16/7]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${collection.heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center p-10">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-body">
                      Coleção
                    </span>
                    <h3 className="text-display-sm font-display text-white mt-1">
                      {collection.name}
                    </h3>
                    <span className="inline-block mt-3 text-[11px] tracking-[0.15em] uppercase text-white/70 font-body border-b border-white/30 pb-0.5 group-hover:border-white/70 transition-colors duration-300">
                      Explorar
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
