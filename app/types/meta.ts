export type MetaProps = {
  title?: string
  page: {
    meta: {
      title: string
      description: string
      keywords: string
    }
  }
}

export type PostMetaProps = {
  docs: [
    {
      title?: string
      excerpt?: string
      meta: {
        title: string
        description: string
        keywords: string
      }
    }
  ]
}
