import type { MenuItems } from './menu'

export type Props = {
  props: {
    copyright: string
    logoUrl: string
    logoAltText: string
    menu: MenuItems[]
  }
}

export type FooterProps = {
  copyright: string
  logoUrl: string
  logoAltText: string
  menu: MenuItems[]
}

export type FooterData = {
  Footer: {
    copyright: string
    footerLogo: {
      id: string
      title: string
      alt: string
      filename: string
      mimeType: string
      filesize: number
      width: number
      height: number
      createdAt: string
      updatedAt: string
      sizes: { thumbnail: {} }
      url: string
    }
  }
}
