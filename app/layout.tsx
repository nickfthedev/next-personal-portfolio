import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { pageInfo } from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio Page",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col">
          <header className="flex-none h-10 bg-gray-200 flex items-center justify-center text-xs text-gray-600 px-5">
            {pageInfo.pageName}
          </header>

          <div className="w-full bg-gray-50 flex-grow">{children}</div>

          <footer className="flex-none h-10 bg-gray-200 flex items-center justify-center text-xs text-gray-600 px-5">
            Copyright {pageInfo.currentYear} {pageInfo.pageOwner}
          </footer>
        </div>
      </body>
    </html>
  );
}
