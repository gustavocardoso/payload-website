import qs from 'qs'

export const getPage = async (query: unknown) => {
  const stringifiedQuery = qs.stringify(
    {
      where: query // ensure that `qs` adds the `where` property, too!
    },
    { addQueryPrefix: true }
  )

  return await (
    await fetch(`${process.env.API_URL}/pages/${stringifiedQuery}&depth=2`, {
      headers: {
        Authorization: `users API-Key ${process.env.API_KEY}`
      }
    })
  ).json()
}
