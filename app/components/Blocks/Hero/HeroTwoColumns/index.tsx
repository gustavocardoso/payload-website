import type { HeroProps, TitleTagOptions } from '~/types/blocks/hero'
import HeroButtons from '../HeroElements/buttons'
import HeroDescription from '../HeroElements/description'
import HeroImage from '../HeroElements/image'
import HeroTitle from '../HeroElements/title'

import { setButtonGroupAlignment, setTextAlignment, slots } from './styles'

const { heroContainer, heroContent, heroMedia } = slots()

const HeroTwoColumns: React.FC<HeroProps> = ({
  props: { title, titleTag, description, alignment = 'left', media, buttons, effects }
}) => {
  const buttonGroupAlignment = setButtonGroupAlignment(alignment)
  const textAlignment = setTextAlignment(alignment)

  return (
    <div className={`hero ${heroContainer()}`}>
      <div className={`${heroContent()} ${textAlignment}`}>
        <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />
        <HeroDescription text={description} />

        {buttons && buttons.length > 0 && (
          <HeroButtons buttons={buttons} alignment={buttonGroupAlignment} />
        )}
      </div>

      <div className={`hero-media ${heroMedia()}`}>
        <HeroImage media={media.url} mediaAlt={media.alt} effects={effects!} maxSize='full' />
      </div>
    </div>
  )
}

export default HeroTwoColumns