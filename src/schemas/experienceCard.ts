import z from "zod";
import dayjs from "dayjs";

export const experienceCardSchema = z.object({
  experience: z.object({
    company: z.object({
      name: z.string(),
      imageSrc: z.string().url(),
    }),
    position: z.string(),
    startDate: z.string().transform((value) => dayjs(value).format("MMM YYYY")),
    endDate: z.string().transform((value) => {
      if (value.toLocaleLowerCase() === "current") {
        return value;
      }

      return dayjs(value).format("MMM YYYY");
    }),
    technologies: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        imageSrc: z.string().url().optional(),
      })
    ),
    summary: z.array(z.string()),
  }),
});
