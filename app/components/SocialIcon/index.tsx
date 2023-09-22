import type { Props } from '~/types/social-icons'
import FacebookIcon from './facebook'
import InstagramIcon from './instagram'
import LinkedinIcon from './linkedin'
import TwitterkIcon from './twitter'
import YouTubeIcon from './youtube'

const SocialIcon: React.FC<Props> = ({ network, size = 'regular' }) => {
  switch (network) {
    case 'facebook':
      return <FacebookIcon size={size} />
      break

    case 'instagram':
      return <InstagramIcon size={size} />
      break

    case 'linkedin':
      return <LinkedinIcon size={size} />
      break

    case 'twitter':
      return <TwitterkIcon size={size} />
      break
    case 'youtube':
      return <YouTubeIcon size={size} />
      break
    default:
      break
  }
}

export default SocialIcon
