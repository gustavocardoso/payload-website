import type { Props } from '~/types/hero'
import HeroTwoCentered from './HeroCentered'
import HeroTwoColumns from './HeroTwoColumns'
import HeroWrapper from './HeroWrapper'

const Hero: React.FC<Props> = ({ props, props: { type, background } }) => {
  switch (type) {
    case 'centered':
      return (
        <HeroWrapper background={background}>
          <HeroTwoCentered props={props} />
        </HeroWrapper>
      )
      break
    case 'two-columns':
      return (
        <HeroWrapper background={background}>
          <HeroTwoColumns props={props} />
        </HeroWrapper>
      )
      break

    default:
      break
  }
}

export default Hero
