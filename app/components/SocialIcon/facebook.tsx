import type { IconProps } from '~/types/social-icons'

const FacebookIcon: React.FC<IconProps> = ({ size = 'regular' }) => {
  let iconSize = ''

  switch (size) {
    case 'regular':
      iconSize = 'h-6 w-6'
      break
    case 'large':
      iconSize = 'h-8 w-8'
      break
    case 'small':
      iconSize = 'h-4 w-4'
      break
    default:
      break
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={iconSize}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
    </svg>
  )
}

export default FacebookIcon
