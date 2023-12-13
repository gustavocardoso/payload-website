import BlockContainer from '@ui/BlockContainer'
import type { BackgroundOpacity, HeroProps } from '~/types/blocks/hero'
import HeroCentered from './HeroCentered'
import HeroPage from './HeroPage'
import HeroTwoColumns from './HeroTwoColumns'

const Hero: React.FC<HeroProps> = ({
  props,
  props: {
    type,
    background,
    backgroundImage = undefined,
    backgroundOpacity = 'none',
    padding = 'py-16',
    anchor = undefined
  }
}) => {
  return (
    <BlockContainer
      paddingY={padding}
      background={background}
      backgroundImage={backgroundImage}
      backgroundOpacity={backgroundOpacity as BackgroundOpacity}
      id={anchor}
    >
      {type === 'centered' && <HeroCentered props={props} />}
      {type === 'two-columns' && <HeroTwoColumns props={props} />}
      {type === 'page' && <HeroPage {...props} />}
    </BlockContainer>
  )
}

export default Hero
