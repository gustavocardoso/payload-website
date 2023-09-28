import BlockContainer from '~/components/BlockContainer'
import type { BackgroundOpacity, BackgroundTextColor, HeroProps } from '~/types/blocks/hero'
import HeroCentered from './HeroCentered'
import HeroTwoColumns from './HeroTwoColumns'

const Hero: React.FC<HeroProps> = ({
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
  const paddingY = type === 'two-columns' ? 'py-32' : 'py-16'

  return (
    <BlockContainer
      paddingY={paddingY}
      background={background}
      backgroundImage={backgroundImage}
      backgroundOpacity={backgroundOpacity as BackgroundOpacity}
      backgroundTextColor={backgroundTextColor as BackgroundTextColor}
      id={anchor}
    >
      {type === 'centered' && <HeroCentered props={props} />}
      {type === 'two-columns' && <HeroTwoColumns props={props} />}
    </BlockContainer>
  )
}

export default Hero
