import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const ibmPlex = IBM_Plex_Serif({
	variable: "--font-ibm-plex-serif",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Horizon Bank",
	description: "Horizon Interactive Banking App",
	icons: {
		icon: "../public/icons/logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${ibmPlex.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
