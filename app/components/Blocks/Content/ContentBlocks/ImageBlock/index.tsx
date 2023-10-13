import type { ImageSizes } from '~/types/blocks/content'
import imageBlockStyles from './styles'

const { imageContainer, imageElement, imageCaption } = imageBlockStyles()

type ImageBlockProps = {
  image: {
    webp?: {
      filename: string
      mimeType: 'image/webp'
      sizes: ImageSizes
    }
    mimeType: string
    sizes: ImageSizes
    alt: string
  }
  caption: string
}

const ImageBlock: React.FC<ImageBlockProps> = ({ image, caption }) => {
  const imageURL = image.webp?.filename ? image.webp.sizes.hero.url : image.sizes.hero.url

  return (
    <div className={imageContainer()}>
      <img src={imageURL} alt={image.alt} loading='lazy' className={imageElement()} />
      {caption && <span className={imageCaption()}>{caption}</span>}
    </div>
  )
}

export default ImageBlock
