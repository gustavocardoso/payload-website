import { Link } from '@remix-run/react'
import type { ButtonProps } from '~/types/buttons'

const Button: React.FC<ButtonProps> = ({
  href,
  color = 'button-light',
  textStyle = 'lowercase',
  children
}) => {
  return (
    <Link to={href} className={`button ${color} ${textStyle}`}>
      {children}
    </Link>
  )
}

export default Button
