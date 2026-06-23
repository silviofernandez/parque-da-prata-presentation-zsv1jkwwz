import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Zap, TrendingUp, Compass } from 'lucide-react'
import heroImage from '@/assets/img1454-3a72d.jpeg'

export function Slide1({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive} className="p-0 lg:p-0">
      <div className="absolute inset-0 z-0 bg-background">
        <img
          src={heroImage}
          alt="Parque da Prata Urbanism"
          className="w-full h-full object-cover opacity-50 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        <SlideContent delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight drop-shadow-2xl">
            PARQUE DA <span className="text-primary">PRATA</span>
          </h1>
        </SlideContent>
        <SlideContent delay={400}>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">
            Transformando potencial em patrimônio.
          </p>
        </SlideContent>
        <SlideContent delay={800} className="mt-12">
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent mx-auto animate-pulse" />
        </SlideContent>
      </div>
    </SlideWrapper>
  )
}

const OPPORTUNITIES = [
  { icon: MapPin, title: 'Localização', desc: 'Vetor de crescimento urbano em Lençóis Paulista.' },
  { icon: Zap, title: 'Integração', desc: 'Conexão inteligente com o tecido urbano existente.' },
  { icon: TrendingUp, title: 'Valor', desc: 'Potencial de valorização acima da média regional.' },
  { icon: Compass, title: 'Projeto', desc: 'Urbanismo contemporâneo focado em qualidade de vida.' },
]

export function Slide2({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <SlideContent delay={100}>
            <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              A Oportunidade
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              O Novo Eixo de <br />
              Desenvolvimento
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lençóis Paulista vive um momento histórico de expansão. O Parque da Prata não é apenas
              um loteamento, é uma intervenção urbana estratégica projetada para capturar e
              multiplicar o valor dessa transformação, criando um novo destino desejado na cidade.
            </p>
          </SlideContent>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {OPPORTUNITIES.map((opt, i) => (
            <SlideContent key={i} delay={300 + i * 150}>
              <Card className="glass-card hover-gold-glow transition-all duration-300 border-white/5 bg-white/5">
                <CardContent className="p-6">
                  <opt.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                  <h4 className="text-xl font-serif text-white mb-2">{opt.title}</h4>
                  <p className="text-sm text-gray-400">{opt.desc}</p>
                </CardContent>
              </Card>
            </SlideContent>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
