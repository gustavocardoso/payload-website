import type { BlockPaddingY } from '~/components/BlockContainer'
import type { Background } from '../background'
import type { ButtonColors } from '../buttons'

export type Alignment = 'right' | 'center' | 'left'
export type HeroType = 'centered' | 'two-columns' | 'page'
export type BackgroundOpacity = 'none' | '20' | '30' | '50'
export type BackgroundTextColor = 'light' | 'dark'

export type HeroProps = {
  props: HeroBlock
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

// type Button = {
//   text: string
//   link: string
//   style: string
// }

export type HeroButtonsProps = {
  buttons: HeroBlockButton[]
  alignment: Alignment
}

export type HeroBlockButton = {
  link: {
    type: 'custom' | 'page'
    label?: string
    url?: string
    page?: {
      title: string
      slug: string
      status: string
    }
  }
  style: ButtonColors
  id: string
}

export type HeroBlock = {
  type: HeroType
  title: string
  titleTag: string
  alignment: string
  description?: string
  buttons?: HeroBlockButton[]
  media?: {
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
  rotate?: boolean
  scale?: boolean
  shadow?: boolean
  grayscale?: boolean
  background: Background
  backgroundImage?: {
    url: string
  }
  backgroundOpacity?: string
  backgroundTextColor?: string
  padding?: BlockPaddingY
  page?: string
  pageUrl?: string
  anchor?: string
  id?: string
  blockType?: string
}
