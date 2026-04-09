import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 font-body">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-neutral-300 text-sm">/</span>
              )}
              {isLast || !item.href ? (
                <span className="text-neutral-600 text-sm">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-neutral-400 hover:text-lazuli-teal text-sm transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
