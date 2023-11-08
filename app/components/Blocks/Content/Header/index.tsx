import ContentSerialize from '~/components/ContentSerialize'

import type { HeadingAligment, HeadingColors } from '~/components/Common/Heading'
import Heading from '~/components/Common/Heading'

type ContentHeaderProps = {
  alignment: string
  grid: string
  subtitlePosition?: string
  title: {
    title?: string
    titleTag?: string
    titleColor?: HeadingColors
  }
  subtitle: {
    subtitle?: string
    subtitleTag?: string
    subtitleColor?: HeadingColors
  }
  content: []
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  alignment,
  grid,
  subtitlePosition,
  title: { title, titleTag, titleColor },
  subtitle: { subtitle, subtitleTag, subtitleColor },
  content
}) => {
  const titlePosition = subtitlePosition === 'below' ? 'order-1' : 'order-2'
  const subTitlePosition = subtitlePosition === 'below' ? 'order-2' : 'order-1'

  return (
    <div className={`content-header flex flex-col mb-20 ${alignment} ${grid}`.trim()}>
      {title !== undefined && (
        <Heading
          tag={titleTag!}
          content={title}
          color={titleColor}
          alignment={alignment as HeadingAligment}
          className={`${titlePosition}`.trim()}
        />
      )}

      {subtitle !== undefined && (
        <Heading
          tag={subtitleTag!}
          content={subtitle}
          color={subtitleColor}
          alignment={alignment as HeadingAligment}
          textStyle='none'
          className={`${subTitlePosition} !text-3xl`.trim()}
        />
      )}

      <div className='block-content order-3 mt-6'>
        <ContentSerialize content={content} />
      </div>
    </div>
  )
}

export default ContentHeader
