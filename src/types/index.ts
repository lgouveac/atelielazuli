export interface Product {
  name: string;
  slug: string;
  url: string;
  originalPrice: string;
  salePrice: string;
  image: string;
  hoverImage: string;
  status: 'in_stock' | 'out_of_stock';
  categoryKey: string;
  collectionSlug: string;
}

export interface Category {
  key: string;
  slug: string;
  name: string;
  description: string;
  collectionSlug: string;
  products: Product[];
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  categories: Category[];
}
