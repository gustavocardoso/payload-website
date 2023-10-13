import { Link } from '@remix-run/react'
import type { VariantProps } from 'tailwind-variants'
// import type { ButtonProps } from '~/types/buttons'
import buttonStyles, { slots } from './styles'

type ButtonVariants = VariantProps<typeof buttonStyles>

export type ButtonProps = ButtonVariants & {
  href: string
  children: React.ReactNode
}

const { buttonContainer } = slots()

const Button: React.FC<ButtonProps> = ({
  href,
  color = 'button-light',
  textStyle = undefined,
  children
}) => {
  return (
    <Link to={href} className={buttonStyles({ color: color, textStyle: textStyle })}>
      <div className={buttonContainer()}>{children}</div>
    </Link>
  )
}

export default Button
