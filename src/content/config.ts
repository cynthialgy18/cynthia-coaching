import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.date(),
    tag:         z.string(),
    emoji:       z.string(),
    bgColor:     z.string().optional(),
    readTime:    z.string(),
  }),
});

export const collections = { blog };
