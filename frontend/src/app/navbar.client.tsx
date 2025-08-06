"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/components/cn";

export function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(0);
	const [showMenu, setShowMenu] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showMenu]);

	return (
		<div
			className={cn(
				"fixed top-0 z-40 flex h-[80px] w-full flex-row items-center justify-center border-b-2 border-b-blue/20 bg-background transition-transform duration-300 ease-in-out lg:px-6",
				{
					"-translate-y-full": pathname === "/" && scrolled < 40,
				},
			)}
		>
			<div className="h-full w-full max-w-pageMax lg:px-6">
				<div className="hidden h-full w-full flex-row items-center justify-between lg:flex ">
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
						<Link
							href="/#timeline"
							className="font-content font-light text-[28px]"
						>
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
						<Link
							href="/#contact"
							className="font-content font-light text-[28px]"
						>
							Contact
						</Link>
					</div>
				</div>
				<div className="flex h-full w-full flex-row items-center justify-between px-3 lg:hidden">
					<div className="flex h-fit w-fit flex-col items-center justify-center ">
						<Image
							src="/logo.png"
							alt="logo"
							width={50}
							height={50}
							className="object-contain"
						/>
					</div>
					<button
						type="button"
						onClick={() => {
							setShowMenu((men) => !men);
						}}
						className="relative h-5 w-8"
					>
						<div
							className={cn(
								"-translate-y-2 absolute top-1/2 left-0 h-[3px] w-full transform bg-black transition-all duration-300",
								{
									"translate-y-0 rotate-45": showMenu,
								},
							)}
						></div>

						<div
							className={cn(
								"absolute top-1/2 left-0 h-[3px] w-full bg-black ",
								{
									"opacity-0": showMenu,
								},
							)}
						></div>

						<div
							className={cn(
								"absolute top-1/2 left-0 h-[3px] w-full translate-y-2 transform bg-black transition-all duration-300",
								{
									"-rotate-45 translate-y-0": showMenu,
								},
							)}
						></div>
					</button>

					<div
						className={cn(
							"fixed bottom-0 left-0 z-20 flex h-[calc(100dvh-80px)] w-full translate-x-full flex-col items-center justify-center gap-10 bg-background transition-transform duration-300 ease-in-out",
							{
								"translate-x-0": showMenu,
							},
						)}
					>
						{[
							{ href: "/", label: "Home" },
							{ href: "/#timeline", label: "Timeline" },
							{ href: "/projects", label: "Projects" },
							{ href: "/art", label: "Artwork" },
							{ href: "/#contact", label: "Contact" },
						].map((item, index) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"translate-y-4 font-content font-light text-4xl opacity-0 transition-all duration-300",
									{
										"translate-y-0 opacity-100": showMenu,
									},
								)}
								style={{
									transitionDelay: `${index * 100}ms`,
								}}
								onClick={() => setShowMenu(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
