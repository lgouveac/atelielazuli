import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PLACEHOLDER_IMAGE } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProductImageSrc(image: string): string {
  return image || PLACEHOLDER_IMAGE;
}

export function whatsappProductLink(productName: string): string {
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${productName}. Poderia me dar mais informações?`
  );
  return `https://wa.me/5521995348882?text=${message}`;
}
