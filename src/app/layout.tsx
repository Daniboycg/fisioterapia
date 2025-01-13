import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FisioterapIA | Daniel Carreón",
  description: "Servicios profesionales de fisioterapia y rehabilitación física en Morelia, Michoacán. 10 años de experiencia en tratamientos personalizados.",
  keywords: ["fisioterapia", "rehabilitación", "masajes", "terapia física", "Morelia", "atención a domicilio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
