import { WorkItem } from "./type";
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
    <div className=" py-10 font-content w-full px-4 gap-10 md:gap-20 h-fit max-w-pageMax md:py-6 flex flex-col items-center justify-start">
      <div className="w-full h-fit flex flex-col text-center items-center justify-start gap-5">
        <h1 className="font-title font-bold text-3xl md:text-5xl text-black">
          My Projects/Publications
        </h1>
        <p className="text-xl  text-center max-w-[800px] font-light font-content text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="xl:block hidden columns-3">
        {reorderForColumns(initialData, 3).map((item, key) => (
          <WorkCard key={key} data={item} />
        ))}
      </div>

      <div className="md:block xl:hidden hidden columns-2">
        {reorderForColumns(initialData, 2).map((item, key) => (
          <WorkCard key={key} data={item} />
        ))}
      </div>

      <div className="md:hidden block columns-1">
        {reorderForColumns(initialData, 1).map((item, key) => (
          <WorkCard key={key} data={item} />
        ))}
      </div>
    </div>
  );
}
