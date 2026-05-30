import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Stop Precision | Fator Precisão",
  description: "Plataforma referência sobre tiro de precisão, balística e equipamentos táticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${oswald.variable} ${rajdhani.variable} ${orbitron.variable} antialiased scroll-smooth`}
    >
      <body className="font-body min-h-screen text-cool-white overflow-x-hidden relative bg-matte">
        {children}
      </body>
    </html>
  );
}
