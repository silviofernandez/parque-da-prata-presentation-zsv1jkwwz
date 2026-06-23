import { SlideWrapper, SlideContent } from './SlideWrapper'
import { Card } from '@/components/ui/card'

export function Slide3({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive} className="p-0 lg:p-0">
      <div className="absolute inset-0 z-0 bg-background">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=aerial%20view%20of%20green%20cities&color=black"
          alt="Masterplan Vision"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-24 py-24 flex flex-col justify-center h-full">
        <SlideContent delay={100} className="max-w-xl">
          <h2 className="text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            A Visão
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Masterplan Estratégico
          </h3>
        </SlideContent>

        <div className="relative flex-1 w-full mt-8">
          {/* Mock Interactive Map Area */}
          <div className="absolute inset-0 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-center opacity-20">
              <div className="w-[800px] h-[800px] border border-primary/30 rounded-full animate-[spin_60s_linear_infinite] border-dashed" />
              <div className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            </div>

            {/* Hotspots */}
            <Hotspot
              x={30}
              y={40}
              title="Parque Linear"
              desc="Mais de 50.000m² de área verde preservada."
              delay={400}
            />
            <Hotspot
              x={60}
              y={30}
              title="Nova Avenida"
              desc="Eixo comercial integrando o bairro ao centro."
              delay={600}
            />
            <Hotspot
              x={45}
              y={70}
              title="A Ponte"
              desc="Conexão vital que viabiliza o fluxo contínuo."
              delay={800}
            />
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

function Hotspot({
  x,
  y,
  title,
  desc,
  delay,
}: {
  x: number
  y: number
  title: string
  desc: string
  delay: number
}) {
  return (
    <SlideContent delay={delay} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
      <div className="group relative">
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(197,160,89,1)] cursor-pointer" />
        <Card className="absolute left-6 top-1/2 -translate-y-1/2 w-64 p-4 glass-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <h4 className="text-white font-serif font-bold text-lg">{title}</h4>
          <p className="text-sm text-gray-300 mt-1">{desc}</p>
        </Card>
      </div>
    </SlideContent>
  )
}
