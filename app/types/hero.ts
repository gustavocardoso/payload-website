import type { Background } from './background'

export type Props = {
  type: 'oneColumn' | 'twoColumns'
  title: string
  description?: string
  alignment: 'right' | 'center' | 'left'
  media: string
  buttons?: Array<{ text: string; link: string; style: string }>
  background: Background
  effects?: {
    rotate: boolean
    scale: boolean
    shadow: boolean
    grayscale: boolean
  }
}
