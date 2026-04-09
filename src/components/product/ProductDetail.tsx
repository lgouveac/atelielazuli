import type { Product } from '@/types';
import ProductImage from './ProductImage';
import ProductPrice from './ProductPrice';
import AddToCartButton from '@/components/cart/AddToCartButton';
import ShippingCalculator from '@/components/checkout/ShippingCalculator';
import { parsePrice } from '@/store/cart';

interface ProductDetailProps {
  product: Product;
  categoryName?: string;
  collectionName?: string;
}

export default function ProductDetail({ product, collectionName }: ProductDetailProps) {
  const isOutOfStock = product.status === 'out_of_stock';

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-16">
      <div className="md:w-[55%]">
        <ProductImage image={product.image} name={product.name} />
      </div>

      <div className="md:w-[45%] flex flex-col justify-center">
        {collectionName && (
          <p className="text-xs uppercase tracking-widest text-lazuli-teal mb-3">
            {collectionName}
          </p>
        )}

        <h1 className="text-display-lg font-display text-neutral-800">
          {product.name}
        </h1>

        <ProductPrice
          originalPrice={product.originalPrice}
          salePrice={product.salePrice}
          className="mt-4 text-lg"
        />

        {isOutOfStock && (
          <span className="inline-block mt-4 bg-white/90 backdrop-blur-sm text-neutral-600 text-xs tracking-wide uppercase px-3 py-1 border border-neutral-200 w-fit">
            Esgotado
          </span>
        )}

        <hr className="my-6 border-neutral-200" />

        <AddToCartButton
          product={{
            name: product.name,
            slug: product.slug,
            salePrice: product.salePrice,
            image: product.image,
          }}
          disabled={isOutOfStock}
        />

        <div className="mt-6">
          <ShippingCalculator subtotal={parsePrice(product.salePrice)} compact />
        </div>

        <p className="text-xs text-neutral-400 mt-6 tracking-wide">
          Artesanal | Feito à mão | Rio de Janeiro
        </p>
      </div>
    </div>
  );
}
