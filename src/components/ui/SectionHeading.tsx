import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center', className)}>
      <h2 className="text-display-md font-display text-neutral-800">{title}</h2>
      {subtitle && (
        <p className="text-neutral-500 mt-2 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
