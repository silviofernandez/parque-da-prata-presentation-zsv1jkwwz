import { useEffect, useRef, useState } from 'react'
import { usePresentation } from '@/hooks/use-presentation'
import { Slide1, Slide2 } from '@/components/presentation/IntroSection'
import { Slide3 } from '@/components/presentation/VisionSection'
import { GenericPhaseSlide } from '@/components/presentation/PhasesSection'
import { Slide7Flowchart } from '@/components/presentation/FlowchartSection'
import { Slide9 } from '@/components/presentation/GovernanceSection'
import { Slide10, Slide11, Slide12 } from '@/components/presentation/FinancialsSection'
import { Slide13 } from '@/components/presentation/ChartSection'
import { Slide14, Slide15, Slide16 } from '@/components/presentation/ClosingSection'

const SCROLL_COOLDOWN = 1200 // ms between scroll events to prevent skipping

const Index = () => {
  const { currentSlide, nextSlide, prevSlide } = usePresentation()
  const isLockedRef = useRef(false)
  const touchStartY = useRef(0)

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (isLockedRef.current) return

    if (direction === 'next') nextSlide()
    else prevSlide()

    isLockedRef.current = true
    setTimeout(() => {
      isLockedRef.current = false
    }, SCROLL_COOLDOWN)
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return // Ignore small trackpad movements
      handleNavigation(e.deltaY > 0 ? 'next' : 'prev')
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'Space', 'PageDown'].includes(e.code)) {
        handleNavigation('next')
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.code)) {
        handleNavigation('prev')
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const deltaY = touchStartY.current - touchEndY

      if (Math.abs(deltaY) > 50) {
        // minimum swipe distance
        handleNavigation(deltaY > 0 ? 'next' : 'prev')
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, prevSlide])

  return (
    <div className="flex-1 w-full h-screen relative">
      <Slide1 isActive={currentSlide === 0} />
      <Slide2 isActive={currentSlide === 1} />
      <Slide3 isActive={currentSlide === 2} />

      <GenericPhaseSlide
        isActive={currentSlide === 3}
        phaseNum={1}
        title="Estudos e Viabilidade"
        items={[
          'Levantamento topográfico completo',
          'Estudos ambientais e hidrológicos',
          'Concepção do Masterplan inicial',
        ]}
        bgImageQuery="architecture%20blueprints"
      />
      <GenericPhaseSlide
        isActive={currentSlide === 4}
        phaseNum={2}
        title="Projetos Urbanísticos"
        items={[
          'Projeto geométrico e pavimentação',
          'Redes de água, esgoto e drenagem',
          'Paisagismo e áreas de lazer',
        ]}
        bgImageQuery="urban%20planning"
      />
      <GenericPhaseSlide
        isActive={currentSlide === 5}
        phaseNum={3}
        title="Protocolos Oficiais"
        items={[
          'Montagem dos dossiês técnicos',
          'Protocolo na Prefeitura Municipal',
          'Início do trâmite ambiental',
        ]}
        bgImageQuery="legal%20documents"
      />

      <Slide7Flowchart isActive={currentSlide === 6} />

      <GenericPhaseSlide
        isActive={currentSlide === 7}
        phaseNum={5}
        title="Obras e Lançamento"
        items={[
          'Mobilização de canteiro de obras',
          'Execução de terraplenagem',
          'Evento oficial de lançamento e vendas',
        ]}
        bgImageQuery="construction%20site"
      />

      <Slide9 isActive={currentSlide === 8} />
      <Slide10 isActive={currentSlide === 9} />
      <Slide11 isActive={currentSlide === 10} />
      <Slide12 isActive={currentSlide === 11} />
      <Slide13 isActive={currentSlide === 12} />
      <Slide14 isActive={currentSlide === 13} />
      <Slide15 isActive={currentSlide === 14} />
      <Slide16 isActive={currentSlide === 15} />
    </div>
  )
}

export default Index
