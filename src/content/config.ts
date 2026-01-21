import { defineCollection} from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        heroImage: z.string(),
        tags: z.array(z.string()).optional(),
        updatedDate: z.date().optional(),
    }),
});

export const collections = { blog: blogCollection };