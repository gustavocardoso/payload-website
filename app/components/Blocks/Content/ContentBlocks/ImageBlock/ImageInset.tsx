import Image from '~/components/Common/Image'
import { MediaSizes } from '~/types/media'
import imageBlockStyles from './styles'

const { imageContainer, imageElement, imageCaption } = imageBlockStyles()

type ImageInsetProps = {
  verticalImage: boolean
  media:
    | string
    | MediaSizes<
        'vertical' | 'verticalMedium' | 'verticalSmall' | 'card' | 'cardMedium' | 'cardSmall'
      >
    | null
  mediaType?: string
  alt?: string
}

const ImageInset: React.FC<ImageInsetProps> = ({ verticalImage, media, mediaType, alt }) => {
  let mediaURL

  if (mediaType === 'svg') {
    mediaURL = media
  } else if (typeof media === 'object') {
    mediaURL = verticalImage ? media?.vertical.url : media?.card.url
  }

  return (
    <div className={imageContainer()}>
      {mediaType === 'svg' ? (
        <Image src={String(media)} alt={alt} className={imageElement()} />
      ) : (
        <picture>
          {!verticalImage && media && typeof media === 'object' && (
            <>
              <source media='(min-width: 1000px)' srcSet={media.card.url} />
              <source media='(min-width: 800px)' srcSet={media?.cardMedium.url} />
              <Image
                src={media.cardSmall.url}
                alt={alt}
                className={imageElement()}
                loading='lazy'
              />
            </>
          )}

          {verticalImage && media && typeof media === 'object' && (
            <>
              <source
                media='(min-width: 1000px)'
                srcSet={media.vertical.url}
                width={media.vertical.width}
                height={media.vertical.height}
              />
              <source
                media='(min-width: 800px)'
                srcSet={media?.verticalMedium.url}
                width={media.verticalMedium.width}
                height={media.verticalMedium.height}
              />
              <Image
                src={media.verticalSmall.url}
                alt={alt}
                className={imageElement()}
                loading='lazy'
                width='100%'
                height='auto'
              />
            </>
          )}
        </picture>
      )}
    </div>
  )
}
export default ImageInset
