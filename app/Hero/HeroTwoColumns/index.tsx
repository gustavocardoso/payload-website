import type { Alignment, Props, TitleTagOptions } from '~/types/hero'
import HeroButtons from '../HeroElements/buttons'
import HeroDescription from '../HeroElements/description'
import HeroImage from '../HeroElements/image'
import HeroTitle from '../HeroElements/title'

const HeroTwoColumns: React.FC<Props> = ({
  props: { title, titleTag, description, alignment, media, mediaAlt, buttons, effects }
}) => {
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
      <div className={`hero-content col-span-7 pr-8 ${textAlignment}`}>
        <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />
        <HeroDescription text={description} />

        {buttons && buttons.length > 0 && (
          <HeroButtons buttons={buttons} alignment={buttonGroupAlignment} />
        )}
      </div>

      <div className='hero-media flex items-center col-span-5 pl-8'>
        <HeroImage media={media} mediaAlt={mediaAlt} effects={effects!} maxSize='full' />
      </div>
    </div>
  )
}

export default HeroTwoColumns
