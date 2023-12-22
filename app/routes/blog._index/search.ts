export const setSearchUrl = (search: string, categories: FormDataEntryValue[]): string => {
  let urlParams = ''

  if (categories.length > 0) {
    urlParams += `category=${categories.join(',')}`
  }

  if (search) {
    urlParams += `${urlParams ? '&' : ''}search=${search}`
  }

  return urlParams ? `/blog?${urlParams}` : '/blog'
}
