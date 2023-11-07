import type { ImageSizes } from './blocks/content'

export type siteOptionsProps = {
  title: string
  adminEmail: string
  logo: {
    url: string
    alt: string
    title: string
  }
  fontAwesome: boolean
  fontAwesomeLink: string
  fontAwesomeOverride: string
}

export type SiteOptionsData = {
  General: {
    title: string
    adminEmail: string
    logo: {
      id: string
      title: string
      alt: string
      filename: string
      mimeType: string
      filesize: number
      width: number
      height: number
      sizes: ImageSizes
      createdAt: string
      updatedAt: string
      webp?: {
        filename: string
        mimeType: 'image/webp'
        sizes: ImageSizes
        url: string
      }
      url: string
    }
    fontAwesome: string
    fontAwesomeLink: string
    fontAwesomeOverride: string
  }

  Contact: {
    email: string
    phone: string
    address: string
    city: string
    country: string
  }

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

  id: string
  globalType: 'site-options'
  createdAt: string
  updatedAt: string
}
