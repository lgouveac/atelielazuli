import { cn } from '@/lib/utils';
import { getProductImageSrc } from '@/lib/utils';

interface ProductImageProps {
  image: string;
  hoverImage?: string;
  name: string;
  className?: string;
}

export default function ProductImage({ image, hoverImage, name, className }: ProductImageProps) {
  const src = getProductImageSrc(image);
  const hoverSrc = hoverImage ? getProductImageSrc(hoverImage) : '';

  return (
    <div className={cn('aspect-[3/4] overflow-hidden bg-neutral-50 relative', className)}>
      <img
        src={src}
        alt={name}
        className={cn(
          'object-cover w-full h-full',
          hoverSrc && 'transition-opacity duration-500 ease-out group-hover:opacity-0'
        )}
      />
      {hoverSrc && (
        <img
          src={hoverSrc}
          alt={`${name} - vista alternativa`}
          className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />
      )}
    </div>
  );
}
