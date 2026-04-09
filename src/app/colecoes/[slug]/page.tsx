import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCollectionBySlug } from '@/data/products';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductGrid from '@/components/product/ProductGrid';

export function generateStaticParams() {
  return [{ slug: '7-chakras' }, { slug: 'alva' }];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return { title: 'Coleção não encontrada' };

  return {
    title: `${collection.name} | Ateliê Lazuli`,
    description: collection.description,
  };
}

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) notFound();

  const bgColor =
    collection.slug === '7-chakras' ? 'bg-lazuli-navy' : 'bg-lazuli-teal';

  return (
    <main>
      {/* Hero */}
      <section className={`${bgColor} py-section-sm text-white`}>
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Coleções', href: '/colecoes' },
              { label: collection.name },
            ]}
          />

          <div className="mt-12 max-w-2xl">
            <h1 className="text-display-lg font-display mb-4">
              {collection.name}
            </h1>
            <p className="text-xl font-body text-white/80 mb-4">
              {collection.tagline}
            </p>
            <p className="font-body text-white/70 leading-relaxed">
              {collection.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Category Navigation Pills */}
      <section className="border-b border-neutral-200 sticky top-0 bg-white z-10">
        <Container>
          <div className="flex items-center gap-3 py-4 overflow-x-auto">
            {collection.categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="shrink-0 px-4 py-2 rounded-full border border-neutral-300 text-sm font-body text-neutral-600 hover:border-lazuli-teal hover:text-lazuli-teal transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Category Sections */}
      {collection.categories.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          className="py-section-sm scroll-mt-20"
        >
          <Container>
            <div className="mb-8">
              <h2 className="text-display-sm font-display text-neutral-800 mb-2">
                {category.name}
              </h2>
              {category.description && (
                <p className="font-body text-neutral-500 max-w-2xl">
                  {category.description}
                </p>
              )}
            </div>
            <ProductGrid products={category.products} columns={3} />
          </Container>
        </section>
      ))}
    </main>
  );
}
