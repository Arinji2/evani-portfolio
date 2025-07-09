import type { Metadata } from "next";
import { Playfair_Display, Josefin_Sans } from "next/font/google";
import "./globals.css";

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
				className={`flex flex-col items-center justify-center bg-background w-full h-full ${playfairDisplay.variable} ${josefinSans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
