import type { ProjectSchemaType } from "@/lib/data";
import { getPB } from "@/lib/pb";
import ProjectCard from "./work-card";

const reorderForColumns = (
	data: ProjectSchemaType[],
	columnCount: number = 3,
) => {
	const itemsPerColumn = Math.ceil(data.length / columnCount);
	const reordered = [];

	for (let col = 0; col < columnCount; col++) {
		for (let row = 0; row < itemsPerColumn; row++) {
			const index = row * columnCount + col;
			if (index < data.length) {
				reordered.push(data[index]);
			}
		}
	}

	return reordered;
};
export default async function Projects() {
	const pb = await getPB();
	const results = await pb
		.collection("projects")
		.getFullList<ProjectSchemaType>({
			sort: "-featured,-sort_order,-created_at",
			expand: "image",
		});

	return (
		<div className=" flex h-fit w-full max-w-pageMax flex-col items-center justify-start gap-10 px-4 py-10 pt-24 font-content md:gap-20 md:py-6">
			<div className="flex h-fit w-full flex-col items-center justify-start gap-5 text-center">
				<h1 className="font-bold font-title text-3xl text-black md:text-5xl">
					My Projects/Publications
				</h1>
				<p className="max-w-[800px] text-center font-content font-light text-black text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>
			<div className="hidden h-full w-full columns-3 xl:block">
				{reorderForColumns(results, 3).map((item) => (
					<ProjectCard key={item.id} data={item} />
				))}
			</div>

			<div className="hidden h-full w-full columns-2 md:block xl:hidden">
				{reorderForColumns(results, 2).map((item) => (
					<ProjectCard key={item.id} data={item} />
				))}
			</div>

			<div className="block h-full w-full columns-1 md:hidden">
				{reorderForColumns(results, 1).map((item) => (
					<ProjectCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
