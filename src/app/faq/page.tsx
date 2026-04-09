import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { BRAND } from '@/lib/constants';

const faqs = [
  {
    question: 'As peças são realmente feitas à mão?',
    answer:
      'Sim! Cada peça do Ateliê Lazuli é confeccionada artesanalmente no Rio de Janeiro. Utilizamos técnicas de tingimento manual, bordado e customização que tornam cada item único.',
  },
  {
    question: 'Quanto tempo leva para receber meu pedido?',
    answer:
      'O prazo varia conforme sua localização. Para o Rio de Janeiro, entregamos em 3 a 5 dias úteis. São Paulo e Espírito Santo de 5 a 7 dias. Para demais estados, entre 8 e 12 dias úteis. Envios via SEDEX chegam na metade do prazo.',
  },
  {
    question: 'Vocês oferecem frete grátis?',
    answer:
      'Sim! Oferecemos frete grátis para compras acima de R$ 500,00 para todo o Brasil.',
  },
  {
    question: 'Posso trocar ou devolver uma peça?',
    answer:
      'Aceitamos trocas e devoluções em até 7 dias após o recebimento, desde que a peça esteja em perfeito estado, com etiquetas originais e sem sinais de uso. Entre em contato pelo WhatsApp ou e-mail para iniciar o processo.',
  },
  {
    question: 'Como devo cuidar das peças?',
    answer:
      'Recomendamos lavar à mão com água fria e sabão neutro. Não utilizar alvejante. Secar à sombra. As peças com tingimento artesanal podem ter leve desbotamento natural nas primeiras lavagens, o que é característico do processo artesanal.',
  },
  {
    question: 'As cores podem variar?',
    answer:
      'Por serem feitas artesanalmente com tingimento manual, pequenas variações de cor são esperadas e fazem parte da identidade única de cada peça. Isso é uma característica, não um defeito.',
  },
  {
    question: 'Vocês enviam para fora do Brasil?',
    answer:
      'Estamos expandindo para envios internacionais. Entre em contato pelo e-mail ou WhatsApp para consultar disponibilidade e valores de envio para seu país.',
  },
  {
    question: 'Posso encomendar uma peça personalizada?',
    answer:
      'Sim! Trabalhamos com encomendas especiais. Entre em contato pelo WhatsApp para discutir sua ideia e receber um orçamento personalizado.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer:
      'Aceitamos cartões de crédito, débito, PIX e transferência bancária. Parcelamos em até 3x sem juros no cartão para compras acima de R$ 300,00.',
  },
  {
    question: 'O que é a coleção 7 Chakras?',
    answer:
      'A coleção 7 Chakras é inspirada nos centros de energia do corpo. Cada peça carrega cores e elementos simbólicos relacionados a um dos sete chakras, unindo moda e espiritualidade em criações únicas.',
  },
];

export default function FAQPage() {
  return (
    <main className="py-section-sm">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Perguntas Frequentes' },
          ]}
        />

        <h1 className="font-display text-display-lg text-lazuli-navy mt-6 mb-4">
          Perguntas Frequentes
        </h1>
        <p className="font-body text-neutral-500 mb-12 max-w-lg">
          Tire suas dúvidas sobre nossas peças, entregas e processos.
        </p>

        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 0.05}>
              <div className="border-b border-neutral-100 py-8">
                <h2 className="font-display text-display-sm text-lazuli-navy mb-3">
                  {faq.question}
                </h2>
                <p className="font-body text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fadeUp">
          <div className="mt-16 bg-lazuli-ocean-foam/40 p-10 max-w-3xl">
            <h2 className="font-display text-display-sm text-lazuli-navy mb-3">
              Ainda tem dúvidas?
            </h2>
            <p className="font-body text-neutral-600 mb-6">
              Entre em contato conosco pelo WhatsApp ou e-mail. Estamos sempre
              disponíveis para ajudar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-lazuli-navy text-white py-3 px-8 text-sm tracking-widest uppercase font-body hover:bg-lazuli-ocean-deep transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-block border border-lazuli-navy text-lazuli-navy py-3 px-8 text-sm tracking-widest uppercase font-body hover:bg-lazuli-navy hover:text-white transition-all duration-300"
              >
                E-mail
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </main>
  );
}
