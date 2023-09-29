import BlockContainer from '@ui/BlockContainer'
import type { BackgroundOpacity, HeroProps } from '~/types/blocks/hero'
import HeroCentered from './HeroCentered'
import HeroTwoColumns from './HeroTwoColumns'

const Hero: React.FC<HeroProps> = ({
  props,
  props: {
    type,
    background,
    backgroundImage = undefined,
    backgroundOpacity = 'none',
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
      id={anchor}
    >
      {type === 'centered' && <HeroCentered props={props} />}
      {type === 'two-columns' && <HeroTwoColumns props={props} />}
    </BlockContainer>
  )
}

export default Hero
