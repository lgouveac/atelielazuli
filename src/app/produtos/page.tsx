'use client';

import { useState, useMemo } from 'react';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductCardWithCart from '@/components/product/ProductCardWithCart';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { getAllProducts } from '@/data/products';

type FilterOption = 'todos' | 'in_stock' | '7-chakras' | 'alva';

export default function ProdutosPage() {
  const allProducts = getAllProducts();
  const [filter, setFilter] = useState<FilterOption>('todos');

  const filteredProducts = useMemo(() => {
    switch (filter) {
      case 'in_stock':
        return allProducts.filter((p) => p.status === 'in_stock');
      case '7-chakras':
        return allProducts.filter((p) => p.collectionSlug === '7-chakras');
      case 'alva':
        return allProducts.filter((p) => p.collectionSlug === 'alva');
      default:
        return allProducts;
    }
  }, [filter, allProducts]);

  const filters: { key: FilterOption; label: string }[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'in_stock', label: 'Disponíveis' },
    { key: '7-chakras', label: '7 Chakras' },
    { key: 'alva', label: 'ALVA' },
  ];

  return (
    <main className="py-section-sm">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Produtos' },
          ]}
        />

        <h1 className="font-display text-display-lg text-lazuli-navy mt-6 mb-4">
          Todos os Produtos
        </h1>
        <p className="font-body text-neutral-500 mb-10 max-w-lg">
          {allProducts.length} peças artesanais feitas à mão no Rio de Janeiro.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 text-sm font-body tracking-wide transition-all duration-300 ${
                filter === f.key
                  ? 'bg-lazuli-navy text-white'
                  : 'border border-neutral-200 text-neutral-600 hover:border-lazuli-teal hover:text-lazuli-teal'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product count */}
        <p className="text-xs text-neutral-400 font-body mb-6 uppercase tracking-wide">
          {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product, index) => (
            <AnimateOnScroll key={product.slug} animation="fadeUp" delay={Math.min(index * 0.05, 0.3)}>
              <ProductCardWithCart product={product} />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </main>
  );
}
