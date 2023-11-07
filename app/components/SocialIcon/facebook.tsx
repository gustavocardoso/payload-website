import type { IconProps } from '~/types/social-icons'

import socialIcon from './styles'

const FacebookIcon: React.FC<IconProps> = ({ size = 'regular', type = 'regular' }) => {
  switch (type) {
    case 'fa':
      return (
        <i className={`fa-brands fa-facebook-f ${socialIcon({ type: 'fa', size: 'regular' })}`}></i>
      )
      break

    default:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={socialIcon({ type, size })}
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
        </svg>
      )
      break
  }
}

export default FacebookIcon
