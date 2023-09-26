import { skillSchema } from "@/schemas/skill";
import { z } from "zod";

export type Skill = z.infer<typeof skillSchema>;
