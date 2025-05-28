import {
  CornerBottomLeft,
  CornerTopLeft,
  CornerTopRight,
} from "@/components/icons/corner";
import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import { BrandGithub, BrandLinkedin } from "@/components/icons/brand";

export default function Home() {
  return (
    <div className="w-full h-fit py-6 flex flex-col items-center justify-start">
      <div className="w-[calc(100%-48px)] min-h-[calc(100svh-48px)] relative overflow-hidden rounded-2xl">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-cover absolute inset-0 -z-20"
        />
        <div className="w-full h-full bg-black/30 absolute -z-10"></div>

        {/* Navbar */}
        <ul className="absolute flex flex-row items-center justify-center gap-10 top-0 right-0 w-[700px] h-[100px] bg-background rounded-bl-xl">
          <li className="font-light font-content text-[28px]">Home</li>
          <li className="font-light font-content text-[28px]">Timeline</li>
          <li className="font-light font-content text-[28px]">Projects</li>
          <li className="font-light font-content text-[28px]">Artwork</li>
          <li className="font-light font-content text-[28px]">Contact</li>

          <CornerTopLeft className="absolute top-0 scale-110 -left-5 text-background" />
          <CornerTopLeft className="absolute bottom-0 right-0 translate-y-full scale-125 text-background" />
        </ul>

        {/* Logo */}
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-[100px] h-[100px] bg-background rounded-br-xl">
          <Image
            src="/logo.png"
            alt="logo"
            width={64}
            height={64}
            className="object-contain"
          />
          <CornerTopRight className="absolute top-0 scale-110 -right-5 text-background" />
          <CornerTopRight className="absolute bottom-0 left-0 translate-y-full scale-125 text-background" />
        </div>

        {/* Content */}
        <div className="absolute bottom-32 pl-4 left-0 w-[600px] h-[200px] flex flex-col items-start justify-center gap-2 bg-background rounded-r-xl">
          <h1 className="font-title font-bold text-6xl text-black">
            Evani Menon
          </h1>
          <p className="font-content font-light text-2xl text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <CornerTopLeft className="absolute rotate-180 top-0 -translate-y-full left-0 scale-125 text-background" />
          <CornerTopRight className="absolute bottom-0 left-0 translate-y-full scale-125 text-background" />
        </div>

        {/* Socials */}
        <div className="absolute bottom-0 right-0 flex flex-row items-center justify-end gap-8 w-[310px] h-[100px] bg-background rounded-tl-xl">
          <div className="size-[4.5rem] rounded-full flex flex-col items-center justify-center bg-black">
            <Mail className="text-white size-[2.5rem]" />
          </div>

          <div className="size-[4.5rem] rounded-full flex flex-col items-center justify-center bg-black">
            <BrandLinkedin className="text-white size-[2.5rem]" />
          </div>

          <div className="size-[4.5rem] rounded-full flex flex-col items-center justify-center bg-black">
            <BrandGithub className="text-white size-[2.5rem]" />
          </div>
          <CornerTopRight className="rotate-180 absolute top-0 -translate-y-full scale-125 right-0  text-background" />
          <CornerBottomLeft className="absolute bottom-0 left-0 -translate-x-full scale-125 text-background" />
        </div>
      </div>
    </div>
  );
}
