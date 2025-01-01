import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JohnsonWu The Dev",
  description: "Welcome! Welcome to my site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'system';
                if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`mx-auto min-h-screen max-w-3xl antialiased bg-white dark:bg-zinc-950 dark:text-gray-100 ${geistMono.className}`}
      >
        <ThemeProvider>
          <main className="mx-4 px-2 md:px-0 lg:mx-auto flex flex-col justify-between min-h-screen">
            <Navbar />
            {children}
            <Footer/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}