import type { HeroTitleProps } from '~/types/blocks/hero'

import { slots } from './styles'

const { heroTitle } = slots()

const HeroTitle: React.FC<HeroTitleProps> = ({ title, titleTag = 'h1' }) => {
  switch (titleTag) {
    case 'h1':
      return <h1 className={heroTitle()} dangerouslySetInnerHTML={{ __html: title }}></h1>
      break

    case 'h2':
      return <h2 className={heroTitle()} dangerouslySetInnerHTML={{ __html: title }}></h2>
      break

    default:
      break
  }
}

export default HeroTitle
