import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Nigerian Army University Biu",
   description: "Nigerian Army University Biu - Portal",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className="{inter.className}">
            <NextAuthProvider>{children}</NextAuthProvider>
         </body>
      </html>
   );
}
