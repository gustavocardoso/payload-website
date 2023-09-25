import type { ReactNode } from 'react'
import type { Background } from './background'

export type Alignment = 'right' | 'center' | 'left'
export type HeroType = 'centered' | 'two-columns'
export type BackgroundOpacity = 'none' | '20' | '30' | '50'
export type BackgroundTextColor = 'light' | 'dark'

export type HeroWrapperProps = {
  children: ReactNode
  background: string
  backgroundImage?: string
  backgroundOpacity?: BackgroundOpacity
  backgroundTextColor?: BackgroundTextColor
  id?: string
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
    backgroundImage?: string
    backgroundOpacity?: BackgroundOpacity
    backgroundTextColor?: BackgroundTextColor
    anchor?: string
    effects?: {
      rotate: boolean
      scale: boolean
      shadow: boolean
      grayscale: boolean
    }
  }
}

export type TitleTagOptions = 'h1' | 'h2'

export type HeroTitleProps = {
  title: string
  titleTag: TitleTagOptions
}

export type HeroDescriptionProps = {
  text: string | undefined
}

export type HeroImageProps = {
  media: string
  mediaAlt: string
  effects: {
    rotate: boolean
    scale: boolean
    shadow: boolean
    grayscale: boolean
  }
  maxSize: 'full' | 'height'
}

type Button = {
  text: string
  link: string
  style: string
}

export type HeroButtonsProps = {
  buttons: Button[]
  alignment: Alignment
}
