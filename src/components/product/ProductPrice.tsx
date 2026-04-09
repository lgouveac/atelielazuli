import { cn } from '@/lib/utils';

interface ProductPriceProps {
  originalPrice: string;
  salePrice: string;
  className?: string;
}

export default function ProductPrice({ originalPrice, salePrice, className }: ProductPriceProps) {
  const isOnSale = originalPrice !== salePrice;

  return (
    <div className={cn('font-body', className)}>
      {isOnSale ? (
        <div className="flex items-center gap-2.5">
          <span className="line-through text-neutral-400 text-[12px]">{originalPrice}</span>
          <span className="text-[13px] text-neutral-800">{salePrice}</span>
        </div>
      ) : (
        <span className="text-[13px] text-neutral-800">{salePrice}</span>
      )}
    </div>
  );
}
