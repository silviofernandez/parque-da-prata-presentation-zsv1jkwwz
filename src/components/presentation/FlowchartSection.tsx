import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Card } from '@/components/ui/card'
import {
  FileText,
  PenTool,
  ClipboardCheck,
  Building,
  CheckSquare,
  BookOpen,
  DollarSign,
  CheckCircle,
} from 'lucide-react'

export function Slide7Flowchart({ isActive }: { isActive: boolean }) {
  const steps = [
    { icon: FileText, title: 'Diretrizes' },
    { icon: PenTool, title: 'Projetos' },
    { icon: ClipboardCheck, title: 'Aprovação prévia' },
    { icon: Building, title: 'GRAPROHAB e órgãos estaduais' },
    { icon: CheckSquare, title: 'Aprovação definitiva' },
    { icon: BookOpen, title: 'Registro' },
    { icon: DollarSign, title: 'Venda' },
  ]

  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-7xl mx-auto text-center px-4">
        <SlideContent delay={100}>
          <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            O Caminho Legal
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-12">Aprovações</h3>
        </SlideContent>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-center max-w-5xl mx-auto pb-8">
          {steps.map((step, i) => (
            <SlideContent key={i} delay={300 + i * 100}>
              <Card className="glass-card h-full min-h-[140px] flex flex-col items-center justify-center p-4 border-primary/20 hover:border-primary transition-colors">
                <step.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="font-serif font-medium text-sm md:text-base text-white text-center leading-tight">
                  {step.title}
                </h4>
              </Card>
            </SlideContent>
          ))}

          <SlideContent delay={300 + steps.length * 100}>
            <div className="flex flex-col items-center justify-center h-full min-h-[140px] rounded-xl bg-primary/20 border-2 border-primary text-primary shadow-[0_0_20px_rgba(197,160,89,0.2)] p-4">
              <CheckCircle className="w-8 h-8 mb-2" />
              <span className="font-serif font-bold text-sm text-center leading-tight">
                Empreendimento aprovado e registrado.
              </span>
            </div>
          </SlideContent>
        </div>
      </div>
    </SlideWrapper>
  )
}
