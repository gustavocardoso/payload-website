export const validate = (email: string, password: string) => {
  let errors: { email?: string; password?: string } = {}

  if (!email) {
    errors.email = 'Email is required'
  } else if (!email.includes('@')) {
    errors.email = 'Email is invalid'
  }

  if (!password) {
    errors.password = 'Password is required'
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return Object.keys(errors).length ? errors : null
}
