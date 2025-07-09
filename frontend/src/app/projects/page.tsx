import type { WorkItem } from "./type";
import WorkCard from "./work-card";

export default function Projects() {
	const initialData = Array.from({ length: 6 }).map((_, i) => {
		return {
			title: `Project ${i + 1}`,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			randomHeight: Math.floor(Math.random() * (350 - 200 + 1)) + 200,
		};
	});

	const reorderForColumns = (data: WorkItem[], columnCount: number = 3) => {
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

	return (
		<div className=" flex h-fit w-full max-w-pageMax flex-col items-center justify-start gap-10 px-4 py-10 font-content md:gap-20 md:py-6">
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
			<div className="hidden columns-3 xl:block">
				{reorderForColumns(initialData, 3).map((item, key) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Gonna fix when we have actual data
					<WorkCard key={key} data={item} />
				))}
			</div>

			<div className="hidden columns-2 md:block xl:hidden">
				{reorderForColumns(initialData, 2).map((item, key) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Gonna fix when we have actual data
					<WorkCard key={key} data={item} />
				))}
			</div>

			<div className="block columns-1 md:hidden">
				{reorderForColumns(initialData, 1).map((item, key) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Gonna fix when we have actual data
					<WorkCard key={key} data={item} />
				))}
			</div>
		</div>
	);
}
