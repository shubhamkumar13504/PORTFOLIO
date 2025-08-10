
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import CursorDot from "@/component/CursorDot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SHUBHAM KUMAR PORTFOLIO",
  description: "THIS IS MY PORTFOLIO.HOPE YOU LIKED IT",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="dark">  
       <body className="flex flex-col min-h-screen">
        <CursorDot/>
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
