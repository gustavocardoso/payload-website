export const login = async (email: string, password: string) => {
  const loginResponse = await fetch(`${process.env.API_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  const data = await loginResponse.json()

  return data
}
