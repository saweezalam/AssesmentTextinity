import { z } from 'zod';

const nameRegex = /^[a-zA-Z\s]+$/;
const globalPhoneRegex = /^[+]?[\d\s\-().]+$/;

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .min(2, { message: 'First name must be at least 2 characters' })
    .max(50, { message: 'First name cannot exceed 50 characters' })
    .regex(nameRegex, { message: 'First name cannot contain special characters or numbers' }),
  
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .min(2, { message: 'Last name must be at least 2 characters' })
    .max(50, { message: 'Last name cannot exceed 50 characters' })
    .regex(nameRegex, { message: 'Last name cannot contain special characters or numbers' }),
  
  phoneNumber: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .min(7, { message: 'Phone number is too short' })
    .max(25, { message: 'Phone number is too long' })
    .regex(globalPhoneRegex, { 
      message: 'Phone number can only contain numbers and standard symbols (-, +, (), .)' 
    }),
});


export type ContactFormData = z.infer<typeof contactSchema>;