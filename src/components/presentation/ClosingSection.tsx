import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Card } from '@/components/ui/card'

export function Slide14({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-6xl mx-auto">
        <SlideContent delay={100} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Escolha sua Estratégia</h2>
        </SlideContent>

        <div className="grid md:grid-cols-2 gap-8">
          <SlideContent delay={300}>
            <Card className="glass-card p-10 h-[400px] flex flex-col justify-center relative overflow-hidden group hover:border-primary transition-colors duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10 text-center">
                <div className="text-primary text-xl font-serif mb-4">OPÇÃO A</div>
                <h3 className="text-4xl font-serif text-white mb-6">Lotes Físicos</h3>
                <p className="text-gray-400 text-lg">
                  Retirada de 45 lotes de 300m² para composição de patrimônio imobiliário tangível e
                  revenda futura estratégica.
                </p>
              </div>
            </Card>
          </SlideContent>
          <SlideContent delay={500}>
            <Card className="glass-card p-10 h-[400px] flex flex-col justify-center relative overflow-hidden group hover:border-primary transition-colors duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative z-10 text-center">
                <div className="text-primary text-xl font-serif mb-4">OPÇÃO B</div>
                <h3 className="text-4xl font-serif text-white mb-6">Recebíveis</h3>
                <p className="text-gray-400 text-lg">
                  Participação no fluxo financeiro das vendas (10% entrada + 120 meses), maximizando
                  o retorno através de juros.
                </p>
              </div>
            </Card>
          </SlideContent>
        </div>
      </div>
    </SlideWrapper>
  )
}

export function Slide15({ isActive }: { isActive: boolean }) {
  const verbs = ['Aprovar', 'Implantar', 'Entregar', 'Valorizar', 'Gerar patrimônio']

  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-4xl mx-auto text-center">
        <SlideContent delay={100}>
          <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-12">
            O Compromisso
          </h2>
        </SlideContent>

        <div className="flex flex-col space-y-6 md:space-y-8">
          {verbs.map((verb, i) => (
            <SlideContent key={i} delay={300 + i * 300}>
              <div className="text-5xl md:text-7xl font-serif text-white/50 hover:text-white transition-colors duration-500 cursor-default">
                {verb}.
              </div>
            </SlideContent>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}

export function Slide16({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive} className="p-0 lg:p-0">
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=luxury%20residential%20landscape&color=black&dpr=2"
          alt="Legacy"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <SlideContent delay={300}>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
            PARQUE DA <span className="text-primary">PRATA</span>
          </h1>
        </SlideContent>
        <SlideContent delay={800}>
          <p className="text-2xl md:text-4xl text-gray-200 font-light leading-relaxed">
            Um novo bairro.
            <br />
            Um novo patrimônio.
            <br />
            Um novo legado para Lençóis Paulista.
          </p>
        </SlideContent>
      </div>
    </SlideWrapper>
  )
}
