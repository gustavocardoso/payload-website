import type { Props } from '~/types/hero'
import HeroTwoCentered from './HeroCentered'
import HeroTwoColumns from './HeroTwoColumns'
import HeroWrapper from './HeroWrapper'

const Hero: React.FC<Props> = ({
  props,
  props: {
    type,
    background,
    backgroundImage = undefined,
    backgroundOpacity = 'none',
    backgroundTextColor = 'light',
    anchor = undefined
  }
}) => {
  switch (type) {
    case 'centered':
      return (
        <HeroWrapper
          background={background}
          backgroundImage={backgroundImage}
          backgroundOpacity={backgroundOpacity}
          backgroundTextColor={backgroundTextColor}
          id={anchor}
        >
          <HeroTwoCentered props={props} />
        </HeroWrapper>
      )
      break
    case 'two-columns':
      return (
        <HeroWrapper
          background={background}
          backgroundImage={backgroundImage}
          backgroundOpacity={backgroundOpacity}
          backgroundTextColor={backgroundTextColor}
          id={anchor}
        >
          <HeroTwoColumns props={props} />
        </HeroWrapper>
      )
      break

    default:
      break
  }
}

export default Hero
