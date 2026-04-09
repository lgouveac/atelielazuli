'use client';

import { useEffect, useState } from 'react';

interface OrderConfirmationProps {
  orderNumber: string;
  onClose: () => void;
}

export default function OrderConfirmation({
  orderNumber,
  onClose,
}: OrderConfirmationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={`bg-white max-w-lg w-full mx-6 p-10 text-center transition-all duration-500 ease-out ${
          visible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95'
        }`}
      >
        {/* Checkmark icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-lazuli-teal flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="font-display text-display-md text-lazuli-navy mb-3">
          Pedido Confirmado!
        </h2>

        <p className="font-body text-xs uppercase tracking-wide text-neutral-500 mb-4">
          {orderNumber}
        </p>

        <p className="font-body text-neutral-600 mb-2">
          Obrigado por comprar no Atelie Lazuli
        </p>

        <p className="font-body text-sm text-neutral-400 mb-8">
          Voce recebera os detalhes do pedido por e-mail.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="bg-lazuli-navy text-white py-4 px-8 text-sm tracking-widest uppercase font-body hover:bg-lazuli-ocean-deep transition-colors"
        >
          Voltar as Colecoes
        </button>
      </div>
    </div>
  );
}
