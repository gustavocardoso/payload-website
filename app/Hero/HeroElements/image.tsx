import type { HeroImageProps } from '~/types/hero'

const HeroImage: React.FC<HeroImageProps> = ({ media, mediaAlt, effects, maxSize }) => {
  const { rotate, scale, shadow, grayscale } = effects!
  const rotateEffect = rotate ? 'group-hover:rotate-2' : null
  const scaleEffect = scale ? 'group-hover:scale-105' : null
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
      className={`${imageEffects} ${imageMaxSize} ease-in-out transition-all duration-500`}
      src={media}
      alt={mediaAlt}
    />
  )
}

export default HeroImage
