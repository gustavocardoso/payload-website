import type { BackgroundOpacity } from '~/components/BlockContainer'
import type { Background } from '../background'
import type { ButtonColors } from '../buttons'

export type CtaSizes = 'fixed' | 'full'
export type CtaSpacing = 'padding' | 'no-padding'
export type CtaContentPosition = 'left' | 'right'

export type CtaButton = {
  link: {
    type: string
    label: string
    page?: {
      title: string
      slug: string
      status: string
    }
    url?: string | undefined
  }
  style: ButtonColors
}

export type CtaBlock = {
  cta: {
    id: string
    style: string
    alignment: 'left' | 'center' | 'right'
    size: CtaSizes
    spacing: CtaSpacing
    title: string
    content: []
    buttons: CtaButton[]
    createdAt: string
    updatedAt: string
    subtitle: string
    background: Background
    backgroundImage: {
      url: string
    }
    backgroundOpacity: BackgroundOpacity
    ctaImage: {
      url: string
      alt: string
    }
    videoEmbed: string
    contentPosition: CtaContentPosition
    anchor: string
    cssClasses: string
  }
  id: string
  blockType: 'cta-block'
}
