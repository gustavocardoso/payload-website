import Button from '~/components/Button'
import type { ButtonColors } from '~/types/buttons'
import { createButton } from '~/utils/buttons'

type ButtonBlockProps = {
  link: {
    type: 'custom' | 'page'
    label?: string
    url?: string
    page?: {
      title: string
      slug: string
      status: string
    }
  }
  style: ButtonColors
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({
  link: { type, label = '', page, url = '' },
  style
}) => {
  const button = createButton({ type, label, page, url, style })

  return (
    <div className='button-block -mt-10'>
      <Button href={button?.href} color={button?.buttonStyle}>
        {button?.text}
      </Button>
    </div>
  )
}

export default ButtonBlock
