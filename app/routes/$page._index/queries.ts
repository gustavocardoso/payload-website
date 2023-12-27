type PageQuery = {
  slug: {
    equals: string
  }
  status: {
    equals: string
  }
}

export const pageQuery = (page: string): PageQuery => ({
  slug: {
    equals: page
  },
  status: {
    equals: 'published'
  }
})
