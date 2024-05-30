import "../styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils"


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
      <body  className={cn(
          "min-h-screen bg-background antialiased my-1 "
        )}>{children}</body>
    </html>
  );
}


