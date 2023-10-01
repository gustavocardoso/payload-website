import type { BlockPaddingY } from '~/components/BlockContainer'
import type { Background } from '../background'

export type Alignment = 'right' | 'center' | 'left'
export type HeroType = 'centered' | 'two-columns'
export type BackgroundOpacity = 'none' | '20' | '30' | '50'
export type BackgroundTextColor = 'light' | 'dark'

export interface HeroProps {
  props: HeroBlock
}

export type TitleTagOptions = 'h1' | 'h2'

export interface HeroTitleProps {
  title: string
  titleTag: TitleTagOptions
}

export interface HeroDescriptionProps {
  text: string | undefined
}

export interface HeroImageProps {
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

export interface HeroButtonsProps {
  buttons: Button[]
  alignment: Alignment
}

export type HeroBlockButton = {
  text: string
  link: string
  style: string
  id: string
}

export interface HeroBlock {
  type: string
  title: string
  titleTag: string
  alignment: string
  description: string
  buttons: HeroBlockButton[]
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
  padding?: BlockPaddingY
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
