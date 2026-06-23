import { Outlet } from 'react-router-dom'
import { usePresentation } from '@/hooks/use-presentation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Layout() {
  const { currentSlide, totalSlides, goToSlide } = usePresentation()
  const progress = ((currentSlide + 1) / totalSlides) * 100

  return (
    <main className="flex flex-col min-h-screen relative bg-background overflow-hidden">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 lg:px-12 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-primary drop-shadow-md">
            PARQUE DA PRATA
          </span>
        </div>
        <Button
          variant="outline"
          className="pointer-events-auto border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors glass-card rounded-none"
        >
          Agendar Reunião
        </Button>
      </header>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(197,160,89,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Side Navigation Dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 pointer-events-auto">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="group relative flex items-center justify-end p-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                currentSlide === i
                  ? 'bg-primary scale-150 gold-glow'
                  : 'bg-white/20 group-hover:bg-primary/50',
              )}
            />
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <Outlet />
    </main>
  )
}
