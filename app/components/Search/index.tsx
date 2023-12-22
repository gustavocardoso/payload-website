import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Form, useLocation, useOutletContext, useSearchParams } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import type { siteOptionsProps } from '~/types/site-options'
import { slots } from './styles'

const { label, searchForm, filterWrapper, checkBoxWrapper, checkbox, searchField, submitButton } =
  slots()

type SearchProps = {
  categories: {
    slug: string
    title: string
  }[]
  selectedCategories?: string[]
}

const Search = ({ categories, selectedCategories }: SearchProps) => {
  const siteOptions = useOutletContext<siteOptionsProps>()
  const formRef = useRef<HTMLFormElement>(null)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get('search') || ''

  useEffect(() => {
    if (!location.search) formRef.current?.reset()
  }, [location.search])

  return (
    <div className='search'>
      <Form ref={formRef} method='post' className={searchForm()}>
        <div className={filterWrapper()}>
          <p className='mb-0'>
            <strong>Filter:</strong>{' '}
          </p>

          {categories.map((category, index) => (
            <div key={index} className={checkBoxWrapper()}>
              <input
                type='checkbox'
                name='category'
                id={category.slug}
                value={category.slug}
                defaultChecked={selectedCategories?.includes(category.slug) || false}
                className={checkbox()}
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
            className={searchField()}
          />
          <button type='submit' className={submitButton()}>
            {siteOptions.fontAwesome && (
              <i className='text-xl mt-1 fa-solid fa-magnifying-glass'></i>
            )}
            {!siteOptions.fontAwesome && <MagnifyingGlassIcon className='w-6' />}
          </button>
        </div>
      </Form>
    </div>
  )
}
export default Search
