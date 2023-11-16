import Button from '~/components/Button'
import ButtonGroup from '~/components/ButtonGroup'
import Image from '~/components/Common/Image'
import type { Node } from '~/components/ContentSerialize'
import ContentSerialize from '~/components/ContentSerialize'
import type { ButtonColors, ButtonGroupAlignment, Button as ButtonProps } from '~/types/buttons'
import { ctaStyles } from '../styles'

export type CtaMediaTypeImage = {
  type: 'image'
  url: string
  alt: string
}

export type CtaMediaTypeVideo = {
  type: 'video'
  embed: string
}

type CtaWithMediaProps = {
  alignment: 'left' | 'center' | 'right'
  textColor: string
  title: string
  subtitle: string
  content: Node[]
  mediaType: 'image' | 'video'
  media: CtaMediaTypeImage | CtaMediaTypeVideo
  videoEmbed?: string
  contentPosition: string
  buttons: ButtonProps[]
}

function isImageMedia(media: CtaMediaTypeImage | CtaMediaTypeVideo): media is CtaMediaTypeImage {
  return media.type === 'image'
}

function isVideoMedia(media: CtaMediaTypeImage | CtaMediaTypeVideo): media is CtaMediaTypeVideo {
  return media.type === 'video'
}

const CtaWithMedia: React.FC<CtaWithMediaProps> = ({
  buttons,
  content,
  alignment,
  subtitle,
  textColor,
  title,
  mediaType,
  media,
  contentPosition
}) => {
  const mediaOrder = contentPosition === 'left' ? 'order-1' : 'order-2'
  const contentOrder = contentPosition === 'left' ? 'order-2' : 'order-1'

  return (
    <div className={ctaStyles({ media: true, alignment })}>
      <div className={`${mediaOrder} col-span-5 pr-8 flex flex-col justify-center`}>
        {mediaType === 'image' && isImageMedia(media) && <Image src={media.url} alt={media.alt} />}
        {mediaType === 'video' && isVideoMedia(media) && (
          <div
            className='video-container aspect-video w-full m-auto'
            dangerouslySetInnerHTML={{ __html: media.embed }}
          ></div>
        )}
      </div>

      <div className={`${contentOrder} col-span-7 pl-8 flex flex-col justify-center`}>
        <div className={`cta-header ${textColor}`.trim()}>
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}

          {content && content.length > 0 && content[0].children[0].text! !== '' && (
            <div className={`cta-content inline-block ${textColor}`.trim()}>
              <ContentSerialize content={content} />
            </div>
          )}
        </div>

        <ButtonGroup className='mt-8' alignment={alignment as ButtonGroupAlignment}>
          {buttons.length > 0 &&
            buttons.map((button, index) => (
              <Button
                key={index}
                href={button?.href}
                color={button?.buttonStyle as ButtonColors}
                textStyle='uppercase'
              >
                {button?.text}
              </Button>
            ))}
        </ButtonGroup>
      </div>
    </div>
  )
}

export default CtaWithMedia
