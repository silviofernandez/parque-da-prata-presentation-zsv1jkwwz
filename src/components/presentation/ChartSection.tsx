import { SlideWrapper, SlideContent } from './SlideWrapper'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { ChartContainer } from '@/components/ui/chart'

const data = [
  { year: 'Ano 1', value: 10.1 },
  { year: 'Ano 3', value: 13.5 },
  { year: 'Ano 5', value: 16.7 },
  { year: 'Ano 7', value: 19.8 },
  { year: 'Ano 10', value: 24.2 },
]

export function Slide13({ isActive }: { isActive: boolean }) {
  return (
    <SlideWrapper isActive={isActive}>
      <div className="w-full max-w-6xl mx-auto h-[600px] flex flex-col">
        <SlideContent delay={100} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Projeção de Longo Prazo</h2>
          <p className="text-xl text-primary mt-4">Crescimento do Patrimônio (Em Milhões R$)</p>
        </SlideContent>

        <SlideContent delay={400} className="flex-1 w-full relative">
          <ChartContainer
            config={{ value: { label: 'Valor (R$ Milhões)', color: 'hsl(var(--primary))' } }}
            className="w-full h-full min-h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                  vertical={false}
                />
                <XAxis
                  dataKey="year"
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `R$ ${val}M`}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#142d27',
                    border: '1px solid rgba(197,160,89,0.3)',
                    borderRadius: '8px',
                  }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => [`R$ ${value} Milhões`, 'Valor Estimado']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </SlideContent>
      </div>
    </SlideWrapper>
  )
}
