import { Inter } from "next/font/google";
import NavBar from "@/components/Landing/NavBar";
import "@/assets/globals.css";
import Footer from "@/components/Landing/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "qeps",
  description: "Sistema de Matricula y Pagos",
};

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="es">
      <body className={font.className}>
        <NavBar user={user} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
