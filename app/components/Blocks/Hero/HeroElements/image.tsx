import type { HeroImageProps } from '~/types/blocks/hero'

import { slots } from './styles'

const { heroImage } = slots()

const HeroImage: React.FC<HeroImageProps> = ({
  media,
  mediaAlt,
  effects: { grayscale, rotate, scale, shadow },
  maxSize
}) => {
  const rotateEffect = rotate ? 'group-hover:rotate-3' : null
  const scaleEffect = scale ? 'group-hover:scale-110' : null
  const shadowEffect = shadow ? 'group-hover:shadow-2xl' : null
  const grayscaleEffect = grayscale ? 'grayscale group-hover:grayscale-0' : null

  const imageEffects = [rotateEffect, scaleEffect, shadowEffect, grayscaleEffect].join(' ').trim()
  let imageMaxSize

  switch (maxSize) {
    case 'height':
      imageMaxSize = 'h-96'
      break
    case 'full':
      imageMaxSize = 'w-full'
      break

    default:
      break
  }

  return (
    <img
      className={`${imageEffects} ${imageMaxSize} ${heroImage()} duration-1000 ease-in-out`}
      src={media}
      alt={mediaAlt}
    />
  )
}

export default HeroImage
