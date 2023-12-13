import type { HeroProps, TitleTagOptions } from '~/types/blocks/hero'
import HeroButtons from '../HeroElements/buttons'
import HeroDescription from '../HeroElements/description'
import HeroImage from '../HeroElements/image'
import HeroTitle from '../HeroElements/title'

import { setTextColor } from '../styles'
import { slots } from './styles'

const { heroContainer, heroContent, heroMedia } = slots()

const HeroCentered: React.FC<HeroProps> = ({
  props: {
    title,
    titleTag,
    description,
    media,
    buttons,
    background,
    backgroundTextColor,
    grayscale = false,
    rotate = false,
    scale = false,
    shadow = false
  }
}) => {
  const textColor = background === 'image' ? setTextColor(backgroundTextColor) : ''
  return (
    <div className={`hero ${heroContainer()}`}>
      <div className={`${heroContent()} ${textColor}`.trim()}>
        {title && <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />}
        {description && <HeroDescription text={description} />}

        {buttons && buttons.length > 0 && (
          <div className='mb-20'>
            <HeroButtons buttons={buttons} alignment='center' />
          </div>
        )}

        {media && (
          <div className={`hero-media ${heroMedia()}`}>
            <HeroImage
              media={media?.url}
              mediaAlt={media?.alt}
              effects={{ grayscale, rotate, scale, shadow }}
              maxSize='height'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroCentered
