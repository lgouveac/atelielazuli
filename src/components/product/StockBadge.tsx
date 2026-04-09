interface StockBadgeProps {
  status: 'in_stock' | 'out_of_stock';
}

export default function StockBadge({ status }: StockBadgeProps) {
  if (status !== 'out_of_stock') return null;

  return (
    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-neutral-600 text-xs tracking-wide uppercase px-3 py-1">
      Esgotado
    </span>
  );
}
