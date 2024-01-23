export const createContact = async (data: {}) => {
  const response = await await fetch(`${process.env.API_URL}/contacts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`
    },
    body: JSON.stringify(data)
  })

  return await response.json()
}
