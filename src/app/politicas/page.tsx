import Container from '@/components/ui/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import { BRAND } from '@/lib/constants';

export default function PoliticasPage() {
  return (
    <main className="py-section-sm">
      <Container>
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Políticas' },
          ]}
        />

        <h1 className="font-display text-display-lg text-lazuli-navy mt-6 mb-12">
          Políticas
        </h1>

        <div className="max-w-3xl space-y-16">
          {/* Envio e Entrega */}
          <AnimateOnScroll animation="fadeUp">
            <section>
              <h2 className="font-display text-display-md text-lazuli-navy mb-6">
                Envio e Entrega
              </h2>
              <div className="font-body text-neutral-600 leading-relaxed space-y-4">
                <p>
                  Todas as peças são enviadas após confirmação do pagamento.
                  Trabalhamos com duas modalidades de envio: PAC e SEDEX.
                </p>

                <h3 className="text-sm font-medium text-neutral-800 uppercase tracking-wide pt-2">
                  Prazos estimados
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between border-b border-neutral-100 pb-2">
                    <span>Rio de Janeiro (RJ)</span>
                    <span className="text-neutral-800">3 a 5 dias úteis</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-100 pb-2">
                    <span>São Paulo (SP)</span>
                    <span className="text-neutral-800">5 a 7 dias úteis</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-100 pb-2">
                    <span>Espírito Santo (ES) e Minas Gerais (MG)</span>
                    <span className="text-neutral-800">5 a 7 dias úteis</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-100 pb-2">
                    <span>Demais estados</span>
                    <span className="text-neutral-800">8 a 12 dias úteis</span>
                  </li>
                </ul>

                <p className="text-sm">
                  Envios via SEDEX possuem prazo reduzido pela metade. Frete
                  grátis para compras acima de R$ 500,00.
                </p>

                <p className="text-sm">
                  O código de rastreamento é enviado por e-mail assim que a peça
                  é despachada.
                </p>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Trocas e Devoluções */}
          <AnimateOnScroll animation="fadeUp">
            <section>
              <h2 className="font-display text-display-md text-lazuli-navy mb-6">
                Trocas e Devoluções
              </h2>
              <div className="font-body text-neutral-600 leading-relaxed space-y-4">
                <p>
                  Aceitamos trocas e devoluções em até 7 dias corridos após o
                  recebimento do produto, conforme o Código de Defesa do
                  Consumidor.
                </p>

                <h3 className="text-sm font-medium text-neutral-800 uppercase tracking-wide pt-2">
                  Condições para troca ou devolução
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>A peça deve estar em perfeito estado, sem sinais de uso</li>
                  <li>Etiquetas originais devem estar intactas</li>
                  <li>
                    A embalagem original deve ser mantida sempre que possível
                  </li>
                  <li>
                    O frete de devolução é por conta do cliente, exceto em caso
                    de defeito
                  </li>
                </ul>

                <h3 className="text-sm font-medium text-neutral-800 uppercase tracking-wide pt-2">
                  Como solicitar
                </h3>
                <p className="text-sm">
                  Entre em contato pelo WhatsApp ({BRAND.phone}) ou e-mail ({BRAND.email}) informando o número do pedido e o motivo da
                  troca/devolução. Nossa equipe orientará sobre os próximos
                  passos.
                </p>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Cuidados com as Peças */}
          <AnimateOnScroll animation="fadeUp">
            <section>
              <h2 className="font-display text-display-md text-lazuli-navy mb-6">
                Cuidados com as Peças
              </h2>
              <div className="font-body text-neutral-600 leading-relaxed space-y-4">
                <p>
                  Nossas peças são feitas artesanalmente com técnicas de
                  tingimento manual. Para preservar a beleza e a durabilidade,
                  siga estas orientações:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Lave à mão com água fria e sabão neutro</li>
                  <li>Não utilize alvejante ou cloro</li>
                  <li>Seque à sombra, de preferência em superfície plana</li>
                  <li>Passe com ferro em temperatura baixa, pelo avesso</li>
                  <li>
                    Nas primeiras lavagens, um leve desbotamento é natural e
                    característico do tingimento artesanal
                  </li>
                  <li>Guarde em local seco e arejado</li>
                </ul>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Privacidade */}
          <AnimateOnScroll animation="fadeUp">
            <section>
              <h2 className="font-display text-display-md text-lazuli-navy mb-6">
                Privacidade
              </h2>
              <div className="font-body text-neutral-600 leading-relaxed space-y-4">
                <p>
                  O Ateliê Lazuli respeita a privacidade de seus clientes. As
                  informações pessoais coletadas durante o processo de compra são
                  utilizadas exclusivamente para:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Processar e entregar seus pedidos</li>
                  <li>Enviar atualizações sobre o status da entrega</li>
                  <li>
                    Comunicar novidades e promoções (apenas com seu
                    consentimento)
                  </li>
                </ul>
                <p className="text-sm">
                  Não compartilhamos, vendemos ou cedemos seus dados a terceiros.
                  Você pode solicitar a exclusão de seus dados a qualquer momento
                  entrando em contato pelo e-mail {BRAND.email}.
                </p>
              </div>
            </section>
          </AnimateOnScroll>
        </div>
      </Container>
    </main>
  );
}
