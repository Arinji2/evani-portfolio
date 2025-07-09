import { KeyPairSchemaType } from "@/lib/data";
import Contact from "./contact";
import Featured from "./featured";
import Hero from "./hero";
import Timeline from "./timeline";

export default function Home() {
	return (
		<div className=" flex h-fit w-full max-w-pageMax flex-col items-center justify-start gap-20 pb-10 font-content md:py-6">
			<Hero />
			<Featured />
			<Timeline />
			<Contact />
		</div>
	);
}
