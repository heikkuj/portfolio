import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Barcode_128_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBarcode = Libre_Barcode_128_Text({
  weight: '400',
  variable: "--font-libre-barcode-128-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heikku J. Portfolio",
  description: "Webdev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBarcode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
