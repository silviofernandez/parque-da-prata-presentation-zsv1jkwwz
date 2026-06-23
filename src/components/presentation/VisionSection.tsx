import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Check } from 'lucide-react'
import visionImage from '@/assets/img1443-772c7.png'

export function Slide3({ isActive }: { isActive: boolean }) {
  const items = [
    'Parque Linear',
    'Ponte de acesso',
    'Nova avenida',
    'Infraestrutura completa',
    'Qualidade de vida',
  ]

  return (
    <SlideWrapper isActive={isActive} className="p-0 lg:p-0">
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-2/5 p-8 lg:p-16 xl:p-24 flex flex-col justify-center h-full bg-background/95 z-20 shadow-2xl">
          <SlideContent delay={100}>
            <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-6">
              A VISÃO
            </h2>
            <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-12">
              Criar um novo bairro planejado, integrado à natureza e conectado à cidade.
            </p>
          </SlideContent>

          <div className="space-y-6">
            {items.map((item, i) => (
              <SlideContent key={i} delay={300 + i * 150}>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white text-lg tracking-wide">{item}</span>
                </div>
              </SlideContent>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-3/5 h-full relative bg-[#0a0f0d]">
          <SlideContent delay={400} className="w-full h-full flex items-center justify-center">
            <img
              src={visionImage}
              alt="Parque da Prata - Projeto Urbanístico"
              className="w-full h-full object-contain p-4 md:p-8 opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </SlideContent>
        </div>
      </div>
    </SlideWrapper>
  )
}
