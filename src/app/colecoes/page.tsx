import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCollections } from '@/data/products';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Coleções | Ateliê Lazuli',
};

export default function ColecoesPage() {
  const collections = getAllCollections();

  return (
    <main>
      <section className="py-section-sm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Coleções' },
            ]}
          />

          <div className="mt-8 mb-12">
            <SectionHeading title="Coleções" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/colecoes/${collection.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg"
              >
                <img
                  src={collection.heroImage}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center text-white">
                  <h2 className="text-display-lg font-display mb-2">
                    {collection.name}
                  </h2>
                  <p className="font-body text-white/80 mb-6 max-w-sm">
                    {collection.tagline}
                  </p>
                  <span className="inline-block border border-white/60 px-6 py-2 text-sm font-body uppercase tracking-widest transition-colors group-hover:bg-white group-hover:text-neutral-900">
                    Explorar
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
