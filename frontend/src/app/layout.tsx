import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as it matches the clean Figma look
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickHire - Find Your Dream Job",
  description: "A simple job board application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}