export interface ShippingOption {
  method: string;
  price: number;
  days: string;
  freeShipping: boolean;
}

export interface ShippingResult {
  options: ShippingOption[];
  cep: string;
  valid: boolean;
  error?: string;
}

interface RegionConfig {
  basePrice: number;
  pacDays: string;
  sedexDays: string;
}

function getRegionConfig(prefix: number): RegionConfig {
  if (prefix >= 20 && prefix <= 28) {
    return { basePrice: 15.9, pacDays: '5-8 dias úteis', sedexDays: '2-4 dias úteis' };
  }
  if (prefix >= 1 && prefix <= 19) {
    return { basePrice: 22.9, pacDays: '6-10 dias úteis', sedexDays: '3-5 dias úteis' };
  }
  if (prefix === 29) {
    return { basePrice: 19.9, pacDays: '5-8 dias úteis', sedexDays: '2-4 dias úteis' };
  }
  if (prefix >= 30 && prefix <= 39) {
    return { basePrice: 22.9, pacDays: '6-10 dias úteis', sedexDays: '3-5 dias úteis' };
  }
  return { basePrice: 34.9, pacDays: '10-15 dias úteis', sedexDays: '5-8 dias úteis' };
}

export function calculateShipping(cep: string, subtotal: number): ShippingResult {
  const digits = cep.replace(/\D/g, '');

  if (digits.length !== 8) {
    return { options: [], cep, valid: false, error: 'CEP inválido' };
  }

  const prefix = parseInt(digits.slice(0, 2), 10);
  const region = getRegionConfig(prefix);
  const isFreeShipping = subtotal >= 500;

  const pacOption: ShippingOption = {
    method: 'PAC',
    price: isFreeShipping ? 0 : region.basePrice,
    days: region.pacDays,
    freeShipping: isFreeShipping,
  };

  const sedexOption: ShippingOption = {
    method: 'SEDEX',
    price: isFreeShipping ? 0 : parseFloat((region.basePrice * 1.8).toFixed(2)),
    days: region.sedexDays,
    freeShipping: isFreeShipping,
  };

  return {
    options: [pacOption, sedexOption],
    cep: digits,
    valid: true,
  };
}

export function formatCEP(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  return digits;
}
