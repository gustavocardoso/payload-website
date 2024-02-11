type ImageProps = {
  src: string
  alt?: string
  className?: string
  width?: number | string
  height?: number | string
  loading?: 'lazy' | 'eager' | undefined
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = undefined,
  width = '100%',
  height,
  loading = 'lazy'
}) => {
  const imageProps = {
    src,
    alt,
    loading,
    className,
    // Add width and height attributes conditionally
    ...(width && { width }),
    ...(height && { height })
  }
  return <img {...imageProps} alt={alt} />
}

export default Image
