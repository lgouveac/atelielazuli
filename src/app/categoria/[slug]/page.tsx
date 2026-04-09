import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCategories, getCategoryBySlug } from '@/data/products';
import { COLLECTIONS_META } from '@/data/collections';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductGrid from '@/components/product/ProductGrid';

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: 'Categoria não encontrada' };

  return {
    title: `${category.name} | Ateliê Lazuli`,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const collectionMeta =
    COLLECTIONS_META[category.collectionSlug as keyof typeof COLLECTIONS_META];
  const collectionName = collectionMeta?.name ?? '';

  return (
    <main>
      <section className="py-section-sm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              {
                label: collectionName,
                href: `/colecoes/${category.collectionSlug}`,
              },
              { label: category.name },
            ]}
          />

          <div className="mt-8 mb-12">
            <h1 className="text-display-md font-display text-neutral-800 mb-3">
              {category.name}
            </h1>
            {category.description && (
              <p className="font-body text-neutral-500 max-w-2xl mb-2">
                {category.description}
              </p>
            )}
            <p className="font-body text-sm text-neutral-400">
              {category.products.length}{' '}
              {category.products.length === 1 ? 'produto' : 'produtos'}
            </p>
          </div>

          <ProductGrid products={category.products} columns={3} />
        </Container>
      </section>
    </main>
  );
}
