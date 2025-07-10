import Image from "next/image";
import { memoize } from "nextjs-better-unstable-cache";
import type { ProjectSchemaType } from "@/lib/data";
import { getPB } from "@/lib/pb";
import { getProxyURL } from "@/lib/utils";

export default async function Featured() {
	const { featuredProjects } = await memoize(
		async () => {
			const pb = await getPB();
			const featuredProjects = await pb
				.collection("projects")
				.getList<ProjectSchemaType>(1, 3, {
					filter: `featured = true`,
				});
			return {
				featuredProjects,
			};
		},
		{
			logid: "featured",
			log: ["datacache"],
		},
	)();
	return (
		<div className="flex h-fit w-full flex-col items-center justify-center gap-10 px-4">
			<h2 className="font-bold font-title text-2xl md:text-4xl lg:text-6xl">
				Featured Projects
			</h2>
			<div className="flex h-full w-full flex-col items-start justify-evenly gap-x-2 gap-y-10 md:flex-row">
				{featuredProjects.items.map((project) => (
					<FeaturedCard key={project.id} data={project} />
				))}
			</div>
		</div>
	);
}

function FeaturedCard({ data }: { data: ProjectSchemaType }) {
	return (
		<div className="flex h-fit w-full flex-col items-center justify-center md:w-[25%]">
			<div className="group relative h-[250px] w-full overflow-hidden md:h-[350px]">
				<Image
					src={getProxyURL(data.drive_id).toString()}
					alt={`${data.title} cover`}
					fill
					sizes="(min-width: 768px) 350px, 250px"
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
