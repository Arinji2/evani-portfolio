import { z } from "zod";
import { keyPairDefaults } from "@/../scripts/keypairs";

export type KeyPairKey = keyof typeof keyPairDefaults;

export const KeyPairSchema = z.object({
	id: z.string(),
	key: z.enum(Object.keys(keyPairDefaults) as [KeyPairKey, ...KeyPairKey[]]),
	value: z.string(),
});

export type KeyPairSchemaType = z.infer<typeof KeyPairSchema>;

export const ProjectSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	drive_id: z.string(),
	sort_order: z.number(),
});

export type ProjectSchemaType = z.infer<typeof ProjectSchema>;
