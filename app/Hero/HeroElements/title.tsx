import type { HeroTitleProps } from '~/types/hero'

const HeroTitle: React.FC<HeroTitleProps> = ({ title, titleTag }) => {
  const classes = 'text-6xl leading-tight font-semibold'

  switch (titleTag) {
    case 'h1':
      return <h1 className={classes} dangerouslySetInnerHTML={{ __html: title }}></h1>
      break

    case 'h2':
      return <h2 className={classes} dangerouslySetInnerHTML={{ __html: title }}></h2>
      break

    default:
      break
  }
}

export default HeroTitle
