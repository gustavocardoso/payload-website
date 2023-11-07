import type { socialTypes } from './footer'

export type Props = {
  network: string
  size?: 'small' | 'regular' | 'large'
  type: socialTypes
}

export type IconProps = Pick<Props, 'size' | 'type'>
