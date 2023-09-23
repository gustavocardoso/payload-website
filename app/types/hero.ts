import type { ReactNode } from 'react'
import type { Background } from './background'

export type Alignment = 'right' | 'center' | 'left'
export type HeroType = 'centered' | 'two-columns'

export type HeroWrapperProps = {
  children: ReactNode
  background: string
}

export type Props = {
  props: {
    type: HeroType
    title: string
    titleTag: string
    description?: string
    alignment: Alignment
    media: string
    mediaAlt: string
    buttons?: Array<{ text: string; link: string; style: string }>
    background: Background
    effects?: {
      rotate: boolean
      scale: boolean
      shadow: boolean
      grayscale: boolean
    }
  }
}
