import type { HeroWrapperProps } from '~/types/hero'

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children, background }) => {
  return (
    <section className={`hero background-${background} py-32 group relative z-10`}>
      {children}
    </section>
  )
}

export default HeroWrapper
