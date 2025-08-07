import { defineCollection, z } from "astro:content";

// Define schema for DDD content collection
const dddCollection = defineCollection({
	schema: z.object({
		// === Основная информация ===
		title: z.string(),
		description: z.string(),

		// === Таксономия и Навигация ===
		section: z
			.enum(["ddd", "smells", "clean-architecture", "system-design"])
			.default("ddd"),
		category: z.enum(["basic", "strategic", "tactical"]).optional(),

		// === Визуал ===
		cover: z.string().optional(),

		// === Связи ===
		related: z.array(z.string()).optional(),

		// === Метаданные ===
		published: z.boolean().default(true),
		lastUpdated: z.string().optional(),
	}),
	glob: "**/*.{md,mdx}",
	extensions: [".md", ".mdx"],
	flatten: false,
});

// Define schema for Smells content collection
const smellsCollection = defineCollection({
	schema: z.object({
		// === Основная информация ===
		title: z.string(),
		description: z.string(),

		// === Таксономия и Навигация ===
		section: z
			.enum(["ddd", "smells", "clean-architecture", "system-design"])
			.default("smells"),
		category: z.string().optional(), // Например, "coupling" или "data-centric"
		severity: z.enum(["low", "medium", "high"]).optional(),

		// === Визуал ===
		cover: z.string().optional(),

		// === Связи ===
		related: z.array(z.string()).optional(),
		solutions: z.array(z.string()).optional(),

		// === Метаданные ===
		published: z.boolean().default(true),
		lastUpdated: z.string().optional(),
	}),
	glob: "**/*.{md,mdx}",
	extensions: [".md", ".mdx"],
	flatten: false,
});

// Define schema for Clean Architecture content collection
const cleanArchitectureCollection = defineCollection({
	schema: z.object({
		// === Основная информация ===
		title: z.string(),
		description: z.string(),

		// === Таксономия и Навигация ===
		section: z
			.enum(["ddd", "smells", "clean-architecture", "system-design"])
			.default("clean-architecture"),
		category: z.string().optional(),

		// === Визуал ===
		cover: z.string().optional(),

		// === Связи ===
		related: z.array(z.string()).optional(),

		// === Метаданные ===
		published: z.boolean().default(true),
		lastUpdated: z.string().optional(),
	}),
	glob: "**/*.{md,mdx}",
	extensions: [".md", ".mdx"],
	flatten: false,
});

// Define schema for System Design content collection
const systemDesignCollection = defineCollection({
	schema: z.object({
		// === Основная информация ===
		title: z.string(),
		description: z.string(),

		// === Таксономия и Навигация ===
		section: z
			.enum(["ddd", "smells", "clean-architecture", "system-design"])
			.default("system-design"),
		category: z.string().optional(),

		// === Визуал ===
		cover: z.string().optional(),

		// === Связи ===
		related: z.array(z.string()).optional(),

		// === Метаданные ===
		published: z.boolean().default(true),
		lastUpdated: z.string().optional(),
	}),
	glob: "**/*.{md,mdx}",
	extensions: [".md", ".mdx"],
	flatten: false,
});

// Export collections
export const collections = {
	ddd: dddCollection,
	smells: smellsCollection,
	"clean-architecture": cleanArchitectureCollection,
	"system-design": systemDesignCollection,
};
