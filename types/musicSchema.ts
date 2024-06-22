import { emailPattern } from '@/constants/patterns';
import { z } from 'zod';

export const musicSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .refine((text) => emailPattern.test(text), {
      message: 'Email not valid',
    }),
  states: z.array(z.string()).min(1).max(2),
});

export type MusicSchema = z.infer<typeof musicSchema>;
