import type { socialTypes } from './footer'

export type Props = {
  network: string
  size?: 'small' | 'regular' | 'large'
  type: socialTypes
  url: string
}

export type IconProps = Pick<Props, 'size' | 'type'>

export type SocialLink = {
  network: string
  url: string
}
