import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Header/Navbar";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/providers/QueryProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AshpazKhone",
  description: "a place to get delicious food recipes all at once!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <QueryProvider>
            <Navbar />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
