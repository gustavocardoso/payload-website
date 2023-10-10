import type { BlockPaddingY } from '~/components/BlockContainer'
import type { HeadingColors, HeadingProps } from '~/components/Common/Heading'
import type { Background } from '../background'

export type desktopContainerWidth = 'col-span-12' | 'col-span-10' | 'col-span-8' | 'col-span-6'

interface ImageBlock {
  image: {
    id: string
    title: string
    alt: string
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    sizes: any // You can define a more specific type for sizes
    createdAt: string
    updatedAt: string
    url: string
  }
  caption: string
  id: string
  blockType: 'image-block'
}

interface CopyBlock {
  copy: Array<any> // You can define a more specific type for copy items
  id: string
  blockType: 'copy-block'
}

type HeadingBlock = Pick<HeadingProps, 'tag' | 'content' | 'textStyle' | 'alignment'> & {
  id: string
  blockType: 'heading-block'
}

type Layout = (ImageBlock | CopyBlock | HeadingBlock)[]

export interface ContentBlock {
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
