import { Link } from '@remix-run/react'

import categoriesListStyles from './styles'

type CategoriesListProps = {
  categories: {
    slug: string
    title: string
  }[]
  selectedCategory?: string[]
}

const CategoriesList = ({ categories, selectedCategory }: CategoriesListProps) => {
  console.log(selectedCategory?.[0])
  return (
    <div className='categories-list mb-24'>
      <ul className='flex gap-x-4'>
        <li className={categoriesListStyles({ selected: !selectedCategory })}>
          <Link to='/blog' prefetch='intent' unstable_viewTransition>
            All
          </Link>
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={categoriesListStyles({ selected: selectedCategory?.[0] === category.slug })}
          >
            <Link to={`/blog?category=${category.slug}`} prefetch='intent' unstable_viewTransition>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CategoriesList
