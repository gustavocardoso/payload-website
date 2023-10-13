import type { VariantProps } from 'tailwind-variants'
import headingStyles from './styles'

type HeadingVariants = VariantProps<typeof headingStyles>

export type HeadingColors = NonNullable<Pick<HeadingVariants, 'color'>['color']>
export type HeadingAligment = 'left' | 'center' | 'right'

export type HeadingProps = HeadingVariants & {
  tag: string
  content: string
  alignment?: HeadingAligment
  className?: string
}

const Heading: React.FC<HeadingProps> = ({
  tag,
  content,
  color,
  textStyle = 'none',
  alignment = 'left',
  className
}) => {
  const CustomTag = `${tag.toLowerCase()}` as keyof JSX.IntrinsicElements

  return (
    <CustomTag
      className={headingStyles({
        color: color,
        textStyle: textStyle,
        alignment: alignment,
        class: className
      })}
      dangerouslySetInnerHTML={{ __html: content }}
    ></CustomTag>
  )
}

export default Heading
