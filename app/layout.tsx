import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const jost = Jost({
	subsets: ["latin"],
});

export const howdy = localFont({
	src: [
		{ path: "../public/fonts/Howdybun.otf", weight: "400", style: "normal" },
		{ path: "../public/fonts/Howdybun.ttf", weight: "400", style: "normal" },
	],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Tarem Schools",
	description:
		"A safe, fun, and inspiring environment where children learn through play, creativity, and discovery.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jost.className}`}>
				<Navigation />
				{children}
				<Link
					href={"https://wa.me/2348150502317"}
					target="_blank"
					className="fixed md:bottom-28 z-50 bottom-16 right-4 md:right-10 font-bold text-5xl bg-white rounded-full h-12 w-12 flex justify-center items-center"
				>
					<Image
						alt="whatsapp link"
						src={"/whatsapp.svg"}
						height={30}
						width={30}
						className="text-light"
					/>
				</Link>
				<Footer />
			</body>
		</html>
	);
}
