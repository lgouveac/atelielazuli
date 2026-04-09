import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { getAllCollections } from '@/data/products';

export default function CollectionShowcase() {
  const collections = getAllCollections();

  return (
    <section id="colecoes" className="py-section-sm relative bg-lazuli-ocean-foam/30">
      <Container>
        <AnimateOnScroll animation="fadeUp">
          <SectionHeading title="Coleções" className="mb-12" />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <AnimateOnScroll key={collection.slug} animation="fadeUp" delay={index * 0.2}>
              <Link
                href={`/colecoes/${collection.slug}/`}
                className="group relative block overflow-hidden rounded-sm"
              >
                <div className="aspect-[3/4] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${collection.heroImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-display-md font-display text-white">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-2">
                      {collection.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
