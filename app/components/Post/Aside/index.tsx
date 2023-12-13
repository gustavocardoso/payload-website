import { CalendarDaysIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'
import type { siteOptionsProps } from '~/types/site-options'
import TableOfContents from '../TableOfContents'

type PostAsideProps = {
  siteOptions: siteOptionsProps
  publishedDate: string
  readingTime: number
  categories?: string[]
  className?: string
}

const PostAside: React.FC<PostAsideProps> = ({
  siteOptions,
  publishedDate,
  readingTime,
  categories,
  className = ''
}) => {
  return (
    <aside className={className}>
      {publishedDate && (
        <p className='flex items-center gap-x-3 mb-4'>
          <span className='w-7'>
            {siteOptions.fontAwesome && <i className='text-2xl fa-solid fa-calendar-days'></i>}
            {!siteOptions.fontAwesome && <CalendarDaysIcon className='w-7' />}
          </span>
          <span className='font-light'>{publishedDate}</span>
        </p>
      )}

      {readingTime && (
        <p className='flex items-center gap-x-3 mb-4'>
          <span className='w-7'>
            {siteOptions.fontAwesome && <i className='text-2xl fa-regular fa-clock'></i>}
            {!siteOptions.fontAwesome && <ClockIcon className='w-7' />}
          </span>
          <span className='font-light'>{readingTime} min read</span>
        </p>
      )}

      {categories && (
        <div className='flex items-start gap-x-3'>
          <span className='w-7'>
            {siteOptions.fontAwesome && <i className='text-2xl fa-solid fa-tag mt-1'></i>}
            {!siteOptions.fontAwesome && <TagIcon className='w-7' />}
          </span>
          <p className='tag-list font-light m-0'>{categories.join(', ')}</p>
        </div>
      )}

      <TableOfContents />
    </aside>
  )
}
export default PostAside
