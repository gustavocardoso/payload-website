import type { ButtonGroupProps } from '~/types/buttons'

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, alignment = 'left' }) => {
  let alignmentClass

  switch (alignment) {
    case 'left':
      alignmentClass = 'justify-start'
      break

    case 'center':
      alignmentClass = 'justify-center'
      break

    case 'right':
      alignmentClass = 'justify-end'
      break

    default:
      break
  }
  return <div className={`hero-buttons mt-16 flex gap-x-6 ${alignmentClass}`}>{children}</div>
}

export default ButtonGroup
