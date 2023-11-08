import type { MenuItems } from './menu'
import type { SocialLink } from './social-icons'

export type socialTypes = 'fa' | 'regular'

export type Props = {
  props: {
    copyright: string
    logoUrl: string
    logoAltText: string
    menu: MenuItems[]
  }
  socialType: socialTypes
  socialLinks: SocialLink[]
}

export type FooterProps = {
  copyright: string
  logoUrl: string
  logoAltText: string
  menu: MenuItems[]
}
