import type { BackgroundOpacity } from '~/components/BlockContainer'
import BlockContainer from '~/components/BlockContainer'
import type { CtaBlock } from '~/types/blocks/cta'
import { createButton } from '~/utils/buttons'
import CtaStandard from './CtaStandard'
import CtaWithButton from './CtaWithButton'
import type { CtaMediaTypeImage, CtaMediaTypeVideo } from './CtaWithMedia'
import CtaWithMedia from './CtaWithMedia'
import { ctaContainerStyles } from './styles'

type CtaProps = CtaBlock

const Cta: React.FC<CtaProps> = ({
  cta: {
    style,
    alignment,
    buttons,
    title,
    subtitle,
    content,
    background,
    backgroundImage,
    backgroundOpacity,
    size = 'fixed',
    spacing,
    ctaImage,
    contentPosition,
    videoEmbed,
    anchor,
    cssClasses = ''
  }
}) => {
  const textColor = background === 'image' ? 'text-light' : ''
  const ctaButtons = buttons.map(({ link: { type, label, page, url }, style }) =>
    createButton({ type, label, page, url, style })
  )

  let media

  if (style === 'image' && ctaImage) {
    media = {
      type: 'image',
      url: ctaImage.url,
      alt: ctaImage.alt
    }
  }

  if (style === 'video' && videoEmbed) {
    media = {
      type: 'video',
      embed: videoEmbed
    }
  }

  return (
    <div
      className={`cta-container cta-${style} ${cssClasses} ${ctaContainerStyles({
        size,
        spacing,
        rounded: size === 'fixed'
      })}`}
    >
      <BlockContainer
        id={anchor}
        paddingY='py-0'
        background={background}
        backgroundImage={backgroundImage}
        backgroundOpacity={backgroundOpacity as BackgroundOpacity}
      >
        {style === 'standard' && (
          <CtaStandard
            alignment={alignment}
            buttons={ctaButtons}
            content={content}
            subtitle={subtitle}
            title={title}
            textColor={textColor}
          />
        )}

        {(style === 'image' || style === 'video') && (
          <CtaWithMedia
            alignment={alignment}
            buttons={ctaButtons}
            content={content}
            subtitle={subtitle}
            title={title}
            textColor={textColor}
            media={media as CtaMediaTypeImage | CtaMediaTypeVideo}
            mediaType={style}
            contentPosition={contentPosition}
          />
        )}

        {style === 'button' && (
          <CtaWithButton
            alignment={alignment}
            buttons={ctaButtons}
            content={content}
            subtitle={subtitle}
            title={title}
            textColor={textColor}
            contentPosition={contentPosition}
          />
        )}
      </BlockContainer>
    </div>
  )
}
export default Cta
