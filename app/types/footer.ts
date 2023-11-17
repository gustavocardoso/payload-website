import type { MenuItems } from './menu'
import type { siteOptionsProps } from './site-options'
import type { SocialLink } from './social-icons'

export type socialTypes = 'fa' | 'regular'

export type Props = {
  props: {
    copyright: string
    logoUrl: string
    logoAltText: string
    menu: MenuItems[]
  }
  siteOptions: siteOptionsProps
  socialLinks: SocialLink[]
}

export type FooterProps = {
  copyright: string
  logoUrl: string
  logoAltText: string
  menu: MenuItems[]
}
