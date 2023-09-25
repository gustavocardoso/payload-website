import type { HeroWrapperProps } from '~/types/hero'

const HeroWrapper: React.FC<HeroWrapperProps> = ({
  children,
  background,
  backgroundImage = undefined,
  backgroundOpacity = 'none',
  backgroundTextColor = 'light',
  id = 'hero'
}) => {
  let opacity
  let textColor

  switch (backgroundOpacity) {
    case '20':
      opacity = 'opacity-20'
      break
    case '30':
      opacity = 'opacity-30'
      break
    case '50':
      opacity = 'opacity-50'
      break
    default:
      opacity = 'opacity-100'
      break
  }

  switch (backgroundTextColor) {
    case 'light':
      textColor = 'text-light'
      break

    default:
      textColor = 'text-dark'
      break
  }
  return (
    <section
      id={id}
      className={`hero relative z-0 background-${background} ${textColor} py-32 group relative z-10`}
    >
      {children}
      {background === 'image' && backgroundImage && (
        <>
          <div
            className={`bg-image w-full ${opacity} absolute inset-0 bg-cover z-10`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className='bg-image bg-black absolute inset-0 z-0'></div>
        </>
      )}
    </section>
  )
}

export default HeroWrapper
