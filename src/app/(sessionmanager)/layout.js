import "@/assets/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inicio de sesion",
  description: "Inicia sesion o registrate para acceder a tu cuenta",
};

export default async function LoginLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
