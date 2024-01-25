import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .min(2, 'First name must be at least 2 characters long'),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .min(2, 'Last name must be at least 2 characters long'),
  email: z.string({ required_error: 'Email is required' }).email('Email is invalid'),
  phoneNumber: z
    .string({ required_error: 'Phone number is required' })
    .refine(value => /^\(\d{3}\) \d{3}-\d{4}$/.test(value), {
      message: 'Phone number must be in format (999) 999-9999'
    }),
  company: z
    .string({ required_error: 'Company name is required' })
    .min(2, 'Company name is invalid'),
  message: z.string({ required_error: 'Message is required' }).min(2, 'Message is invalid')
})
