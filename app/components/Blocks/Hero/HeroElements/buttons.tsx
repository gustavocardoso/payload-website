import Button from '@ui/Button'
import ButtonGroup from '@ui/ButtonGroup'
import type { HeroButtonsProps } from '~/types/blocks/hero'
import type { ButtonColors, Button as ButtonElement } from '~/types/buttons'
import { createButton } from '~/utils/buttons'

const HeroButtons: React.FC<HeroButtonsProps> = ({ buttons, alignment }) => {
  const heroButtons: ButtonElement[] = buttons
    .map(({ link: { type, label = '', page, url = '' }, style }) => {
      return createButton({ type, label, page, url, style })
    })
    .filter(button => {
      if (button)
        return (
          button.text !== undefined && button.href !== undefined && button.buttonStyle !== undefined
        )

      return false
    })

  return (
    <ButtonGroup alignment={alignment}>
      {heroButtons.length > 0 &&
        heroButtons.map((button, index) => (
          <Button
            key={index}
            href={button?.href}
            color={button?.buttonStyle as ButtonColors}
            textStyle='uppercase'
          >
            {button?.text}
          </Button>
        ))}
    </ButtonGroup>
  )
}

export default HeroButtons
