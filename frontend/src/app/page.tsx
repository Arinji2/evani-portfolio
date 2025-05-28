import {
  CornerBottomLeft,
  CornerTopLeft,
  CornerTopRight,
} from "@/components/icons/corner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-fit py-6 flex flex-col items-center justify-start">
      <div className="w-[calc(100%-48px)] min-h-[calc(100svh-48px)] relative overflow-hidden rounded-2xl">
        <Image
          src="/hero.png"
          alt="hero"
          fill
          className="object-cover absolute inset-0 -z-10"
        />

        {/* Navbar */}
        <ul className="absolute flex flex-row items-center justify-center gap-14 top-0 right-0 w-[700px] h-[100px] bg-background rounded-bl-xl">
          <li className="font-light font-content text-2xl">Home</li>
          <li className="font-light font-content text-2xl">Timeline</li>
          <li className="font-light font-content text-2xl">Projects</li>
          <li className="font-light font-content text-2xl">Artwork</li>
          <li className="font-light font-content text-2xl">Contact</li>

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
        <div className="absolute bottom-0 right-0 w-[400px] h-[100px] bg-background rounded-tl-xl">
          <CornerTopRight className="rotate-180 absolute top-0 -translate-y-full scale-125 right-0  text-background" />
          <CornerBottomLeft className="absolute bottom-0 left-0 -translate-x-full scale-125 text-background" />
        </div>
      </div>
    </div>
  );
}
