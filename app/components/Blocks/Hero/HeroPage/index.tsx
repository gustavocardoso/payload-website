import type { TitleTagOptions } from '~/types/blocks/hero'
import HeroTitle from '../HeroElements/title'

import PageTitle from '../HeroElements/pageTitle'
import { slots } from './styles'

export type HeroPageProps = {
  title: string
  titleTag: string
  page?: string
  pageUrl?: string
}

const { heroContainer, heroContent } = slots()

const HeroPage: React.FC<HeroPageProps> = ({ title, titleTag, page, pageUrl = '' }) => {
  return (
    <div className={`hero ${heroContainer()}`}>
      <div className={heroContent()}>
        {page && <PageTitle page={page} pageUrl={pageUrl} />}
        {title && <HeroTitle title={title} titleTag={titleTag as TitleTagOptions} />}
      </div>
    </div>
  )
}

export default HeroPage
