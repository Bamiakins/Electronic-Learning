import { z } from "zod";

export const lessonSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});