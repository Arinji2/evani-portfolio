import { memoize } from "nextjs-better-unstable-cache";
import { TimelineSchema, type TimelineSchemaType } from "@/lib/data";
import { getPB } from "@/lib/pb";
import { TimelineMotionItem } from "./timeline.client";

export default async function Timeline() {
	const { timelineData } = await memoize(
		async () => {
			const pb = await getPB();
			const timelineData: TimelineSchemaType[] = [];
			const rawData = await pb
				.collection("timeline")
				.getFullList<TimelineSchemaType>({
					sort: "-timeframe",
				});
			rawData.forEach((item) => {
				const parse = TimelineSchema.safeParse(item);
				if (parse.success) {
					timelineData.push(parse.data);
				}
			});
			return {
				timelineData,
			};
		},
		{
			logid: "timeline",
			log: ["datacache"],
		},
	)();
	console.log(timelineData);

	return (
		<div className="flex h-fit w-full flex-col items-center justify-center gap-10 px-4">
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
