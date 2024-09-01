import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StartBackground";
import Navbar from "@/components/main/Navbar";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "ITIS LA NHA",
    description: "This is Itis portfolio",
    icons: {
        icon: "/favicon.ico?v=1",
        apple: "/apple-touch-icon.png?v=4",
        shortcut: "/apple-touch-icon.png",
    }
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={"".concat(inter.className, " bg-[#0d0d10] overflow-y-scroll overflow-x-hidden")}>
        <StarsCanvas></StarsCanvas>
        <Navbar linkto="Intro"></Navbar>
        {children}</body>
    </html>);
}
