import type { BlockPaddingY } from '~/components/BlockContainer'
import type { HeadingColors, HeadingProps } from '~/components/Common/Heading'
import type { Background } from '../background'

export type desktopContainerWidth = 'col-span-12' | 'col-span-10' | 'col-span-8' | 'col-span-6'

export type ImageSizes = {
  background: {
    url: string
    mimeType: string
  }
  blog: {
    url: string
    mimeType: string
  }
  hero: {
    url: string
    mimeType: string
  }
  card: {
    url: string
    mimeType: string
  }
  thumbnail: {
    url: string
    mimeType: string
  }
}
type ImageBlock = {
  image: {
    alt: string
    mimeType: string
    webp?: {
      filename: string
      mimeType: 'image/webp'
      sizes: ImageSizes
    }
    sizes: ImageSizes
  }
  caption: string
  id: string
  blockType: 'image-block'
}

type CopyBlock = {
  copy: Array<any> // You can define a more specific type for copy items
  id: string
  blockType: 'copy-block'
}

type HeadingBlock = Pick<HeadingProps, 'tag' | 'content' | 'textStyle' | 'alignment'> & {
  id: string
  blockType: 'heading-block'
}

type Layout = (ImageBlock | CopyBlock | HeadingBlock)[]

export type ContentBlock = {
  blockWIdth: string
  blockPadding: BlockPaddingY
  numberOfColumns: string
  desktopContainerWidth: desktopContainerWidth
  desktopContainerAlignment: string
  desktopContentAlignment: string
  headerBlockSize: string
  headerBlockAlignment: string
  title?: string
  titleTag?: string
  titleColor: HeadingColors
  subtitle?: string
  subtitleTag?: string
  subtitleColor: HeadingColors
  subtitlePosition?: string
  contentAlignment?: string
  content: []
  columnOne?: {
    layout: Layout
  }
  columnTwo?: {
    layout: Layout
  }
  background: Background
  backgroundImage?: {
    url: string
  }
  anchor?: string
  cssClasses?: string
  id: string
  blockType: string
}
