import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartProduct {
  name: string;
  slug: string;
  salePrice: string;
  image: string;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: CartProduct) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,

      addItem: (product: CartProduct) =>
        set((state) => {
          const existing = state.items.find(
            (item) => item.product.slug === product.slug
          );
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product.slug === product.slug
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              isOpen: true,
            };
          }
          return {
            items: [...state.items, { product, quantity: 1 }],
            isOpen: true,
          };
        }),

      removeItem: (slug: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.slug !== slug),
        })),

      updateQuantity: (slug: string, quantity: number) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.product.slug !== slug),
            };
          }
          return {
            items: state.items.map((item) =>
              item.product.slug === slug ? { ...item, quantity } : item
            ),
          };
        }),

      clearCart: () => set({ items: [] }),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      openCart: () => set({ isOpen: true }),

      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: 'atelielazuli-cart',
    }
  )
);

export function parsePrice(price: string): number {
  return parseFloat(
    price.replace('R$', '').replace(/\./g, '').replace(',', '.').trim()
  );
}

export function formatPrice(value: number): string {
  return `R$ ${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce(
    (sum, item) => sum + parsePrice(item.product.salePrice) * item.quantity,
    0
  );
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
