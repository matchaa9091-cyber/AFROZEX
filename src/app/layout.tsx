import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFROZEX | Innovation, Education & Sports Analysis",
  description: "A multi-dimensional portal bridging Technology, Academics, Sports Analysis, and Entertainment. Explore the future with AFROZEX.",
  keywords: ["Technology", "Academics", "Sports Analysis", "Entertainment", "Portal", "AFROZEX"],
  authors: [{ name: "AFROZEX" }],
  openGraph: {
    title: "AFROZEX Portal",
    description: "Your gateway to innovation, knowledge, and entertainment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="noise-bg" />
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  );
}
