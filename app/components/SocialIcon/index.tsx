import { Link } from '@remix-run/react'
import type { Props } from '~/types/social-icons'
import FacebookIcon from './facebook'
import InstagramIcon from './instagram'
import LinkedinIcon from './linkedin'
import TwitterkIcon from './twitter'
import YouTubeIcon from './youtube'

const SocialIcon: React.FC<Props> = ({ network, size = 'regular', type = 'regular', url }) => {
  switch (network.toLowerCase()) {
    case 'facebook':
      return (
        <Link to={url}>
          <FacebookIcon size={size} type={type} />
        </Link>
      )
      break

    case 'instagram':
      return (
        <Link to={url}>
          <InstagramIcon size={size} type={type} />
        </Link>
      )
      break

    case 'linkedin':
      return (
        <Link to={url}>
          <LinkedinIcon size={size} type={type} />
        </Link>
      )
      break

    case 'twitter':
      return (
        <Link to={url}>
          <TwitterkIcon size={size} type={type} />
        </Link>
      )
      break

    case 'youtube':
      return (
        <Link to={url}>
          <YouTubeIcon size={size} type={type} />
        </Link>
      )
      break
    default:
      break
  }
}

export default SocialIcon
