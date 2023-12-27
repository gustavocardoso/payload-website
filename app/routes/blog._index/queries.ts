type PostsQuery = {
  status: {
    equals: string
  }
  'category.slug'?: {
    in: string[]
  }
  title?: {
    contains: string
  }
}

export const postsQuery = (search: string, searchCategoriesArray: string[]): PostsQuery => {
  let postsQuery: PostsQuery = {
    status: {
      equals: 'published'
    }
  }

  if (searchCategoriesArray?.length) {
    postsQuery['category.slug'] = {
      in: searchCategoriesArray
    }
  }

  if (search !== '') {
    postsQuery['title'] = {
      contains: search!
    }
  }

  return postsQuery
}
