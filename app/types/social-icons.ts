export type Props = {
  network: string
  size?: 'small' | 'regular' | 'large'
}

export type IconProps = Pick<Props, 'size'>
