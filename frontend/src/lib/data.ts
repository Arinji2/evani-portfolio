import { z } from "zod";
import { keyPairDefaults } from "@/../scripts/keypairs";

export type KeyPairKey = keyof typeof keyPairDefaults;

export const KeyPairSchema = z.object({
	id: z.string(),
	key: z.enum(Object.keys(keyPairDefaults) as [KeyPairKey, ...KeyPairKey[]]),
	value: z.string(),
});

export type KeyPairSchemaType = z.infer<typeof KeyPairSchema>;
