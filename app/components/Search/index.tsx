import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Form, useLocation, useSearchParams } from '@remix-run/react'
import { useEffect, useRef } from 'react'

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
      <Form
        ref={formRef}
        method='post'
        action='/blog'
        className='relative flex items-center justify-between'
      >
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
                className='accent-highlight-hover w-6 h-6 rounded-lg mr-2 peer cursor-pointer'
                onChange={() => formRef.current?.submit()}
              />
              <label htmlFor={category.slug}>{category.title}</label>
            </div>
          ))}
        </div>

        <div className='flex items-center'>
          <input
            type='search'
            name='search'
            defaultValue={searchValue}
            placeholder='Search blog'
            className='border-none rounded-lg py-3 px-4 w-96 outline outline-transparent outline-1 focus:border-highlight focus:outline-highlight focus:outline-2 relative'
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
