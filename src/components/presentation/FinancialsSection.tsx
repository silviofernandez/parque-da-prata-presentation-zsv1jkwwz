import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Slide10({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive} className="text-center">
      <SlideContent delay={100}>
        <h2 className="text-2xl text-gray-400 font-light mb-8">Participação do Investidor</h2>
      </SlideContent>
      <SlideContent delay={300}>
        <div className="text-[15rem] md:text-[20rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/50 stroke-white drop-shadow-[0_0_50px_rgba(197,160,89,0.3)] leading-none">
          25%
        </div>
      </SlideContent>
      <SlideContent delay={600}>
        <p className="text-2xl font-serif text-white mt-8 tracking-wide">
          Do Valor Geral de Vendas (VGV) do Empreendimento
        </p>
      </SlideContent>
    </SlideWrapper>
  )
}

export function Slide11({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-5xl mx-auto">
        <SlideContent delay={100} className="mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white">Composição de Valor</h2>
          <p className="text-primary mt-2 text-lg">Visão Conservadora (Opção Lotes)</p>
        </SlideContent>

        <Card className="glass-card border-primary/20 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-8 text-center flex flex-col justify-center">
                <SlideContent delay={300}>
                  <div className="text-5xl font-serif text-white mb-2">45</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-sm">
                    Lotes
                  </div>
                </SlideContent>
              </div>
              <div className="p-8 text-center flex flex-col justify-center">
                <SlideContent delay={450}>
                  <div className="text-5xl font-serif text-white mb-2">
                    300<span className="text-2xl">m²</span>
                  </div>
                  <div className="text-muted-foreground uppercase tracking-widest text-sm">
                    Área Média
                  </div>
                </SlideContent>
              </div>
              <div className="p-8 text-center flex flex-col justify-center bg-white/5">
                <SlideContent delay={600}>
                  <div className="text-5xl font-serif text-primary mb-2">R$ 750</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-sm">
                    Preço Estimado / m²
                  </div>
                </SlideContent>
              </div>
            </div>
            <Separator className="bg-white/10" />
            <div className="p-12 text-center bg-gradient-to-b from-transparent to-primary/10">
              <SlideContent delay={800}>
                <div className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                  Patrimônio Estimado
                </div>
                <div className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-xl">
                  R$ 10.125.000
                </div>
              </SlideContent>
            </div>
          </CardContent>
        </Card>
      </div>
    </SlideWrapper>
  )
}

export function Slide12({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <SlideContent delay={100}>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Modelo de Recebíveis
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              Estruturação financeira desenhada para maximizar retornos através da antecipação de
              fluxo de caixa e juros compostos.
            </p>
          </SlideContent>
          <div className="space-y-6">
            {[
              { label: 'Entrada', value: '10%' },
              { label: 'Prazo Médio', value: '120 meses' },
              { label: 'Correção', value: '1% a.m. + IPCA' },
            ].map((item, i) => (
              <SlideContent key={i} delay={300 + i * 150}>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-lg text-gray-300">{item.label}</span>
                  <span className="text-2xl font-serif text-primary">{item.value}</span>
                </div>
              </SlideContent>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <SlideContent delay={800}>
            <Card className="glass-card border-primary p-10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h4 className="text-gray-300 uppercase tracking-widest text-sm mb-4">
                  Receita Estimada (Longo Prazo)
                </h4>
                <div className="text-5xl md:text-6xl font-serif text-white font-bold">
                  R$ 16,7 Milhões
                </div>
                <div className="mt-6 text-sm text-primary/80 border border-primary/30 py-2 px-4 rounded-full inline-block">
                  Opção B: Fluxo de Recebíveis
                </div>
              </div>
            </Card>
          </SlideContent>
        </div>
      </div>
    </SlideWrapper>
  )
}
