import imageBlockStyles from './styles'

const { imageContainer, image, imageCaption } = imageBlockStyles()

interface ImageBlockProps {
  alt: string
  mimeType: string
  width: number
  height: number
  sizes: {
    tablet: {
      width: number
      height: number
      mimeType: string
      filesize: number
      filename: string
      url: string
    }
  }
  url: string
  caption: string
}

const ImageBlock: React.FC<ImageBlockProps> = ({ url, alt, sizes, caption }) => {
  return (
    <div className={imageContainer()}>
      <img src={sizes.tablet.url} alt={alt} loading='lazy' className={image()} />
      {caption && <span className={imageCaption()}>{caption}</span>}
    </div>
  )
}

export default ImageBlock
