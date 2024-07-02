import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITIS LA NHA",
  description: "This is Itis portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0d0d10] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas></StarsCanvas>
        {children}</body>
    </html>
  );
}
