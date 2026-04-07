import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PrimeGadget online store",
  description:
    "PrimeGadget online shop, your one stop shop for the necessary gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("font-sans", inter.variable)}>
        <body className="font-poppins antialiased">
          <div className="min-h-screen flex flex-col">
             <Navbar></Navbar>
          <main className="flex-1">
            {children}
          </main>
          <Footer></Footer>
          </div>
         
        </body>
      </html>
    </ClerkProvider>
  );
}
