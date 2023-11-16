export type Layout = {
  id: string
  blockType: 'hero-block' | 'ribbon-block' | 'content-block' | 'cta-block'
}

export type Doc = {
  id: string
  title: string
  pageLayout: Layout[]
  status: string
  pageMeta: {
    title: string
    description: string
    keywords: string
  }
  createdAt: string
  updatedAt: string
  meta: {
    title: string
    image: object
    keywords: string
  }
  slug: string
}

export type Docs = {
  docs: Doc[]
}
