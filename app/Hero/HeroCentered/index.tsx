import type { Props, TitleTagOptions } from '~/types/hero'
import HeroButtons from '../HeroElements/buttons'
import HeroDescription from '../HeroElements/description'
import HeroImage from '../HeroElements/image'
import HeroTitle from '../HeroElements/title'

const HeroTwoCentered: React.FC<Props> = ({
  props: { title, titleTag, description, media, mediaAlt, buttons, effects }
}) => {
  return (
    <div className='container grid grid-cols-12 px-8'>
      <div className='hero-content col-span-10 col-start-2 text-center'>
        <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />
        <HeroDescription text={description} />

        {buttons && buttons.length > 0 && <HeroButtons buttons={buttons} alignment='center' />}

        <div className='hero-media flex justify-center mt-20'>
          <HeroImage media={media} mediaAlt={mediaAlt} effects={effects!} maxSize='height' />
        </div>
      </div>
    </div>
  )
}

export default HeroTwoCentered
