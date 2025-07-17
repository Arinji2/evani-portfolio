import { z } from "zod";
export const AssetSchema = z.object({
	id: z.string(),
	drive_id: z.string(),
	width: z.number(),
	height: z.number(),
});
export const ProjectSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	sort_order: z.number(),
	image: z.string(),
	expand: z.object({
		image: AssetSchema,
	}),
});

export type ProjectSchemaType = z.infer<typeof ProjectSchema>;

export const TimelineSchema = z
	.object({
		id: z.string(),
		description: z.string(),
		timeframe: z.string(),
	})
	.transform((value) => {
		const date = new Date(value.timeframe);
		return {
			...value,
			timeframe: date,
		};
	});

export type TimelineSchemaType = z.output<typeof TimelineSchema>;

export const ArtSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	drive_id: z.string(),
	sort_order: z.number(),
	homepage: z.boolean(),
});

export type ArtSchemaType = z.infer<typeof ArtSchema>;
