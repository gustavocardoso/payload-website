type ImageProps = {
  src: string
  alt: string
  className?: string
  width?: string
}

const Image: React.FC<ImageProps> = ({ src, alt, className = undefined, width = '100%' }) => {
  return <img src={src} alt={alt} loading='lazy' className={className} width={width} />
}

export default Image
