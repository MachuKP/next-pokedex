import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchHeader from "./components/searchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Pokedex",
  description: "Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchHeader />
        {children}</body>
    </html>
  );
}
