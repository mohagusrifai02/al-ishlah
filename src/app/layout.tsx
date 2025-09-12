import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yayasan Al-Ishlah",
  description: "Official Website Yayasan Al-Ishlah Hidayatullah Kabupaten Tegal",
  icons:{
    icon:'/logo.jpeg'
  },
  openGraph:{
    title:"Yayasan Al-Ishlah",
    description:"Official Website Yayasan Al-Ishlah Hidayatullah Kabupaten Tegal",
    url:"https://al-ishlah-tau.vercel.app",
    siteName:"Yayasan Al-Ishlah",
    images:[
      {
        url:'/kantor.jpg',
        width:800,
        height:600,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
