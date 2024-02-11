import { Media, MediaSizes } from '~/types/media'

type ImageFillProps = {
  fillClass: string
  verticalImage: boolean
  media:
    | string
    | MediaSizes<
        'vertical' | 'verticalMedium' | 'verticalSmall' | 'card' | 'cardMedium' | 'cardSmall'
      >
    | null
  mediaType?: string
}

const ImageFill: React.FC<ImageFillProps> = ({ fillClass, verticalImage, media, mediaType }) => {
  let mediaURL

  if (mediaType === 'svg') {
    mediaURL = media
  } else if (typeof media === 'object') {
    mediaURL = verticalImage ? media?.vertical.url : media?.card.url
  }

  return (
    <div className='h-full'>
      <div
        className={`${fillClass} h-full mx-auto bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${mediaURL})` }}
      ></div>
    </div>
  )
}
export default ImageFill
