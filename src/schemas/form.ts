import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(3),
});
