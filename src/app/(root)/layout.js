import NavBar from "@/components/UserView/NavBar";
import "@/assets/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/UserView/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NavBar user={user}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
