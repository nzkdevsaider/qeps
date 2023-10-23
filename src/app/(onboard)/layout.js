import "@/assets/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onboarding",
  description: "Llena tus datos para comenzar a usar la plataforma.",
};

export default function OnboardLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr backdrop-blur-xl from-green-600 to-gray-950">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
