import { experienceCardSchema } from "@/schemas/experienceCard";
import z from "zod";

export type ExperienceCard = z.infer<typeof experienceCardSchema>;
