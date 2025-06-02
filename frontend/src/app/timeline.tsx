"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <div className="w-full h-fit flex flex-col gap-10 px-4 items-center justify-center">
      <h2 className="font-title font-bold text-2xl md:text-4xl lg:text-6xl">
        Timeline
      </h2>
      <div className="w-full flex flex-col items-center gap-4 justify-start border-l-[3px] border-blue">
        {data.map((item, i) => (
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
    <div className=" overflow-hidden flex flex-row items-start py-2 justify-start gap-3 w-full">
      <div className="w-[30px] shrink-0 md:w-[55px] h-[3px] bg-blue mt-3"></div>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
        className="text-lg md:text-xl text-black"
      >
        <span className="text-blue font-bold pr-2">{data.timeframe}</span>
        {data.event}
      </motion.p>
    </div>
  );
}
