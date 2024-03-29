import { z } from "zod";

export const projectSchema = z.object({
  project: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().url(),
    url: z.string().url(),
    technologies: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        imageSrc: z.string().url().optional(),
        backgroundColor: z.string().nullable().optional(),
      })
    ),
    description: z.string(),
  }),
});
