import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { WeaponProvider } from "@/context/WeaponContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aphelios - The Weapon of the Faithful",
  description: "A fan site dedicated to Aphelios and Alune from League of Legends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
      data-weapon-theme="calibrum"
    >
      <body className="min-h-full flex flex-col transition-colors duration-700">
        <WeaponProvider>
          {children}
        </WeaponProvider>
      </body>
    </html>
  );
}
