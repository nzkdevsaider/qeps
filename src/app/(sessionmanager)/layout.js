import "@/assets/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Control de acceso",
  description: "Inicia sesion o registrate para acceder a tu cuenta",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
