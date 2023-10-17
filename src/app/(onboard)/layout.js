import "@/assets/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onboarding",
  description: "Llena tus datos para comenzar a usar la plataforma.",
};

export default function OnboardLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
