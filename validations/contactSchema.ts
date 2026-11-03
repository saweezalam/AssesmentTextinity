import { z } from 'zod';

const phoneRegex = /^\+?[0-9\s().-]{7,25}$/;

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(50, { message: 'First name is too long' }),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .max(50, { message: 'Last name is too long' }),
  phoneNumber: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .regex(phoneRegex, { message: 'Phone number must match format: 222-555-6575' }),
});


export type ContactFormData = z.infer<typeof contactSchema>;