import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JohnsonWu.dev",
  description: "Welcome! Welcome to my site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto min-h-screen max-w-3xl antialiased dark:bg-zinc-950 dark:text-gray-100 ${geistMono.className}`}
      >
        <main className="mx-4  px-2 md:px-0 lg:mx-auto flex flex-col justify-between min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
