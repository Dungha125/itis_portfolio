import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITIS LA NHA",
  description: "This is Itis portfolio",
  icons:{
    icon: "/favicon.ico?v=1",
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/apple-touch-icon.png",
  }
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
