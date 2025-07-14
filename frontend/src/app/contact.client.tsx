"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";

export function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = formRef.current;
		if (!form) return;

		const formData = new FormData(form);
		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;

		const result = await emailjs.send(
			"service_kbnpjmy",
			"template_8ta5ygc",
			{
				user_name: `${firstName} ${lastName}`,
				user_email: formData.get("user_email"),
				user_subject: formData.get("user_subject"),
				user_message: formData.get("user_message"),
			},
			"FKlcLUbZedV_wNlJU",
		);

		console.log("Email sent:", result.text);
		toast.success("Message sent successfully! I will get back to you soon.");

		form.reset();
	};

	return (
		<form
			ref={formRef}
			onSubmit={sendEmail}
			className="flex h-fit w-full flex-col items-start justify-start gap-4"
		>
			<div className="flex h-fit w-full flex-col items-center justify-center gap-5 md:flex-row">
				<input
					type="text"
					name="firstName"
					required
					placeholder="First Name"
					className="w-full rounded-2xl border-2 border-blue-light px-4 py-3 placeholder:text-blue-light"
				/>
				<input
					type="text"
					name="lastName"
					required
					placeholder="Last Name"
					className="w-full rounded-2xl border-2 border-blue-light px-4 py-3 placeholder:text-blue-light"
				/>
			</div>

			<input
				type="email"
				name="user_email"
				required
				placeholder="Email Address"
				className="w-full rounded-2xl border-2 border-blue-light px-4 py-3 placeholder:text-blue-light"
			/>

			<input
				type="text"
				name="user_subject"
				required
				placeholder="Subject"
				className="w-full rounded-2xl border-2 border-blue-light px-4 py-3 placeholder:text-blue-light"
			/>

			<textarea
				name="user_message"
				required
				placeholder="Message"
				className="h-[200px] w-full rounded-2xl border-2 border-blue-light px-4 py-3 placeholder:text-blue-light"
			/>

			<button
				type="submit"
				className="h-fit w-fit rounded-2xl bg-blue-light px-8 py-3 text-white"
			>
				Send Message
			</button>
		</form>
	);
}
