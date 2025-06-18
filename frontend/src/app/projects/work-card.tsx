import { WorkItem } from "./type";

export default function WorkCard({ data }: { data: WorkItem }) {
  const { title, description, randomHeight } = data;
  return (
    <div className="break-inside-avoid mb-6 w-full h-fit flex flex-col items-start justify-start gap-4">
      <div
        className="w-full bg-neutral-600 "
        style={{ height: `${randomHeight}px` }}
      />
      <h2 className="font-title text-3xl text-black">{title}</h2>
      <p className="font-content text-xl text-black font-light">
        {description}
      </p>
    </div>
  );
}
