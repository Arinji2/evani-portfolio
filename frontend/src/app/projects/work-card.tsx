import type { WorkItem } from "./type";

export default function WorkCard({ data }: { data: WorkItem }) {
	const { title, description, randomHeight } = data;
	return (
		<div className="mb-6 flex h-fit w-full break-inside-avoid flex-col items-start justify-start gap-4">
			<div
				className="w-full bg-neutral-600 "
				style={{ height: `${randomHeight}px` }}
			/>
			<h2 className="font-title text-3xl text-black">{title}</h2>
			<p className="font-content font-light text-black text-xl">
				{description}
			</p>
		</div>
	);
}
