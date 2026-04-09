import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import ProductGrid from '@/components/product/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="py-section-sm">
      <Container>
        <AnimateOnScroll animation="fadeUp">
          <SectionHeading title="Destaques" className="mb-12" />
        </AnimateOnScroll>
        <ProductGrid products={products} columns={4} />
        <div className="text-center mt-12">
          <Link
            href="/colecoes/7-chakras/"
            className="text-sm tracking-wide text-lazuli-teal hover:text-lazuli-teal-dark transition-colors"
          >
            Ver todos os produtos &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
