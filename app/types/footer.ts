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
