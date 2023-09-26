import { formSchema } from "@/schemas/form";
import { z } from "zod";

export type formData = z.infer<typeof formSchema>;
