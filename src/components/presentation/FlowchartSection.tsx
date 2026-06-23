import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Card } from '@/components/ui/card'
import { ArrowRight, Building2, Leaf, FileCheck, CheckCircle } from 'lucide-react'

export function Slide7Flowchart({ isActive }: { isActive: boolean }) {
  const steps = [
    { icon: Building2, title: 'Prefeitura', desc: 'Diretrizes' },
    { icon: Leaf, title: 'CETESB', desc: 'Licenciamento' },
    { icon: FileCheck, title: 'GRAPROHAB', desc: 'Aprovação Estadual' },
    { icon: Building2, title: 'Registro', desc: 'Cartório de Imóveis' },
  ]

  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-7xl mx-auto text-center">
        <SlideContent delay={100}>
          <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            O Caminho Legal
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">
            Jornada de Aprovações
          </h3>
        </SlideContent>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <SlideContent delay={300 + i * 200}>
                <Card className="glass-card w-48 h-48 flex flex-col items-center justify-center p-6 border-primary/20 hover:border-primary transition-colors">
                  <step.icon className="w-12 h-12 text-primary mb-4" strokeWidth={1} />
                  <h4 className="font-serif font-bold text-lg text-white">{step.title}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
                    {step.desc}
                  </p>
                </Card>
              </SlideContent>

              <SlideContent delay={400 + i * 200}>
                <ArrowRight className="w-8 h-8 text-primary/50 rotate-90 md:rotate-0" />
              </SlideContent>
            </div>
          ))}

          <SlideContent delay={1100}>
            <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-primary/20 border-2 border-primary text-primary animate-pulse shadow-[0_0_30px_rgba(197,160,89,0.3)]">
              <CheckCircle className="w-12 h-12 mb-2" />
              <span className="font-serif font-bold text-lg">Sucesso</span>
            </div>
          </SlideContent>
        </div>
      </div>
    </SlideWrapper>
  )
}
