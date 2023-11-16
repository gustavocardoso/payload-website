import type { ButtonGroupProps } from '~/types/buttons'
import buttonGroupStyles from './styles'

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, alignment = 'left', className }) => {
  return <div className={buttonGroupStyles({ alignment, className })}>{children}</div>
}

export default ButtonGroup
