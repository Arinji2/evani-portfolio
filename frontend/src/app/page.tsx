import Featured from "./featured";
import Hero from "./hero";

export default function Home() {
  return (
    <div className="w-full gap-20 pb-10 h-fit max-w-pageMax md:py-6 flex flex-col items-center justify-start">
      <Hero />
      <Featured />
    </div>
  );
}
