import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IKOMI PERÚ",
    template: "%s | IKOMI PERÚ",
  },
  description: "Empresa importadora de repuestos para camiones y equipos pesados.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={raleway.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
