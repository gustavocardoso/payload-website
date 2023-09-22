export type MenuItem = {
  link: {
    type: 'custom' | 'page'
    label: string
    page: {
      slug: string
    }
    url: string
  }
  id: string
}

export type MenuItems = {
  label: string
  href: string
}
