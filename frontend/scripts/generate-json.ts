import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { keyPairDefaults } from "./keypairs";

const outputPath = resolve(__dirname, "../../db/dist/keypairs.json");

function main() {
	try {
		writeFileSync(outputPath, JSON.stringify(keyPairDefaults, null, 2));
		console.log(`✅ keypairs written to ${outputPath}`);
	} catch (err) {
		console.error("❌ Failed to write keypairs JSON:", err);
		process.exit(1);
	}
}

main();
