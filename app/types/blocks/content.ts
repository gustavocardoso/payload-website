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
      url: string
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

type IconsBlock = {
  style: string
  iconsPerLine: string
  textIconAlignment: string
  linkStyle: string
  linkColour: string
  icons: [
    {
      iconType: string
      iconImage: {
        title: 'BoardBig'
        alt: 'BoardBig'
        webp?: {
          mimeType: 'image/webp'
          url: string
        }
        mimeType: 'image/svg+xml'
        url: 'http://localhost:3000/media/Growth-Artboard-1.svg'
      }
      title: string
      description: string
      id: string
    }
  ]
  blockType: 'icons-block'
}

type HeadingBlock = Pick<HeadingProps, 'tag' | 'content' | 'textStyle' | 'alignment'> & {
  id: string
  blockType: 'heading-block'
}

type QuoteBlock = {
  testimonial: {
    title: string
    text: string
    author: string
    authorTitle: string
    company: string
  }
  id: string
  blockType: 'quote-block'
}

type VideoBlock = {
  videoEmbed: string
  caption: string
  id: string
  blockType: 'video-block'
}

type ButtonBlock = {
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
  style: string
  id: string
  blockType: 'button-block'
}

export type BlockLayout = (
  | ImageBlock
  | CopyBlock
  | HeadingBlock
  | IconsBlock
  | QuoteBlock
  | VideoBlock
  | ButtonBlock
)[]

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
    columnOneLayout: BlockLayout
  }
  columnTwo?: {
    columnTwoLayout: BlockLayout
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
