import type { Metadata } from "next";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./navbar.client";

const josefinSans = Josefin_Sans({
	variable: "--font-josefin",
	subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Evani Menon",
	description: "Pretty cool description of Evani here :D",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`flex h-full w-full flex-col items-center justify-center bg-background ${playfairDisplay.variable} ${josefinSans.variable} antialiased`}
			>
				<Navbar />
				<Toaster />
				{children}
			</body>
		</html>
	);
}
