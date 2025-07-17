import { BrandGithub, BrandLinkedin } from "@/components/icons/brand";
import { ContactForm } from "./contact.client";

export default function Contact() {
	return (
		<div
			id="contact"
			className="flex w-full flex-col items-stretch justify-between gap-8 px-4 md:flex-row"
		>
			<div className="flex h-fit w-full flex-col items-center justify-start gap-12 md:w-[40%] md:items-start">
				<h2 className="font-bold font-title text-2xl text-blue-light md:text-4xl xl:text-8xl">
					Get in <span className="md:block md:pl-44">Touch</span>
				</h2>
				<div className="flex h-fit w-full flex-col items-start justify-start gap-8 md:gap-16">
					<p className="text-blue text-lg md:text-2xl">
						Send me any message and I’ll try to get back to you whenever I can!
					</p>
					<p className="text-blue text-lg md:text-2xl">
						I need your <strong>Name</strong> and <strong>Email Address</strong>
						, but you won’t receive anything other than your reply.
					</p>
				</div>

				<div className="flex h-fit w-full flex-row items-center justify-center gap-8 md:justify-start">
					<div className="flex size-[3.5rem] flex-col items-center justify-center border-[3px] border-blue-light">
						<BrandLinkedin className="size-[1.5rem] fill-black md:size-[2rem] " />
					</div>

					<div className="flex size-[3.5rem] flex-col items-center justify-center border-[3px] border-blue-light">
						<BrandGithub className="size-[1.5rem] fill-black md:size-[2rem] " />
					</div>
				</div>
			</div>

			<div className="flex h-auto w-full flex-col items-start justify-between gap-8 md:w-fit">
				<h2 className="font-semibold text-2xl ">Send Me a Message</h2>
				<ContactForm />
			</div>
		</div>
	);
}
