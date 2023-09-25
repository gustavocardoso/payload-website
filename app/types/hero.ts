import type { ReactNode } from 'react'
import type { Background } from './background'
import type { BlockButton } from './blocks'

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

export type HeroProps = {
  props: {
    type: string
    title: string
    titleTag: string
    alignment: string
    description: string
    buttons: BlockButton[]
    media: {
      id: string
      title: string
      alt: string
      filename: string
      mimeType: string
      filesize: number
      width: number
      height: number
      sizes: {
        thumbnail: object
        card: object
        featured: object
        hero: {}
      }
      createdAt: string
      updatedAt: string
      url: string
    }
    background: Background
    backgroundImage?: {
      url: string
    }
    backgroundOpacity?: string
    backgroundTextColor?: string
    anchor?: string
    effects: {
      rotate: boolean
      scale: boolean
      shadow: boolean
      grayscale: boolean
    }
    id: string
    blockType: string
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
