import Button from '@ui/Button'
import ButtonGroup from '@ui/ButtonGroup'
import type { HeroButtonsProps } from '~/types/blocks/hero'
import type { ButtonColors } from '~/types/buttons'

type Button = {
  href: string | undefined
  text: string | undefined
  buttonStyle: string | undefined
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ buttons, alignment }) => {
  const heroButtons: Button[] = buttons
    .map(({ link: { type, label, page, url }, style }) => {
      let text
      let href
      let buttonStyle

      switch (type) {
        case 'page':
          if (page?.status === 'published') {
            text = label ? label : page?.title
            href = `/${page?.slug}`
            buttonStyle = style
          } else {
            text = undefined
            href = undefined
            buttonStyle = undefined
          }
          break

        case 'custom':
          text = label
          href = url
          buttonStyle = style
          break
      }

      return { text, href, buttonStyle }
    })
    .filter(
      button =>
        button.text !== undefined && button.href !== undefined && button.buttonStyle !== undefined
    )

  return (
    <ButtonGroup alignment={alignment}>
      {heroButtons.map((button, index) => (
        <Button
          key={index}
          href={button.href!}
          color={button.buttonStyle as ButtonColors}
          textStyle='uppercase'
        >
          {button.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default HeroButtons
