import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Badge } from '@/components/ui/badge'

interface PhaseProps {
  isActive: boolean
  phaseNum: number
  title: string
  items: string[]
  bgImageQuery: string
}

export function GenericPhaseSlide({ isActive, phaseNum, title, items, bgImageQuery }: PhaseProps) {
  return (
    <SlideWrapper isActive={isActive}>
      <div className="absolute inset-0 z-0">
        <img
          src={`https://img.usecurling.com/p/1920/1080?q=${encodeURIComponent(bgImageQuery)}&color=black`}
          alt={`Fase ${phaseNum}`}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <SlideContent delay={100}>
            <Badge variant="outline" className="text-primary border-primary mb-6 bg-primary/10">
              FASE 0{phaseNum}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">{title}</h2>
          </SlideContent>

          <ul className="space-y-6">
            {items.map((item, i) => (
              <SlideContent key={i} delay={300 + i * 150}>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-xl text-gray-300 leading-snug">{item}</span>
                </li>
              </SlideContent>
            ))}
          </ul>
        </div>
        <div className="flex-1 hidden md:flex justify-end">
          <SlideContent delay={800}>
            <div className="text-9xl font-serif text-white/5 font-bold select-none">
              0{phaseNum}
            </div>
          </SlideContent>
        </div>
      </div>
    </SlideWrapper>
  )
}
