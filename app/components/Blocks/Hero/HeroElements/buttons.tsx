import Button from '@ui/Button'
import ButtonGroup from '@ui/ButtonGroup'
import type { HeroButtonsProps } from '~/types/blocks/hero'
import type { ButtonColors } from '~/types/buttons'

const HeroButtons: React.FC<HeroButtonsProps> = ({ buttons, alignment }) => {
  return (
    <ButtonGroup alignment={alignment}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          href={button.link}
          color={button.style as ButtonColors}
          textStyle='uppercase'
        >
          {button.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default HeroButtons
