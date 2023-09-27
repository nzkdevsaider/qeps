import NavBar from "@/components/UserView/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/UserView/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "qeps",
  description: "Sistema de Matricula y Pagos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
