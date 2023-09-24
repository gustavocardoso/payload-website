import type { HeroDescriptionProps } from '~/types/hero'

const HeroDescription: React.FC<HeroDescriptionProps> = ({ text }) => {
  return <p className='text-2xl leading-normal mt-6'>{text}</p>
}

export default HeroDescription
