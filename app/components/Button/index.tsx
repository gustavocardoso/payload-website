import type { VariantProps } from 'tailwind-variants'
// import type { ButtonProps } from '~/types/buttons'
import { Link } from '@remix-run/react'
import buttonStyles, { slots } from './styles'

type ButtonVariants = VariantProps<typeof buttonStyles>

export type ButtonProps = ButtonVariants & {
  href: string | undefined
  children: React.ReactNode
  className?: string
}

const { buttonContainer } = slots()

const Button: React.FC<ButtonProps> = ({
  href,
  color = 'button-light',
  textStyle = undefined,
  children,
  className
}) => {
  return (
    <Link
      to={href!}
      className={`button ${buttonStyles({
        color: color,
        textStyle: textStyle
      })} ${className}`.trim()}
    >
      <div className={buttonContainer()}>{children}</div>
    </Link>
  )
}

export default Button
