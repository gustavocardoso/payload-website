import Image from '~/components/Common/Image'
import { useMediaSizes } from '~/hooks/useMediaSizes'
import { Media } from '~/types/media'
import ImageFill from './ImageFill'
import ImageInset from './ImageInset'
import imageBlockStyles from './styles'

const { imageContainer, imageElement, imageCaption } = imageBlockStyles()

type ImageBlockProps = {
  image: Media
  caption: string
  settings: string
  verticalImage?: boolean
  fillContain?: boolean
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  image,
  caption,
  settings = 'inset',
  verticalImage = false,
  fillContain = false
}) => {
  const fillClass = settings === 'fill' && fillContain ? 'bg-contain' : 'bg-cover'
  const { media, mediaType } = useMediaSizes<
    'vertical' | 'verticalMedium' | 'verticalSmall' | 'card' | 'cardMedium' | 'cardSmall'
  >(image!)

  return settings === 'inset' ? (
    <>
      <ImageInset
        alt={image.alt}
        media={media!}
        verticalImage={verticalImage}
        mediaType={mediaType!}
      />
      {caption && <span className={imageCaption()}>{caption}</span>}
    </>
  ) : (
    <ImageFill
      fillClass={fillClass}
      media={media!}
      verticalImage={verticalImage}
      mediaType={mediaType!}
    />
  )
}

export default ImageBlock
