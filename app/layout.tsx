import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Provider } from "./provider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Finder",
  description:
    "An application to help pair programming with random devs online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <NextTopLoader />
          <Header />
          <div className="container mx-auto">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
