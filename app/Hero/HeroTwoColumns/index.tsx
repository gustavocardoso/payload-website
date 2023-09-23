import Button from '~/components/Button'
import ButtonGroup from '~/components/ButtonGroup'
import type { ButtonColors } from '~/types/buttons'
import type { Alignment, Props } from '~/types/hero'

const HeroTwoColumns: React.FC<Props> = ({
  props: { title, description, alignment, media, buttons, background, effects }
}) => {
  const { rotate, scale, shadow, grayscale } = effects!

  const rotateEffect = rotate ? 'group-hover:rotate-2' : null
  const scaleEffect = scale ? 'group-hover:scale-105' : null
  const shadowEffect = shadow ? 'group-hover:shadow-2xl' : null
  const grayscaleEffect = grayscale ? 'grayscale group-hover:grayscale-0' : null

  const heroEffects = [rotateEffect, scaleEffect, shadowEffect, grayscaleEffect].join(' ').trim()

  let buttonGroupAlignment: Alignment = 'left'
  let textAlignment

  switch (alignment) {
    case 'left':
      textAlignment = 'text-left'
      buttonGroupAlignment = 'left'
      break
    case 'center':
      textAlignment = 'text-center'
      buttonGroupAlignment = 'center'
      break
    case 'right':
      textAlignment = 'text-right'
      buttonGroupAlignment = 'right'
      break

    default:
      break
  }
  return (
    <div className='container grid grid-cols-12 px-8'>
      <div className='hero-content col-span-7 pr-8'>
        <h1
          className={`text-current ${textAlignment} text-6xl leading-tight font-semibold transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:ml-4`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>

        <p className={`text-2xl ${textAlignment} leading-normal mt-6`}>{description}</p>

        {buttons && buttons.length > 0 && (
          <ButtonGroup alignment={buttonGroupAlignment}>
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
        )}
      </div>

      <div className='hero-media flex items-center col-span-5 pl-8'>
        <img
          className={`${heroEffects} ease-in-out transition-all duration-500`}
          src={media}
          alt='Business'
        />
      </div>
    </div>
  )
}

export default HeroTwoColumns
