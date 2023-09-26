import { z } from "zod";

export const skillSchema = z.object({
  skill: z.object({
    id: z.string(),
    name: z.string(),
    level: z.string(),
    icon: z.string().url(),
    url: z.string().url(),
  }),
});
