import { z } from "zod";

export const paramId = z.object({ id: z.string().uuid() });

export const bodyCreate = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  sourceCode: z.string(),
});

export const bodyUpdate = z.object({
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  image: z.optional(z.string()),
  sourceCode: z.optional(z.string()),
});
