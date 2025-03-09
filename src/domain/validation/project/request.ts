import { z } from 'zod';
import { ProjectType } from '../../interface/project.interface';

export const paramId = z.object({
  id: z.string().transform((val) => parseInt(val, 10)),
});

export const bodyCreate = z.object({
  challenges: z.string().array(),
  description: z.string().array(),
  image: z.string(),
  integration: z.string().array(),
  libraries: z.string().array(),
  published: z.boolean().default(false),
  skills: z
    .object({
      label: z.string().array(),
      description: z.string().array(),
      importance: z.number(),
    })
    .array(),
  technologies: z.string().array(),
  title: z.string(),
});

export const bodyUpdate = z.object({
  challenges: z.optional(z.string().array()),
  description: z.optional(z.string().array()),
  image: z.optional(z.string()),
  integration: z.optional(z.string().array()),
  libraries: z.optional(z.string().array()),
  technologies: z.optional(z.string().array()),
  title: z.optional(z.string()),
  skills: z.optional(
    z
      .object({
        label: z.string().array(),
        description: z.string().array(),
        importance: z.number(),
      })
      .array()
  ),
});
