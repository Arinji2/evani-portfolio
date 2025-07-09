"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type TimelineItem = {
	timeframe: string;
	event: string;
};

export default function Timeline() {
	const data = [
		{
			timeframe: "May, 2025",
			event:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			timeframe: "April, 2025",
			event:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			timeframe: "July, 2024",
			event:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			timeframe: "September, 2023",
			event:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	return (
		<div className="flex h-fit w-full flex-col items-center justify-center gap-10 px-4">
			<h2 className="font-bold font-title text-2xl md:text-4xl lg:text-6xl">
				Timeline
			</h2>
			<div className="flex w-full flex-col items-center justify-start gap-4 border-blue border-l-[3px]">
				{data.map((item, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Gonna fix when we have actual data
					<TimelineMotionItem key={i} data={item} index={i} />
				))}
			</div>
		</div>
	);
}

function TimelineMotionItem({
	data,
	index,
}: {
	data: TimelineItem;
	index: number;
}) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	return (
		<div className=" flex w-full flex-row items-start justify-start gap-3 overflow-hidden py-2">
			<div className="mt-3 h-[3px] w-[30px] shrink-0 bg-blue md:w-[55px]"></div>
			<motion.p
				ref={ref}
				initial={{ opacity: 0, y: -50 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
				className="text-black text-lg md:text-xl"
			>
				<span className="pr-2 font-bold text-blue">{data.timeframe}</span>
				{data.event}
			</motion.p>
		</div>
	);
}
