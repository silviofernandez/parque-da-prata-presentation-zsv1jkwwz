import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

interface PresentationContextType {
  currentSlide: number
  totalSlides: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined)

export function PresentationProvider({
  children,
  totalSlides,
}: {
  children: React.ReactNode
  totalSlides: number
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index)
      }
    },
    [totalSlides],
  )

  return (
    <PresentationContext.Provider
      value={{ currentSlide, totalSlides, nextSlide, prevSlide, goToSlide }}
    >
      {children}
    </PresentationContext.Provider>
  )
}

export function usePresentation() {
  const context = useContext(PresentationContext)
  if (context === undefined) {
    throw new Error('usePresentation must be used within a PresentationProvider')
  }
  return context
}
