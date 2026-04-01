import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "PrimeGadget online store",
  description: "PrimeGadget online shop, your one stop shop for the necessary gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col font-poppins antialiased">{children}</body>
    </html>
  );
}
