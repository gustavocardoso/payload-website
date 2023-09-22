export type ButtonColors =
  | 'button-light'
  | 'button-dark'
  | 'button-highlight'
  | 'button-primary'
  | 'button-secondary'
  | 'button-tertiary'
  | 'button-outline-light'
  | 'button-outline-dark'
  | 'button-outline-highlight'
  | 'button-outline-primary'
  | 'button-outline-secondary'
  | 'button-outline-tertiary'

export type Props = {
  href: string
  color?: ButtonColors
  textStyle?: 'lowercase' | 'uppercase'
  children: React.ReactNode
}

export type ButtonGroupProps = {
  children: React.ReactNode
  alignment?: 'right' | 'center' | 'left'
}
