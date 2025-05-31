import { cn } from "@/components/cn";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="w-full h-fit flex flex-col gap-10 px-4  items-center justify-center">
      <h2 className="font-title font-bold text-2xl md:text-4xl lg:text-6xl">
        Featured Projects
      </h2>
      <div className="w-full h-full flex flex-col gap-x-2 gap-y-10 md:flex-row items-start justify-evenly">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <FeaturedCard key={i} isCentre={i === 1} />
          ))}
      </div>
    </div>
  );
}

function FeaturedCard({ isCentre }: { isCentre: boolean }) {
  const data = {
    title: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/hero.png",
  };
  return (
    <div className="md:w-[25%] w-full h-fit flex flex-col items-center justify-center">
      <div
        className={cn(
          "relative md:h-[350px] group h-[250px] w-full overflow-hidden",
          {
            "md:h-[250px]": isCentre,
          },
        )}
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-125 transition-all duration-300 ease-in-out"
        />
        <div className="w-full h-full bg-black/20 top-0 left-0 absolute z-10 group-hover:bg-black/10 transition-all duration-300 ease-in-out"></div>
      </div>
      <h3 className="w-full text-xl md:text-3xl font-title text-left ">
        {data.title}
      </h3>
      <p className="text-left w-full font-content md:text-lg text-lg font-light">
        {data.description}
      </p>
    </div>
  );
}
