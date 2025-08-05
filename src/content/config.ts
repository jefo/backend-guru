import { defineCollection, z } from "astro:content";

// Define schema for DDD content collection
const dddCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date().optional(),
		updatedDate: z.date().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		order: z.number().optional(),
		category: z.enum(["basic", "strategic", "tactical"]).optional(),
	}),
});

// Define schema for Smells content collection
const smellsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date().optional(),
		updatedDate: z.date().optional(),
		severity: z.enum(["low", "medium", "high"]).optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		solutions: z.array(z.string()).optional(),
		order: z.number().optional(),
	}),
});

// Define schema for Clean Architecture content collection
const cleanArchitectureCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date().optional(),
		updatedDate: z.date().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		order: z.number().optional(),
	}),
});

// Define schema for System Design content collection
const systemDesignCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date().optional(),
		updatedDate: z.date().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		order: z.number().optional(),
	}),
});

// Export collections
export const collections = {
	ddd: dddCollection,
	smells: smellsCollection,
	"clean-architecture": cleanArchitectureCollection,
	"system-design": systemDesignCollection,
};
