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
    grayscale,
    rotate,
    scale,
    shadow
  }
}) => {
  const textColor = background === 'image' ? setTextColor(backgroundTextColor) : ''
  return (
    <div className={`hero ${heroContainer()}`}>
      <div className={`${heroContent()} ${textColor}`.trim()}>
        <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />
        <HeroDescription text={description} />

        {buttons && buttons.length > 0 && <HeroButtons buttons={buttons} alignment='center' />}

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
