import type { HeroImageProps } from '~/types/blocks/hero'

import { useMediaSizes } from '~/hooks/useMediaSizes'
import { Media } from '~/types/media'
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
      imageMaxSize = 'h-80'
      break
    case 'full':
      imageMaxSize = 'w-full'
      break

    default:
      break
  }

  const { media: mediaObject, mediaType } = useMediaSizes<'hero' | 'heroMedium' | 'heroSmall'>(
    media!
  )

  return (
    <>
      {mediaType === 'svg' ? (
        <img
          className={`${imageEffects} ${imageMaxSize} ${heroImage()} duration-1000 ease-in-out`}
          src={String(mediaObject)}
          alt={mediaAlt}
        />
      ) : (
        <picture>
          {mediaObject && typeof mediaObject === 'object' && (
            <>
              <source media='(min-width: 1000px)' srcSet={mediaObject.hero.url} />
              <source media='(min-width: 800px)' srcSet={mediaObject?.heroMedium.url} />
              <img
                className={`${imageEffects} ${imageMaxSize} ${heroImage()} duration-1000 ease-in-out`}
                src={mediaObject?.heroSmall.url}
                alt={mediaAlt}
              />
            </>
          )}
        </picture>
      )}
    </>
  )
}

export default HeroImage
