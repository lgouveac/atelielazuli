import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from '@/data/products';
import { CATEGORY_MAP } from '@/data/categories';
import { COLLECTIONS_META } from '@/data/collections';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductDetail from '@/components/product/ProductDetail';
import ProductGrid from '@/components/product/ProductGrid';
import SectionHeading from '@/components/ui/SectionHeading';

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Produto não encontrado' };

  return {
    title: `${product.name} | Ateliê Lazuli`,
    openGraph: {
      title: `${product.name} | Ateliê Lazuli`,
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const categoryMeta = CATEGORY_MAP[product.categoryKey];
  const categoryName = categoryMeta?.name ?? '';
  const collectionMeta =
    COLLECTIONS_META[product.collectionSlug as keyof typeof COLLECTIONS_META];
  const collectionName = collectionMeta?.name ?? '';

  const related = getRelatedProducts(product, 4);

  return (
    <main>
      <section className="py-section-sm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              {
                label: collectionName,
                href: `/colecoes/${product.collectionSlug}`,
              },
              {
                label: categoryName,
                href: `/categoria/${categoryMeta?.slug}`,
              },
              { label: product.name },
            ]}
          />

          <div className="mt-8">
            <ProductDetail
              product={product}
              categoryName={categoryName}
              collectionName={collectionName}
            />
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-section-sm border-t border-neutral-100">
          <Container>
            <SectionHeading
              title="Você também pode gostar"
              className="mb-10"
            />
            <ProductGrid products={related} columns={4} />
          </Container>
        </section>
      )}
    </main>
  );
}
