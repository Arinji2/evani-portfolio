import Image from "next/image";
import { cn } from "@/components/cn";

export default function Featured() {
	return (
		<div className="flex h-fit w-full flex-col items-center justify-center gap-10 px-4">
			<h2 className="font-bold font-title text-2xl md:text-4xl lg:text-6xl">
				Featured Projects
			</h2>
			<div className="flex h-full w-full flex-col items-start justify-evenly gap-x-2 gap-y-10 md:flex-row">
				{Array(3)
					.fill(null)
					.map((_, i) => (
						//biome-ignore lint/suspicious/noArrayIndexKey: Gonna fix when we have actual data
						<FeaturedCard key={i} isCentre={i === 1} />
					))}
			</div>
		</div>
	);
}

function FeaturedCard({ isCentre }: { isCentre: boolean }) {
	const data = {
		title: "Name",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "/hero.png",
	};
	return (
		<div className="flex h-fit w-full flex-col items-center justify-center md:w-[25%]">
			<div
				className={cn(
					"group relative h-[250px] w-full overflow-hidden md:h-[350px]",
					{
						"md:h-[250px]": isCentre,
					},
				)}
			>
				<Image
					src={data.image}
					alt={data.title}
					fill
					className="object-cover transition-all duration-300 ease-in-out group-hover:scale-125"
				/>
				<div className="absolute top-0 left-0 z-10 h-full w-full bg-black/20 transition-all duration-300 ease-in-out group-hover:bg-black/10"></div>
			</div>
			<h3 className="w-full text-left font-title text-xl md:text-3xl ">
				{data.title}
			</h3>
			<p className="w-full text-left font-content font-light text-lg md:text-lg">
				{data.description}
			</p>
		</div>
	);
}
