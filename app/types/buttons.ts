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

export type ButtonProps = {
  href: string
  color?: ButtonColors
  textStyle?: 'lowercase' | 'uppercase'
  children: React.ReactNode
}

export type ButtonGroupAlignment = 'right' | 'center' | 'left'

export type ButtonGroupProps = {
  children: React.ReactNode
  alignment?: ButtonGroupAlignment
  className?: string
}

export type ButtonParameters = {
  type: string
  label: string
  page?: {
    title: string
    slug: string
    status: string
  }
  url?: string
  style: ButtonColors
}

export type Button = {
  href: string | undefined
  text: string | undefined
  buttonStyle: ButtonColors
} | null
