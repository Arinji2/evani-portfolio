import Contact from "./contact";
import Featured from "./featured";
import Hero from "./hero";
import Timeline from "./timeline";

export default function Home() {
  return (
    <div className=" font-content w-full gap-20 pb-10 h-fit max-w-pageMax md:py-6 flex flex-col items-center justify-start">
      <Hero />
      <Featured />
      <Timeline />
      <Contact />
    </div>
  );
}
