import "../styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import ThemeContextDefaultProvider from "@/context/ThemeContextProvider";


export const metadata: Metadata = {
  title: "Algo Atlas",
  description: "master data structures & algos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextDefaultProvider>
      <body  className={cn(
          "min-h-screen bg-background antialiased my-1 "
        )}>
          <Navbar/>
          {children}</body>
          </ThemeContextDefaultProvider>
    </html>
  );
}


