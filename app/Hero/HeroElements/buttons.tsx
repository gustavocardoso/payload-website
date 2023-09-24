import Button from '~/components/Button'
import ButtonGroup from '~/components/ButtonGroup'
import type { ButtonColors } from '~/types/buttons'
import type { HeroButtonsProps } from '~/types/hero'

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
