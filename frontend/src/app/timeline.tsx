import { memoize } from "nextjs-better-unstable-cache";
import { TimelineSchema, type TimelineSchemaType } from "@/lib/data";
import { getPB } from "@/lib/pb";
import { TimelineMotionItem } from "./timeline.client";

export default async function Timeline() {
	const { rawData } = await memoize(
		async () => {
			const pb = await getPB();
			const rawData = await pb
				.collection("timeline")
				.getFullList<TimelineSchemaType>({ sort: "-timeframe" });

			return { rawData };
		},
		{ logid: "timeline", log: ["datacache"] },
	)();

	const timelineData: TimelineSchemaType[] = [];
	rawData.forEach((item) => {
		const parse = TimelineSchema.safeParse(item);
		if (parse.success) {
			timelineData.push(parse.data);
		}
	});

	return (
		<div
			id="timeline"
			className="flex h-fit w-full flex-col items-center justify-center gap-10 px-4"
		>
			<h2 className="font-bold font-title text-2xl md:text-4xl lg:text-6xl">
				Timeline
			</h2>
			<div className="flex w-full flex-col items-center justify-start gap-4 border-blue border-l-[3px]">
				{timelineData.map((item, index) => (
					<TimelineMotionItem key={item.id} data={item} index={index} />
				))}
			</div>
		</div>
	);
}
