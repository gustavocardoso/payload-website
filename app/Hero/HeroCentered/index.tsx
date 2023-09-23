import Button from '~/components/Button'
import ButtonGroup from '~/components/ButtonGroup'
import { ShowAfterFirstRender } from '~/components/ShowAfterFirstRender'
import type { ButtonColors } from '~/types/buttons'
import type { Props } from '~/types/hero'

const HeroTwoCentered: React.FC<Props> = ({
  props: { title, description, alignment, media, buttons, background, effects }
}) => {
  const { rotate, scale, shadow, grayscale } = effects!

  const rotateEffect = rotate ? 'group-hover:rotate-2' : null
  const scaleEffect = scale ? 'group-hover:scale-105' : null
  const shadowEffect = shadow ? 'group-hover:shadow-2xl' : null
  const grayscaleEffect = grayscale ? 'grayscale group-hover:grayscale-0' : null

  const heroEffects = [rotateEffect, scaleEffect, shadowEffect, grayscaleEffect].join(' ').trim()

  return (
    <div className='container grid grid-cols-12 px-8'>
      <div className='hero-content col-span-10 col-start-2'>
        <h1
          className={`text-current text-center text-6xl leading-tight font-semibold transition-all duration-500 ease-in-out group-hover:scale-105`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>

        <p className={`text-2xl text-center leading-normal mt-6`}>{description}</p>

        {buttons && buttons.length > 0 && (
          <ButtonGroup alignment='center'>
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

        <div className='hero-media flex justify-center mt-20'>
          <img
            className={`${heroEffects} max-h-96 ease-in-out transition-all duration-500`}
            src={media}
            alt='Business'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroTwoCentered
