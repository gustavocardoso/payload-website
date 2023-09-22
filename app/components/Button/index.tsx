import { Link } from '@remix-run/react'
import type { Props } from '~/types/buttons'

const Button: React.FC<Props> = ({
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
