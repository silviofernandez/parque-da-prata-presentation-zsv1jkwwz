import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Shield, Lock, ShieldCheck } from 'lucide-react'

export function Slide9({ isActive }: { isActive: boolean }) {
  const cards = [
    {
      icon: Shield,
      title: 'SPE Exclusiva',
      desc: 'Sociedade de Propósito Específico, garantindo isolamento patrimonial e segurança jurídica total para o projeto.',
    },
    {
      icon: Lock,
      title: 'Patrimônio de Afetação',
      desc: 'Recursos vinculados exclusivamente à execução da obra, protegendo o investimento contra riscos externos.',
    },
    {
      icon: ShieldCheck,
      title: 'Seguro Garantia',
      desc: 'Apólice robusta assegurando a entrega da infraestrutura no prazo e com a qualidade estabelecida.',
    },
  ]

  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SlideContent delay={100}>
            <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Premium Trust
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Governança e Segurança</h3>
          </SlideContent>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <SlideContent key={i} delay={300 + i * 200}>
              <div className="glass-card p-8 h-full rounded-2xl flex flex-col items-center text-center hover-gold-glow transition-all duration-500 bg-white/5 border-t border-white/10 group">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <card.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif text-white mb-4">{card.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </SlideContent>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
