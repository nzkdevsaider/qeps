import "@/assets/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Panel de control de qeps",
  description: "Gestiona tu organziación de forma sencilla y eficiente.",
};

export default async function DashboardLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
