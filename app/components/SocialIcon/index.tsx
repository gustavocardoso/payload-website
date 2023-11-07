import type { Props } from '~/types/social-icons'
import FacebookIcon from './facebook'
import InstagramIcon from './instagram'
import LinkedinIcon from './linkedin'
import TwitterkIcon from './twitter'
import YouTubeIcon from './youtube'

const SocialIcon: React.FC<Props> = ({ network, size = 'regular', type = 'regular' }) => {
  switch (network) {
    case 'facebook':
      return <FacebookIcon size={size} type={type} />
      break

    case 'instagram':
      return <InstagramIcon size={size} type={type} />
      break

    case 'linkedin':
      return <LinkedinIcon size={size} type={type} />
      break

    case 'twitter':
      return <TwitterkIcon size={size} type={type} />
      break
    case 'youtube':
      return <YouTubeIcon size={size} type={type} />
      break
    default:
      break
  }
}

export default SocialIcon
