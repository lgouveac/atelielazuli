import { cn } from '@/lib/utils';
import type { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const columnClasses = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
} as const;

export default function ProductGrid({ products, columns = 3 }: ProductGridProps) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10', columnClasses[columns])}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
