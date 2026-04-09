import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';
import ProductImage from './ProductImage';
import StockBadge from './StockBadge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.status === 'out_of_stock';
  const isOnSale = product.originalPrice !== product.salePrice;

  return (
    <Link href={`/produto/${product.slug}/`} className="group block">
      <div className="relative overflow-hidden">
        <ProductImage
          image={product.image}
          hoverImage={product.hoverImage}
          name={product.name}
          className={cn(isOutOfStock && 'opacity-60')}
        />
        <StockBadge status={product.status} />
      </div>
      <div className="mt-4 space-y-1.5">
        <h3 className="text-[13px] tracking-wide font-body text-neutral-700 group-hover:text-lazuli-navy transition-colors duration-300">
          {product.name}
        </h3>
        <div className="font-body">
          {isOnSale ? (
            <div className="flex items-center gap-2.5">
              <span className="text-[12px] text-neutral-400 line-through">{product.originalPrice}</span>
              <span className="text-[13px] text-neutral-800">{product.salePrice}</span>
            </div>
          ) : (
            <span className="text-[13px] text-neutral-800">{product.salePrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
