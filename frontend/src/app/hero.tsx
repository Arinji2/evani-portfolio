import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BrandGithub, BrandLinkedin } from "@/components/icons/brand";
import {
	CornerBottomLeft,
	CornerTopLeft,
	CornerTopRight,
} from "@/components/icons/corner";
export default function Hero() {
	return (
		<div className="relative flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden md:h-[calc(100svh-48px)] md:w-[calc(100%-48px)] md:rounded-2xl">
			<Image
				src="/hero.png"
				alt="hero"
				fill
				className="-z-20 absolute inset-0 object-cover"
			/>
			<div className="-z-10 absolute h-full w-full bg-black/70 md:bg-black/30"></div>

			{/* Navbar */}
			<ul className="absolute top-0 right-0 hidden h-[80px] w-[600px] flex-row items-center justify-end gap-8 rounded-bl-xl bg-background md:flex">
				<li className="font-content font-light text-[28px]">Home</li>
				<li className="font-content font-light text-[28px]">Timeline</li>
				<Link
					href={"/projects"}
					prefetch={true}
					className="font-content font-light text-[28px]"
				>
					Projects
				</Link>
				<li className="font-content font-light text-[28px]">Artwork</li>
				<li className="font-content font-light text-[28px]">Contact</li>

				<CornerTopLeft className="-translate-x-full absolute top-[2px] left-0 hidden scale-125 text-background md:block" />
				<CornerTopLeft className="-bottom-[2px] absolute right-0 hidden translate-y-full scale-125 text-background md:block" />
			</ul>

			{/* Logo */}
			<div className="absolute top-0 left-0 flex h-[100px] w-[80px] flex-col items-center justify-center rounded-br-xl md:bg-background">
				<Image
					src="/logo.png"
					alt="logo"
					width={50}
					height={50}
					className="object-contain"
				/>
				<CornerTopRight className="absolute top-[2px] right-0 hidden translate-x-full scale-125 text-background md:block" />
				<CornerTopRight className="-bottom-[2px] absolute left-0 hidden translate-y-full scale-125 text-background md:block" />
			</div>

			{/* Content */}
			<div className="absolute left-0 flex h-[200px] w-full flex-col items-start justify-center gap-3 rounded-r-xl px-4 md:w-[600px] md:bg-background md:px-2 md:pl-4 xl:top-auto xl:bottom-32">
				<h1 className="font-bold font-title text-5xl text-white md:text-black">
					Evani Menon
				</h1>
				<p className="font-content font-normal text-white/70 text-xl leading-6 md:line-clamp-3 md:font-light md:text-black">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				</p>

				<CornerTopLeft className="-top-[2px] -translate-y-full absolute left-0 hidden rotate-180 scale-125 text-background md:block" />
				<CornerTopRight className="-bottom-[2px] absolute left-0 hidden translate-y-full scale-125 text-background md:block" />
			</div>

			{/* Socials */}
			<div className="absolute bottom-0 flex h-[100px] w-full flex-row items-center justify-center gap-8 rounded-tl-xl md:right-0 md:w-[250px] md:justify-end md:bg-background">
				<div className="flex size-[3.5rem] flex-col items-center justify-center rounded-full bg-black">
					<Mail className="size-[1.5rem] text-white md:size-[2rem] " />
				</div>
				<div className="flex size-[3.5rem] flex-col items-center justify-center rounded-full bg-black">
					<BrandLinkedin className="size-[1.5rem] text-white md:size-[2rem] " />
				</div>
				<div className="flex size-[3.5rem] flex-col items-center justify-center rounded-full bg-black">
					<BrandGithub className="size-[1.5rem] text-white md:size-[2rem] " />
				</div>
				<CornerTopRight className="-top-[2px] -translate-y-full absolute right-0 hidden rotate-180 scale-125 text-background md:block" />
				<CornerBottomLeft className="-translate-x-full absolute bottom-[2px] left-0 hidden scale-125 text-background md:block" />
			</div>
		</div>
	);
}
