import Button from '~/components/Button'
import ButtonGroup from '~/components/ButtonGroup'
import type { Node } from '~/components/ContentSerialize'
import ContentSerialize from '~/components/ContentSerialize'
import type { ButtonColors, ButtonGroupAlignment, Button as ButtonProps } from '~/types/buttons'
import { ctaStyles } from '../styles'

type CtaWithButtonProps = {
  alignment: 'left' | 'center' | 'right'
  textColor: string
  title: string
  subtitle: string
  content: Node[]
  contentPosition: string
  buttons: ButtonProps[]
}

const CtaWithButton: React.FC<CtaWithButtonProps> = ({
  buttons,
  content,
  alignment,
  subtitle,
  textColor,
  title,
  contentPosition
}) => {
  const button = contentPosition === 'right' ? 'order-1' : 'order-2'
  const contentOrder = contentPosition === 'right' ? 'order-2' : 'order-1'

  return (
    <div className={ctaStyles({ button: true, alignment })}>
      <div className={`${contentOrder} col-span-7 pl-8 flex flex-col justify-center`}>
        <div className={`cta-header ${textColor}`.trim()}>
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}
        </div>

        {content && content.length > 0 && (
          <div>
            <div className={`cta-content inline-block ${textColor}`.trim()}>
              <ContentSerialize content={content} />
            </div>
          </div>
        )}
      </div>

      <div className={`${button} col-span-5 pr-8 flex flex-col justify-center items-end`}>
        <ButtonGroup className='mt-0' alignment={alignment as ButtonGroupAlignment}>
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

export default CtaWithButton
