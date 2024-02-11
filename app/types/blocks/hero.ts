import type { BlockPaddingY } from '~/components/BlockContainer'
import { Media } from '~/types/media'
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
  media?: Media
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
  media?: Media
  rotate?: boolean
  scale?: boolean
  shadow?: boolean
  grayscale?: boolean
  background: Background
  backgroundImage?: Media
  backgroundOpacity?: string
  backgroundTextColor?: string
  padding?: BlockPaddingY
  page?: string
  pageUrl?: string
  anchor?: string
  id?: string
  blockType?: string
}
