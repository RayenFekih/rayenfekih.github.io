import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    employer: z.string(),
    client: z.string().optional(),
    period: z.string(),
    featuredRank: z.number(),
    problem: z.string(),
    scale: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    capabilities: z.array(z.string()),
    technologies: z.array(z.string()),
    confidentiality: z.string(),
    diagramType: z.enum(["retrieval", "agents", "khateeb-workflow", "human-loop", "graph", "content-pipeline", "computer-vision", "football-analytics"]),
    externalUrl: z.url().optional(),
    externalLabel: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { projects };
