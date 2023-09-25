import type { Background } from './background'

export type Layout = {
  id: string
  blockType: string
}

export type Doc = {
  id: string
  title: string
  layout: Layout[]
  status: string
  pageMeta: {
    title: string
    description: string
    keywords: string
  }
  createdAt: string
  updatedAt: string
  meta: {
    title: string
    image: object
    keywords: string
  }
  slug: string
}

export type Docs = {
  docs: Doc[]
}

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
