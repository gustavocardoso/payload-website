import type { HeroDescriptionProps } from '~/types/blocks/hero'

import { slots } from './styles'

const { heroDescription } = slots()

const HeroDescription: React.FC<HeroDescriptionProps> = ({ text }) => {
  return <p className={heroDescription()}>{text}</p>
}

export default HeroDescription
