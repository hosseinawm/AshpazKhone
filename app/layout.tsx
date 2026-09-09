import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Header/Navbar";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "AshpazKhone",
  description: "a place to get delicious food recipes all at once!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
