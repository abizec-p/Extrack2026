import type { Metadata } from "next";
import { Inter ,Open_Sans  } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";





const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExTrack - Expense tracker app",
  description: "Expense tracker app for your daily use",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full   flex justify-between">
        <Nav/>
        <div className=" w-full bg-neutral-100 pl-50">

        {children}
        </div>
        </body>
    </html>
  );
}
