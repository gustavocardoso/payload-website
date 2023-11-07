import type { MenuItems } from './menu'

export type socialTypes = 'fa' | 'regular'

export type Props = {
  props: {
    copyright: string
    logoUrl: string
    logoAltText: string
    menu: MenuItems[]
  }
  socialType: socialTypes
}

export type FooterProps = {
  copyright: string
  logoUrl: string
  logoAltText: string
  menu: MenuItems[]
}
