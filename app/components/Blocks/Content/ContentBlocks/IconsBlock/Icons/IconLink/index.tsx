import Button from '~/components/Button'
import type { ButtonColors } from '~/types/buttons'
import { setLinkColour } from './styles'

type IconLinkProps = {
  link: string
  linkStyle: string
  linkColour: string
  className?: string
}

const IconLink: React.FC<IconLinkProps> = ({ link, linkStyle, linkColour, className }) => {
  switch (linkStyle) {
    case 'button':
      return (
        <Button
          href={link}
          color={`button-${linkColour}` as ButtonColors}
          children='Learn More'
          className={className}
        />
      )
      break

    default:
      const colour = setLinkColour(linkColour)
      return (
        <a href={link} className={`inline-block text-lg font-medium ${colour} ${className}`}>
          Learn more
        </a>
      )
      break
  }
}

export default IconLink
