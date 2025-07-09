import Image from "next/image";
import HeroImage from "@/../public/hero.png";

export default function Page() {
	return (
		<div className=" flex h-fit w-full max-w-pageMax flex-col items-center justify-start gap-10 px-4 py-10 font-content md:gap-20 md:py-6">
			<div className="flex h-fit w-full flex-col items-center justify-start gap-5 text-center">
				<h1 className="font-bold font-title text-3xl text-black md:text-5xl">
					My Artworks
				</h1>
				<p className="max-w-[800px] text-center font-content font-light text-black text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>

			<div className="framed-image relative inline-block h-fit w-fit ">
				<Image src={HeroImage} alt="Hero" />
			</div>
		</div>
	);
}
