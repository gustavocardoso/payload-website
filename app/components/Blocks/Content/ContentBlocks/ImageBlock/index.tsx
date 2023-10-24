import Image from '~/components/Common/Image'
import type { ImageSizes } from '~/types/blocks/content'
import imageBlockStyles from './styles'

const { imageContainer, imageElement, imageCaption } = imageBlockStyles()

type ImageBlockProps = {
  image: {
    webp?: {
      filename: string
      mimeType: 'image/webp'
      sizes: ImageSizes
      url: string
    }
    mimeType: string
    sizes: ImageSizes
    alt: string
  }
  caption: string
}

const ImageBlock: React.FC<ImageBlockProps> = ({ image, caption }) => {
  const imageURL = image.webp?.filename ? image.webp.url : image.sizes.card.url

  return (
    <div className={imageContainer()}>
      <Image src={imageURL} alt={image.alt} className={imageElement()} />
      {caption && <span className={imageCaption()}>{caption}</span>}
    </div>
  )
}

export default ImageBlock
