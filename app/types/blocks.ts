import type { Background } from './background'

export type BlockButton = {
  text: string
  link: string
  style: string
  id: string
}

export type HeroBlock = {
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
