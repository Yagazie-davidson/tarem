import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const jost = Jost({
	subsets: ["latin"],
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
				<Footer />
			</body>
		</html>
	);
}
