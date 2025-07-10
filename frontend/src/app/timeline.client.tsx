"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TimelineSchemaType } from "@/lib/data";

export function TimelineMotionItem({
	data,
	index,
}: {
	data: TimelineSchemaType;
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
				<span className="pr-2 font-bold text-blue">
					{new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "long",
					}).format(data.timeframe)}
				</span>
				{data.description}
			</motion.p>
		</div>
	);
}
