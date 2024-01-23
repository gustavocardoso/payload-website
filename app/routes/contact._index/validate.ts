import type { ZodError, ZodSchema } from 'zod'

type ActionErrors<T> = Partial<Record<keyof T, string>>

export async function validateForm<ActionInput>({
  request,
  schema
}: {
  request: Request
  schema: ZodSchema
}) {
  const formValues = Object.fromEntries(await request.formData())

  try {
    const formData = schema.parse(formValues) as ActionInput
    return { formData, errors: null }
  } catch (error) {
    const errors = error as ZodError<ActionInput>

    return {
      formData: formValues,
      errors: errors.issues.reduce((acc: ActionErrors<ActionInput>, curr) => {
        const key = curr.path[0] as keyof ActionInput
        acc[key] = curr.message

        return acc
      }, {})
    }
  }
}
