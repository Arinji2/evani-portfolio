"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/components/cn";

export function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={cn(
				"fixed top-0 z-40 flex h-[80px] w-full flex-row items-center justify-between border-b-2 border-b-blue/20 bg-background px-6 transition-transform duration-300 ease-in-out",
				{
					"-translate-y-full": pathname === "/" && scrolled < 40,
				},
			)}
		>
			<div className="flex h-fit w-fit flex-col items-center justify-center ">
				<Image
					src="/logo.png"
					alt="logo"
					width={50}
					height={50}
					className="object-contain"
				/>
			</div>
			<div className="flex h-full w-fit flex-row items-center justify-center gap-8">
				<Link href="/" className="font-content font-light text-[28px]">
					Home
				</Link>
				<Link href="/#timeline" className="font-content font-light text-[28px]">
					Timeline
				</Link>
				<Link
					href={"/projects"}
					prefetch={true}
					className="font-content font-light text-[28px]"
				>
					Projects
				</Link>
				<Link href="/art" className="font-content font-light text-[28px]">
					Artwork
				</Link>
				<Link href="/#contact" className="font-content font-light text-[28px]">
					Contact
				</Link>
			</div>
		</div>
	);
}
