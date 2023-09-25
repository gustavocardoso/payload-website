import type { ButtonColors } from '../buttons'

export type RibbonBlockBackground = 'alert' | 'highlight'

export type RibbonBlock = {
  title: string
  text: string
  link?: string
  linkText?: string
  linkStyle?: string
  buttonStyle?: ButtonColors
  background?: RibbonBlockBackground
  id: string
  blockType: string
}

export type RibbonProps = {
  props: RibbonBlock
}
