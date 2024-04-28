import { defineCollection, z } from 'astro:content';

const level = defineCollection({
	type: 'data',
	schema: z.object({
		metadata: z.object({
			title: z.string(),
			description: z.string(),
		}),
		conversation: z.array(z.object({
			author: z.string(),
			message: z.string(),
		})),
		game: z.object({
			'scrum-master': z.string(),
		}),
	}),
});

export const collections = { level };
