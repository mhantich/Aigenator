import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


import { Suspense } from "react";
import Loading from "./Loading.js";


const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mhantich",
  description: " Mhantich portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html

      className="!scroll-smooth"
      lang="en"
    >
      <body className={playfair.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>

  );
}
