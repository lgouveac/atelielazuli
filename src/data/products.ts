import type { Product, Category, Collection } from '@/types';
import { CATEGORY_MAP } from './categories';
import { COLLECTIONS_META } from './collections';
import rawData from '../../produtos-atelielazuli.json';
import hoverImages from './hover-images.json';

function buildProducts(): Product[] {
  const products: Product[] = [];
  const categories = rawData.categories as Record<
    string,
    { description: string; products: Array<Record<string, string>> }
  >;
  const hoverMap = hoverImages as Record<string, string>;

  for (const [catKey, catData] of Object.entries(categories)) {
    const meta = CATEGORY_MAP[catKey];
    if (!meta) continue;

    for (const p of catData.products) {
      products.push({
        name: p.name,
        slug: p.slug,
        url: p.url,
        originalPrice: p.original_price,
        salePrice: p.sale_price,
        image: p.image || '',
        hoverImage: hoverMap[p.slug] || '',
        status: (p.status as 'in_stock' | 'out_of_stock') || 'in_stock',
        categoryKey: catKey,
        collectionSlug: meta.collectionSlug,
      });
    }
  }

  return products;
}

const ALL_PRODUCTS = buildProducts();

export function getAllProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryKey: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.categoryKey === categoryKey);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.collectionSlug === collectionSlug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return ALL_PRODUCTS.filter((p) => p.image && p.status === 'in_stock').slice(
    0,
    limit
  );
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return ALL_PRODUCTS.filter(
    (p) => p.categoryKey === product.categoryKey && p.slug !== product.slug
  ).slice(0, limit);
}

export function getAllCategories(): Category[] {
  return Object.entries(CATEGORY_MAP).map(([key, meta]) => {
    const rawCat = (rawData.categories as Record<string, { description: string }>)[key];
    return {
      key,
      slug: meta.slug,
      name: meta.name,
      description: rawCat?.description || '',
      collectionSlug: meta.collectionSlug,
      products: getProductsByCategory(key),
    };
  });
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((c) => c.slug === slug);
}

export function getAllCollections(): Collection[] {
  return Object.values(COLLECTIONS_META).map((meta) => ({
    ...meta,
    categories: getAllCategories().filter(
      (c) => c.collectionSlug === meta.slug
    ),
  }));
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return getAllCollections().find((c) => c.slug === slug);
}
