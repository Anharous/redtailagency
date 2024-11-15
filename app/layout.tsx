import type { Metadata } from "next";
import { Inter, Questrial,IBM_Plex_Sans  } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans({
  subsets: ["latin"], variable: "--font-ibm",
  weight: "600"
});
const questrial =Questrial({ subsets:["latin"], variable:"--font-questrial", weight:"400"})

export const metadata: Metadata = {
  title: "Redtail",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibm.variable} ${questrial.variable}`}>{children}</body>
    </html>
  );
}
