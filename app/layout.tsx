import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header/Header";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Wiki",
  description: "Rick and Morty Wiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  characters: React.ReactNode
  characterInfo: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className='container mt-[20px]'>
          <div className=' grid grid-cols-3'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
