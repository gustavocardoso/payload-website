import { MegaphoneIcon } from '@heroicons/react/24/outline'
import type { ButtonProps } from '@ui/Button'
import Button from '@ui/Button'
// import type { RibbonProps } from '~/types/blocks/ribbon'

import BlockContainer from '@ui/BlockContainer'
import type { VariantProps } from 'tailwind-variants'
import type { Background } from '~/types/background'
import ribbonStyles from './styles'

type RibbonVariants = VariantProps<typeof ribbonStyles>

export type RibbonProps = {
  title: string
  text: string
  link?: string
  linkText?: string
  linkStyle?: string
  buttonStyle?: ButtonProps['color']
  background?: Background
  id: string
  blockType: string
} & RibbonVariants

const { ribbonContainer, ribbonTitle, ribbonText, ribbonTextLink } = ribbonStyles()

const Ribbon: React.FC<RibbonProps> = ({
  title,
  text,
  link = undefined,
  linkStyle = 'text',
  linkText = undefined,
  buttonStyle = undefined,
  background = 'light'
}) => {
  return (
    <BlockContainer paddingY='py-8' background={background}>
      <div className={ribbonContainer()}>
        {title && (
          <p className={ribbonTitle()}>
            <strong>{title}</strong>
          </p>
        )}

        {text && <p className={ribbonText()}>{text}</p>}

        {link && linkStyle === 'button' && (
          <Button href={link} color={buttonStyle}>
            <MegaphoneIcon className='w-8' />
            {linkText}
          </Button>
        )}

        {link && linkStyle === 'text' && (
          <a href={link} className={ribbonTextLink()}>
            <MegaphoneIcon className='w-8' />
            {linkText}
          </a>
        )}
      </div>
    </BlockContainer>
  )
}

export default Ribbon
