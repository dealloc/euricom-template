import type { ReactNode } from 'react'
import { Slide as RevealSlide, Stack } from '@revealjs/react'

interface SlideProps {
  children: ReactNode
  /** vertical sub-slides */
  subSlides?: ReactNode[]
}

export function Slide({ children, subSlides }: SlideProps) {
  if (subSlides && subSlides.length > 0) {
    return (
      <Stack>
        <RevealSlide>{children}</RevealSlide>
        {subSlides.map((sub, i) => (
          <RevealSlide key={i}>{sub}</RevealSlide>
        ))}
      </Stack>
    )
  }

  return <RevealSlide>{children}</RevealSlide>
}
