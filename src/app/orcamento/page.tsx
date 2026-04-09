import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const servicos = [
  {
    titulo: 'E-commerce',
    preco: '2.500',
    descricao: 'Integrado com frete e envio de pedido por e-mail',
    itens: [
      'Loja virtual completa',
      'Carrinho de compras',
      'Cálculo de frete automatizado',
      'Envio de pedido por e-mail',
      'Design responsivo',
      'Otimizado para SEO',
    ],
  },
  {
    titulo: 'Site Institucional',
    preco: '500',
    descricao: '2 páginas',
    itens: [
      'Até 2 páginas',
      'Design personalizado',
      'Responsivo (mobile e desktop)',
      'Formulário de contato',
      'Otimizado para SEO',
    ],
  },
];

export default function OrcamentoPage() {
  return (
    <main className="py-section-sm">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Orçamento' },
          ]}
        />

        <div className="max-w-4xl mx-auto mt-6">
          <AnimateOnScroll animation="fadeUp">
            <h1 className="font-display text-display-lg text-lazuli-navy text-center mb-4">
              Orçamento
            </h1>
            <p className="font-body text-neutral-500 text-center mb-16 max-w-md mx-auto">
              Soluções digitais sob medida para o seu negócio.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((servico, index) => (
              <AnimateOnScroll key={servico.titulo} animation="fadeUp" delay={index * 0.15}>
                <div className="border border-neutral-200 p-8 md:p-10 h-full flex flex-col">
                  <h2 className="font-display text-display-sm text-lazuli-navy">
                    {servico.titulo}
                  </h2>
                  <p className="font-body text-sm text-neutral-500 mt-2">
                    {servico.descricao}
                  </p>

                  <div className="mt-8 mb-8">
                    <span className="text-sm text-neutral-400 font-body">R$</span>
                    <span className="text-display-lg font-display text-lazuli-navy ml-1">
                      {servico.preco}
                    </span>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {servico.itens.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-body text-sm text-neutral-600">
                        <svg
                          className="w-4 h-4 text-lazuli-teal flex-shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mt-12 py-8 border-t border-neutral-100">
              <p className="font-body text-sm text-neutral-500">
                Parcelado em até <span className="text-lazuli-navy font-medium">2x</span>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </main>
  );
}
