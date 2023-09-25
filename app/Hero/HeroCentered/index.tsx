import type { HeroProps, TitleTagOptions } from '~/types/hero'
import HeroButtons from '../HeroElements/buttons'
import HeroDescription from '../HeroElements/description'
import HeroImage from '../HeroElements/image'
import HeroTitle from '../HeroElements/title'

const HeroTwoCentered: React.FC<HeroProps> = ({
  props: { title, titleTag, description, media, buttons, effects }
}) => {
  return (
    <div className='relative z-20 container grid grid-cols-12 px-8'>
      <div className='hero-content col-span-10 col-start-2 text-center'>
        <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />
        <HeroDescription text={description} />

        {buttons && buttons.length > 0 && <HeroButtons buttons={buttons} alignment='center' />}

        <div className='hero-media flex justify-center mt-20'>
          <HeroImage media={media.url} mediaAlt={media.alt} effects={effects!} maxSize='height' />
        </div>
      </div>
    </div>
  )
}

export default HeroTwoCentered
