import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    desc: z.string().optional(),
    draft: z.boolean().optional(),
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };
