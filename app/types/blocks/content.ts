import type { BlockPaddingY } from '~/components/BlockContainer'
import type { Background } from '../background'

export type desktopContainerWidth = 'col-span-12' | 'col-span-10' | 'col-span-8' | 'col-span-6'

export interface ContentBlock {
  blockWIdth: string
  blockPadding: BlockPaddingY
  numberOfColumns: string
  desktopContainerWidth: desktopContainerWidth
  desktopContainerAlignment: string
  desktopContentAlignment: string
  blockSize: string
  blockAlignment: string
  title?: string
  titleTag?: string
  titleColor?: string
  subtitle?: string
  subtitleTag?: string
  subtitleColor?: string
  subtitlePosition?: string
  contentAlignment?: string
  content: []
  columnOne?: {
    layout: object[]
  }
  columnTwo?: {
    layout: object[]
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
