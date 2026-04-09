'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ShippingCalculator from '@/components/checkout/ShippingCalculator';
import OrderConfirmation from '@/components/checkout/OrderConfirmation';
import {
  useCartStore,
  parsePrice,
  formatPrice,
  getCartTotal,
} from '@/store/cart';
import { type ShippingOption } from '@/lib/shipping';
import { formatCEP } from '@/lib/shipping';
import { getProductImageSrc } from '@/lib/utils';

const BRAZILIAN_STATES = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN',
  'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO',
];

const inputClass =
  'w-full border border-neutral-200 px-4 py-3 text-sm focus:border-lazuli-teal outline-none transition-colors font-body';
const labelClass =
  'text-xs uppercase tracking-wide text-neutral-500 mb-1.5 block font-body';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [selectedShipping, setSelectedShipping] =
    useState<ShippingOption | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = mounted ? getCartTotal(items) : 0;
  const shippingPrice = selectedShipping?.price ?? 0;
  const total = subtotal + shippingPrice;

  const canSubmit =
    mounted &&
    items.length > 0 &&
    selectedShipping !== null &&
    form.nome.trim() !== '' &&
    form.email.trim() !== '' &&
    form.cep.replace(/\D/g, '').length === 8;

  function updateField(field: keyof FormData, value: string) {
    if (field === 'cep') {
      setForm((prev) => ({ ...prev, cep: formatCEP(value) }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  }

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const num = `LAZ-${Date.now().toString(36).toUpperCase()}`;
    setOrderNumber(num);
  }

  function handleOrderClose() {
    clearCart();
    router.push('/colecoes/');
  }

  if (!mounted) {
    return (
      <main className="py-section-sm">
        <Container>
          <div className="h-96" />
        </Container>
      </main>
    );
  }

  if (items.length === 0 && !orderNumber) {
    return (
      <main className="py-section-sm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Checkout' },
            ]}
          />
          <div className="text-center py-20">
            <h1 className="font-display text-display-md text-lazuli-navy mb-4">
              Seu carrinho esta vazio
            </h1>
            <p className="font-body text-neutral-500 mb-8">
              Explore nossas colecoes e encontre pecas unicas.
            </p>
            <Link
              href="/colecoes/"
              className="inline-block bg-lazuli-navy text-white py-4 px-8 text-sm tracking-widest uppercase font-body hover:bg-lazuli-ocean-deep transition-colors"
            >
              Ver Colecoes
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="py-section-sm">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Checkout' },
          ]}
        />

        <h1 className="font-display text-display-md text-lazuli-navy mt-6 mb-10">
          Finalizar Compra
        </h1>

        <form
          onSubmit={handleConfirm}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
        >
          {/* Left column - Customer form */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="font-display text-display-sm text-lazuli-navy">
              Dados de Entrega
            </h2>

            <div className="space-y-5">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className={labelClass}>
                  Nome completo
                </label>
                <input
                  id="nome"
                  type="text"
                  value={form.nome}
                  onChange={(e) => updateField('nome', e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Email + Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className={labelClass}>
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    value={form.telefone}
                    onChange={(e) => updateField('telefone', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* CEP */}
              <div className="max-w-xs">
                <label htmlFor="cep" className={labelClass}>
                  CEP
                </label>
                <input
                  id="cep"
                  type="text"
                  inputMode="numeric"
                  placeholder="00000-000"
                  value={form.cep}
                  onChange={(e) => updateField('cep', e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Endereco + Numero */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="endereco" className={labelClass}>
                    Endereco
                  </label>
                  <input
                    id="endereco"
                    type="text"
                    value={form.endereco}
                    onChange={(e) => updateField('endereco', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="numero" className={labelClass}>
                    Numero
                  </label>
                  <input
                    id="numero"
                    type="text"
                    value={form.numero}
                    onChange={(e) => updateField('numero', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Complemento */}
              <div>
                <label htmlFor="complemento" className={labelClass}>
                  Complemento{' '}
                  <span className="text-neutral-400 normal-case tracking-normal">
                    (opcional)
                  </span>
                </label>
                <input
                  id="complemento"
                  type="text"
                  value={form.complemento}
                  onChange={(e) => updateField('complemento', e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Bairro */}
              <div>
                <label htmlFor="bairro" className={labelClass}>
                  Bairro
                </label>
                <input
                  id="bairro"
                  type="text"
                  value={form.bairro}
                  onChange={(e) => updateField('bairro', e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Cidade + Estado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cidade" className={labelClass}>
                    Cidade
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    value={form.cidade}
                    onChange={(e) => updateField('cidade', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="estado" className={labelClass}>
                    Estado
                  </label>
                  <select
                    id="estado"
                    value={form.estado}
                    onChange={(e) => updateField('estado', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Selecione</option>
                    {BRAZILIAN_STATES.map((uf) => (
                      <option key={uf} value={uf}>
                        {uf}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Order summary */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-8 border border-neutral-200 p-6 space-y-6">
              <h2 className="font-display text-display-sm text-lazuli-navy">
                Resumo do Pedido
              </h2>

              {/* Cart items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.slug}
                    className="flex gap-4 items-start"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 bg-neutral-100">
                      <Image
                        src={getProductImageSrc(item.product.image)}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm text-neutral-800 truncate">
                        {item.product.name}
                      </p>
                      <p className="font-body text-xs text-neutral-500 mt-0.5">
                        {item.quantity} x {item.product.salePrice}
                      </p>
                    </div>
                    <p className="font-body text-sm text-neutral-800 flex-shrink-0">
                      {formatPrice(
                        parsePrice(item.product.salePrice) * item.quantity
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="border-neutral-200" />

              {/* Shipping calculator */}
              <ShippingCalculator
                subtotal={subtotal}
                onSelect={setSelectedShipping}
                compact
              />

              <hr className="border-neutral-200" />

              {/* Totals */}
              <div className="space-y-3">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-neutral-500">Subtotal</span>
                  <span className="text-neutral-800">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-neutral-500">Frete</span>
                  <span className="text-neutral-800">
                    {selectedShipping
                      ? selectedShipping.freeShipping
                        ? 'Gratis'
                        : formatPrice(selectedShipping.price)
                      : 'Selecione o frete'}
                  </span>
                </div>
                <hr className="border-neutral-200" />
                <div className="flex justify-between items-baseline">
                  <span className="font-body text-sm font-medium text-neutral-800">
                    Total
                  </span>
                  <span className="font-display text-display-sm text-lazuli-navy">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full bg-lazuli-navy text-white py-4 text-sm tracking-widest uppercase font-body hover:bg-lazuli-ocean-deep disabled:bg-neutral-300 transition-colors"
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        </form>
      </Container>

      {/* Order confirmation overlay */}
      {orderNumber && (
        <OrderConfirmation
          orderNumber={orderNumber}
          onClose={handleOrderClose}
        />
      )}
    </main>
  );
}
