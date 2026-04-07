import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    auteur: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    categorie: z.string().optional(),
    fichier_pdf: z.string().optional(),
  }),
});

export const collections = { blog };
