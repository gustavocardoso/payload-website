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
  return (
    <HeroWrapper
      background={background}
      backgroundImage={backgroundImage}
      backgroundOpacity={backgroundOpacity}
      backgroundTextColor={backgroundTextColor}
      id={anchor}
    >
      {type === 'centered' && <HeroTwoCentered props={props} />}
      {type === 'two-columns' && <HeroTwoColumns props={props} />}
    </HeroWrapper>
  )
}

export default Hero
