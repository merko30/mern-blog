import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import "./globals.css";

import authOptions from "@/lib/authOptions";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/providers/Session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Provider>
          <Header />
          <main className="container mx-auto flex-auto py-12">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
