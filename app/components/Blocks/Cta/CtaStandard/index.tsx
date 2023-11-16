import Button from '~/components/Button'
import ButtonGroup from '~/components/ButtonGroup'
import ContentSerialize from '~/components/ContentSerialize'
import type { ButtonColors, ButtonGroupAlignment, Button as ButtonProps } from '~/types/buttons'
import { ctaStyles } from '../styles'

type CtaStandardProps = {
  alignment: 'left' | 'center' | 'right'
  textColor: string
  title: string
  subtitle: string
  content: []
  buttons: ButtonProps[]
}

const CtaStandard: React.FC<CtaStandardProps> = ({
  buttons,
  content,
  alignment,
  subtitle,
  textColor,
  title
}) => {
  return (
    <div className={ctaStyles({ alignment })}>
      <div className={`cta-header ${textColor}`.trim()}>
        {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}

        {content && content.length > 0 && (
          <div className={`cta-content inline-block w-3/4 ${textColor}`.trim()}>
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
  )
}

export default CtaStandard
