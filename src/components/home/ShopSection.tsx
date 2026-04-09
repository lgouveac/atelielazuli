'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import ProductCardWithCart from '@/components/product/ProductCardWithCart';
import { getFeaturedProducts } from '@/data/products';

export default function ShopSection() {
  const products = getFeaturedProducts(12);

  return (
    <section className="py-section-sm">
      <Container>
        <AnimateOnScroll animation="fadeUp">
          <SectionHeading title="Nossas Peças" className="mb-4" />
          <p className="text-center text-neutral-500 font-body text-sm mb-12 max-w-md mx-auto">
            Peças artesanais feitas à mão no Rio de Janeiro. Cada uma é única.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product, index) => (
            <AnimateOnScroll key={product.slug} animation="fadeUp" delay={Math.min(index * 0.08, 0.4)}>
              <ProductCardWithCart product={product} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/produtos/"
            className="inline-block border border-lazuli-navy text-lazuli-navy hover:bg-lazuli-navy hover:text-white py-3 px-10 text-sm tracking-widest uppercase font-body transition-all duration-300"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      </Container>
    </section>
  );
}
