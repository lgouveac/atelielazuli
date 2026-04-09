'use client';

import { useState } from 'react';
import {
  calculateShipping,
  formatCEP,
  type ShippingOption,
  type ShippingResult,
} from '@/lib/shipping';
import { formatPrice } from '@/store/cart';
import { cn } from '@/lib/utils';

interface ShippingCalculatorProps {
  subtotal: number;
  onSelect?: (option: ShippingOption) => void;
  compact?: boolean;
}

export default function ShippingCalculator({
  subtotal,
  onSelect,
  compact = false,
}: ShippingCalculatorProps) {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ShippingResult | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  function handleCepChange(value: string) {
    setCep(formatCEP(value));
  }

  function handleCalculate() {
    if (!cep) return;
    setLoading(true);
    setResult(null);
    setSelectedMethod(null);

    setTimeout(() => {
      const shippingResult = calculateShipping(cep, subtotal);
      setResult(shippingResult);
      setLoading(false);
    }, 800);
  }

  function handleSelect(option: ShippingOption) {
    setSelectedMethod(option.method);
    onSelect?.(option);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCalculate();
    }
  }

  return (
    <div className={cn(compact ? 'space-y-3' : 'space-y-4')}>
      <p
        className={cn(
          'font-body uppercase tracking-wide text-neutral-500',
          compact ? 'text-xs' : 'text-xs mb-1'
        )}
      >
        Calcular Frete
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          placeholder="00000-000"
          value={cep}
          onChange={(e) => handleCepChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            'border border-neutral-200 px-4 text-sm focus:border-lazuli-teal outline-none transition-colors font-body',
            compact ? 'py-2 flex-1' : 'py-2.5 flex-1'
          )}
        />
        <button
          type="button"
          onClick={handleCalculate}
          disabled={loading || !cep}
          className={cn(
            'bg-lazuli-teal text-white text-sm hover:bg-lazuli-teal-dark transition-colors font-body disabled:opacity-50',
            compact ? 'px-4 py-2' : 'px-5 py-2.5'
          )}
        >
          {loading ? 'Calculando...' : 'Calcular'}
        </button>
      </div>

      {loading && (
        <div className="space-y-2">
          <div className="h-12 bg-neutral-100 animate-pulse rounded" />
          <div className="h-12 bg-neutral-100 animate-pulse rounded" />
        </div>
      )}

      {result && !result.valid && result.error && (
        <p className="text-red-500 text-sm font-body">{result.error}</p>
      )}

      {result && result.valid && result.options.length > 0 && (
        <div className="space-y-2">
          {result.options.map((option) => (
            <button
              key={option.method}
              type="button"
              onClick={() => handleSelect(option)}
              className={cn(
                'w-full flex items-center justify-between border p-3 transition-colors text-left',
                compact ? 'p-2.5' : 'p-3',
                selectedMethod === option.method
                  ? 'border-lazuli-teal bg-lazuli-ocean-foam'
                  : 'border-neutral-200 hover:border-neutral-300'
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                    selectedMethod === option.method
                      ? 'border-lazuli-teal'
                      : 'border-neutral-300'
                  )}
                >
                  {selectedMethod === option.method && (
                    <div className="w-2 h-2 rounded-full bg-lazuli-teal" />
                  )}
                </div>
                <div>
                  <p
                    className={cn(
                      'font-body font-medium text-neutral-800',
                      compact ? 'text-xs' : 'text-sm'
                    )}
                  >
                    {option.method}
                  </p>
                  <p
                    className={cn(
                      'font-body text-neutral-500',
                      compact ? 'text-[11px]' : 'text-xs'
                    )}
                  >
                    {option.days}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  'font-body font-medium',
                  compact ? 'text-xs' : 'text-sm',
                  option.freeShipping
                    ? 'text-green-600'
                    : 'text-neutral-800'
                )}
              >
                {option.freeShipping ? 'Gratis' : formatPrice(option.price)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
