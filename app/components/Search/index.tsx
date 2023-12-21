import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Form, useLocation, useSearchParams } from '@remix-run/react'
import { useEffect, useRef } from 'react'

import { slots } from './styles'

const { label } = slots()

type SearchProps = {
  categories: {
    slug: string
    title: string
  }[]
  selectedCategory?: string[]
}

const Search = ({ categories, selectedCategory }: SearchProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get('search') || ''

  useEffect(() => {
    if (!location.search) formRef.current?.reset()
  }, [location.search])

  return (
    <div className='search'>
      <Form ref={formRef} method='post' className='relative flex items-center justify-between'>
        <div className='flex gap-x-6 items-center'>
          <p className='mb-0'>
            <strong>Filter:</strong>{' '}
          </p>

          {categories.map((category, index) => (
            <div key={index} className='flex items-center'>
              <input
                type='checkbox'
                name='category'
                id={category.slug}
                value={category.slug}
                defaultChecked={selectedCategory?.includes(category.slug) || false}
                className='transition-all appearance-none bg-white w-5 h-5 border-gray text-highlight-hover rounded accent-highlight focus:ring-primary mr-2 peer cursor-pointer'
                onInput={() => formRef.current?.submit()}
              />
              <label htmlFor={category.slug} className={label()}>
                {category.title}
              </label>
            </div>
          ))}
        </div>

        <div className='flex items-center'>
          <input
            type='search'
            name='search'
            defaultValue={searchValue}
            placeholder='Search blog'
            className='rounded-lg py-3 px-4 w-96 relative focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 border-gray bg-white transition-all'
          />
          <button type='submit' className='absolute right-4'>
            <MagnifyingGlassIcon className='w-6' />
          </button>
        </div>
      </Form>
    </div>
  )
}
export default Search
