import {
  CornerBottomLeft,
  CornerTopLeft,
  CornerTopRight,
} from "@/components/icons/corner";
import { Mail } from "lucide-react";
import Image from "next/image";
import { BrandGithub, BrandLinkedin } from "@/components/icons/brand";

export default function Home() {
  return (
    <div className="w-full h-fit max-w-pageMax md:py-6 flex flex-col items-center justify-start">
      <div className="w-full md:w-[calc(100%-48px)] h-[100svh] md:h-[calc(100svh-48px)]  flex flex-col items-center justify-center relative overflow-hidden md:rounded-2xl">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-cover absolute inset-0 -z-20"
        />
        <div className="w-full h-full bg-black/70 md:bg-black/30 absolute -z-10"></div>

        {/* Navbar */}
        <ul className="absolute hidden md:flex  flex-row items-center justify-end gap-8 top-0 right-0 w-[600px] h-[80px] bg-background rounded-bl-xl">
          <li className="font-light font-content text-[28px]">Home</li>
          <li className="font-light font-content text-[28px]">Timeline</li>
          <li className="font-light font-content text-[28px]">Projects</li>
          <li className="font-light font-content text-[28px]">Artwork</li>
          <li className="font-light font-content text-[28px]">Contact</li>

          <CornerTopLeft className="md:block hidden absolute top-[2px] scale-125 left-0 -translate-x-full text-background" />
          <CornerTopLeft className="md:block hidden absolute -bottom-[2px] right-0 translate-y-full scale-125 text-background" />
        </ul>

        {/* Logo */}
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-[80px] h-[100px] md:bg-background rounded-br-xl">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <CornerTopRight className="md:block hidden absolute top-[2px] scale-125 translate-x-full right-0 text-background" />
          <CornerTopRight className="absolute md:block hidden -bottom-[2px] left-0 translate-y-full scale-125 text-background" />
        </div>

        {/* Content */}
        <div className="absolute xl:top-auto xl:bottom-32 px-4  md:px-2 md:pl-4 left-0 w-full md:w-[600px] h-[200px] flex flex-col items-start justify-center gap-3 md:bg-background rounded-r-xl">
          <h1 className="font-title font-bold text-5xl text-white md:text-black">
            Evani Menon
          </h1>
          <p className="font-content font-normal md:font-light text-xl leading-6 md:line-clamp-3 text-white/70 md:text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <CornerTopLeft className="md:block hidden absolute rotate-180 -top-[2px] -translate-y-full left-0 scale-125 text-background" />
          <CornerTopRight className="md:block hidden absolute -bottom-[2px] left-0 translate-y-full scale-125 text-background" />
        </div>

        {/* Socials */}
        <div className="absolute bottom-0 md:right-0 flex flex-row items-center justify-center md:justify-end gap-8 w-full md:w-[250px] h-[100px] md:bg-background rounded-tl-xl">
          <div className="size-[3.5rem] rounded-full flex flex-col items-center justify-center bg-black">
            <Mail className="text-white size-[1.5rem] md:size-[2rem] " />
          </div>
          <div className="size-[3.5rem] rounded-full flex flex-col items-center justify-center bg-black">
            <BrandLinkedin className="text-white size-[1.5rem] md:size-[2rem] " />
          </div>
          <div className="size-[3.5rem] rounded-full flex flex-col items-center justify-center bg-black">
            <BrandGithub className="text-white size-[1.5rem] md:size-[2rem] " />
          </div>
          <CornerTopRight className="md:block hidden rotate-180 absolute -top-[2px] -translate-y-full scale-125 right-0  text-background" />
          <CornerBottomLeft className="md:block hidden absolute bottom-[2px] left-0 -translate-x-full scale-125 text-background" />
        </div>
      </div>
    </div>
  );
}
