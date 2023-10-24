type ImageProps = {
  src: string
  alt: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, className = undefined }) => {
  return <img src={src} alt={alt} loading='lazy' className={className} />
}

export default Image
